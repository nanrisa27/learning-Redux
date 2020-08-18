import React from 'react'
import PostSummary from './PostSummary'
import firebase from 'firebase'

class AllPosts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: null
        };
    }

    componentDidMount = () => {
        firebase.firestore().collection('posts').get()
            .then(resp => {
                this.setState({
                    posts: resp.docs
                })
            })
            .catch(err => {
                console.log(err.message);
            });
    }

    render(){
        
        var x = 0;
        return (
            <div>
                { 
                    this.state.posts ? 
                    this.state.posts.map(post => <PostSummary post={post.data()} key={x++}/>):
                    'Loading....'
                }
            </div>
        )
    }
} 

export default AllPosts;