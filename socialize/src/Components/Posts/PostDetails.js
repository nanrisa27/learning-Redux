import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link } from "react-router-dom"
import { Redirect } from "react-router-dom"
import { moment } from "moment"


const Postdetails = (props) => {
    const { post, auth } = props;
    if (auth.uid) return <Redirect to='/Login' />
    if (post) {



        return (

            <div className="container">
                <div className="card">
                    <div className="card-title">
                        {post.title}
                    </div>
                    <div className="card-content">
                        <p>by {post.authorUserName}</p>
                        <p> {post.content}</p>
                        <div className="cardImage">
                            <img src="" alt="placeholder" />
                        </div>
                    </div>
                    <div className="card-action black-text">
                        <div><span>
                            {moment(post.createAt.toDate()).calender()}
                        </span>
                        </div>
                        <Link to={'/HomePage'} />

                    </div>
                </div>
            </div>

        );

    }
    else {
        return (
            <div className="container center">
                <p>post Loading...</p>
            </div>
        )
    }

}

//Id param will be apended to the end of the url
const mapStateToProps = (state, ownProps) => {

    const id = ownProps.match.params.id;
    const posts = state.firestore.data.posts
    const post = posts ? posts[id] : null

    return {
        post: post,
        auth: state.firebase.auth
    }


}

export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'posts' }]))
    (Postdetails);
