import React from 'react'

/* functional stateless components
const Comment = (props) => {
    return <p className="well">{props.comment.comment}</p>
}*/

// Nesse caso pode ser escrito assim:
const Comment = props => <p className="well">{props.comment.comment}</p>

export default Comment