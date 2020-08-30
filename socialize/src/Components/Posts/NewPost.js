import React from 'react';
import { connect } from 'react-redux';
import { newPost } from "../../store/PostActions";
import { Redirect } from "react-router-dom";

class NewPost extends React.Component {
    constructor(props) {
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
        this.props.NewPost({
            title: this.state.title,
            content: this.state.postContent
        });
        this.props.history.push('/')
    }

    render() {
        const auth = this.props;
        if (!auth.Uid) return <Redirect to='/Login' />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmission}>
                    <div className="input-field">
                        <input id="postTitle" type="text" className="validate" onChange={this.handleChange} />
                        <label htmlFor="title">Title:</label>
                    </div>
                    <div className="input-field">
                        <textarea id="postContent" className="materialize-textarea" data-length="500" onChange={this.handleChange}></textarea>
                        <label htmlFor="content">Content:</label>
                    </div>

                    <button className="btn waves-effect waves-light" type="submit" name="action">Post</button>
                </form>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        NewPost: (post) => {
            dispatch(NewPost(post))
        }
    }
}

export default connect(null, mapDispatchToProps, mapStateToProps)(NewPost);