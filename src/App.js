import React, { Component } from 'react'
import 'bootstrap-css-only'

import Navbar from './Navbar'
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
    /*this.props.base.bindToState('comments', {
      context: this,
      state: 'comments'  
    })*/
    this.refsComments = this.props.base.syncState('comments', {
      context: this,
      state: 'comments'
    })
    this.props.auth.onAuthStateChanged((user)=>{
      if(user){
        this.setState({ isLoggedIn: true, user: user })
      }else{
        this.setState({ isLoggedIn: false, user: {} })
      }
    })
    this.postNewComment = this.postNewComment.bind(this)
    this.auth = this.auth.bind(this)
  }
  postNewComment(comment){
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
        <div className="container" style={{paddingTop: '80px'}}>
          { 
            this.state.isLoggedIn ?
            <div> 
              <div className="row">
                <div className="col-md-2">
                  <img src={this.state.user.photoURL} alt="Foto do usuário"/>
                </div>
                <div className="col-md-10">
                  <p>{this.state.user.displayName}</p>
                  <button className="btn btn-warning" onClick={() => this.props.auth.signOut()}>Sair do facebook</button>
                </div>
              </div>   
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
