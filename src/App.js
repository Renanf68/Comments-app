import React, { Component } from 'react'
import 'bootstrap-css-only'

import Navbar from './Navbar'
import ProfileContainer from './ProfileContainer'
import NewComment from './NewComment'
import Comments from './Comments'
import Footer from './Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: {},
      isLoggedIn: false,
      user: {}
    }
    this.props.auth.onAuthStateChanged((user)=>{
      if(user){
        this.setState({ isLoggedIn: true, user: user })
        this.syncComments()
      }else{
        this.setState({ 
          isLoggedIn: false, 
          user: {}
        })
      }
    })
    this.syncComments = this.syncComments.bind(this)
    this.postNewComment = this.postNewComment.bind(this)
    this.auth = this.auth.bind(this)
    if(this.state.user){
      this.syncComments()
    }
  }
  syncComments(){
    this.refsComments = this.props.base.syncState('comments', {
      context: this,
      state: 'comments'
    })
  }
  postNewComment(comment){
    comment.user = {
      uid: this.state.user.uid,
      name: this.state.user.displayName
    }
    const comments =  { ...this.state.comments }
    const timestamp = Date.now()+Math.floor(Math.random()*100)
    comments[`comm-${timestamp}`] = comment
    this.setState({
      comments: comments
    })
  }
  auth(provider){
    var provider2 = this.props.providers[provider]
    this.props.auth.signInWithPopup(provider2)
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container" style={{paddingTop: '51px', paddingBottom: '120px'}}>
          { 
            this.state.isLoggedIn ?
            <div> 
              <ProfileContainer user={this.state.user} auth={this.props.auth}/>   
              <NewComment postNewComment={this.postNewComment}/> 
            </div>
            :
            <div className="alert alert-info">
              <p>Para comentar, é preciso estar logado em sua conta do Facebook.</p>
              <button className="btn btn-info" onClick={() => this.auth('facebook')}>Fazer login com o Facebook</button>
            </div>
          }
          <Comments comments={this.state.comments} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
