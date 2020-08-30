import React from 'react'
import PostSummary from './PostSummary'
import { connect } from 'react-redux'
import { removePosts, getPosts } from '../../store/PostActions'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


class AllPosts extends React.Component {
    render() {
        const { posts } = this.props;
        const { removePost } = this.props
        return (
            <div className="posts-container">
                <button className="btn" onClick={removePost}>Clear All Post</button>
                {posts && posts.map(post => {

                    return (
                        <PostSummary post={post} key={post.id} />
                    )

                })}



            </div>
        )
    }
}

const mapStateToProps = state => {
    if (state.firestore.data.posts) {
        debugger;
        return {
            posts: state.firestore.data.posts
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removePost: () => {
            dispatch(removePosts());
        },
        getPosts: () => {
            dispatch(getPosts());
        }
    }
}
// using the connect tool to connect AllPosts to the fedux store

export default compose(
    connect(mapStateToProps, mapDispatchToProps), firestoreConnect([
        { collection: 'posts', orderBy: ['createdAt', 'desc'] }
    ])
)(AllPosts);