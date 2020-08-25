import React from 'react'
import PostSummary from './PostSummary'
import { connect } from 'react-redux'

class AllPosts extends React.Component {
    render(){
        return (
            <div>
                <button className="btn" onClick={this.props.removePost}>Delete All Posts</button>
                { 
                    this.props.posts ? 
                    this.props.posts.map(post => 
                        <PostSummary post={post} key={Math.random()*99}/>
                    ) :
                    'Loading ....'
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removePost: () => {
            dispatch({ type: 'REMOVE_ALL_POSTS' });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);