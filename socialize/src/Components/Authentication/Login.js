import React from 'react';
import { logIn } from '../../store/authActions'
import { connect } from 'react-redux'
import "../../Styling/CSS/HomePage.css"

class LogIn extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        //this.props.logout();

        this.state = {
            email: null,
            password: null,
            submitted: false
        };

        this.handleSubmission = this.handleSubmission.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        console.log(this);
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmission = (e) => {
        e.preventDefault();
        this.props.logIn(this.state);
        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
            this.props.logIn(email, password);
        }
    };

    render() {
        const { loggingIn } = this.props;
        const { email, password, submitted } = this.state;

        return (
            <div className="root-container">
                <div className="box-controller">
                    <div className="controller">
                        <div className="box-container">
                            <h3 className="login_lable">Login</h3>
                            {
                                this.props.loginStatus ?
                                    <div >You are now logged in</div> :

                                    <form onSubmit={this.handleSubmission}>
                                        <div className="">
                                            <input id="email" type="text" className="" onChange={this.handleChange} />
                                            <label htmlFor="email">Email</label>
                                            {submitted && !email &&
                                                <div className=" danger-error">Email is required</div>
                                            }
                                        </div>
                                        <div className="">
                                            <input id="password" type="password" className="" onChange={this.handleChange} />
                                            <label htmlFor="password">Password</label>
                                            {submitted && !password &&
                                                <div className="danger-error">Password is required</div>
                                            }
                                        </div>
                                        <button className="login-btn" type="submit" name="action" >Log In</button>
                                        {loggingIn}
                                    </form>
                            }
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loginStatus: !state.firebase.auth.isEmpty
    }
}


const mapDispatchToProps = dispatch => {
    return {
        logIn: credentials => {
            dispatch(logIn(credentials));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);









