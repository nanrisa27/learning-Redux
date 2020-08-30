import React from 'react'
import { logOut } from '../../store/authActions'
import { connect } from 'react-redux'

class Register extends React.Component {

    componentDidMount = () => {
        this.props.logOut();
    }

    render() {
        return (
            <div>
                {
                    this.props.loginStatus ?
                        <div>Logout fail</div> :
                        <div>successfuly loggedout</div>
                }
            </div>

        );

    }
}

const mapStateToProps = (state) => {
    return {
        loginStatus: !state.firebase.auth.isEmpty
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => {
            dispatch(logOut());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
