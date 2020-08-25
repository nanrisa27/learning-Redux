import React from 'react'
import { connect } from 'react-redux'

class NewPost extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmission = this.handleSubmission.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmission = (e) => {
        e.preventDefault();
        this.props.createPost({
            title: this.state.postTitle,
            content: this.state.postContent
        });
    }

    render(){
        return (
            <div className="container">
                <form onSubmit={this.handleSubmission}>
                    <div className="input-field">
                        <input id="postTitle" type="text" className="validate" onChange={this.handleChange}/>
                        <label htmlFor="postTitle">Title:</label>
                    </div>
                    <div className="input-field">
                        <textarea id="postContent" className="materialize-textarea" data-length="500" onChange={this.handleChange}></textarea>
                        <label htmlFor="postContent">Content:</label>
                    </div>
        
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                </form>
            </div>
        );
    }
} 
// when to dispatch the action?
// what is the name of the props to be called so that the action is dispatched
// is there a payload to be dispatched together with the action?

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => {
            console.log(post);
            return dispatch({ 
                type: 'CREATE_NEW_POST', 
                post: post
            }) 
        }  
    }
}

export default connect(null, mapDispatchToProps)(NewPost);