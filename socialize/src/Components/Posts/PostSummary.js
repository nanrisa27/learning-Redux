import React from 'react'

class PostSummary extends React.Component {
    render(){
        return (
            <div className="card post">
                <div className="card-title">{this.props.post.title}</div>
                <div className="card-content">{this.props.post.content}</div>
            </div>
        )
    }
} 

export default PostSummary;
