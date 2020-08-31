import React, { Component } from 'react'
import AllPosts from '../Posts/AllPosts'
import Notifications from '../Homepage/Noticications';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import { Redirect } from 'react-router-dom';

class HomePage extends Component {
    render() {
        const { posts, auth, notifications } = this.props;
        if (!auth.uid) return <Redirect to="/Login" />


        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <AllPosts posts={posts} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications} />
                    </div >
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] },
    ])
)(HomePage)