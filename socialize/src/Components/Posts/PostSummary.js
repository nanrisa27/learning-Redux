import React from 'react'
import { Link } from "react-router-dom"
import { moment } from "moment";

class PostSummary extends React.Component {
    render() {
        const post = this.props;
        return (
            <div className="card post">
                <div className="card-title">{post.title}</div>
                <div className="card-content">
                    <div className="card-img">
                        <img src="" alt="post img"></img>
                    </div>
                    <p>{post.content}</p>
                    <p>posted by:{post.authorUserName}</p>
                    <span>{moment(post.created.toDate()).calender()}</span>
                    <div className="card-action">
                        <Link to={'/post' + post.id} key={post.id} />
                    </div>

                </div>
            </div>
        )
    }
}

export default PostSummary;
