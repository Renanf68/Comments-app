import React, { Component } from 'react'

class NewComment extends Component {
    constructor(props){
        super(props)
        this.handleEnter = this.handleEnter.bind(this)
    }
    handleEnter(event){
        if(event.keyCode===13){
            this.props.postNewComment({
                comment: this.refs.comment.value
            })
            this.refs.comment.value = ''
            event.preventDefault()
        }
    }
    render() {
        return (
            <div className="row" style={{padding: '15px'}}>
                <p>Comentar:</p>
                <textarea ref="comment" placeholder="Adicione um comentário!" 
                    className="form-control" onKeyDown={this.handleEnter}></textarea>
            </div>
        )
    }
}

export default NewComment