import React from 'react';
import Firebase from 'firebase';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmission = this.handleSubmission.bind(this);
    }

    handleChange = (e) => {
        console.log(this);
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmission = (e) => {
        e.preventDefault();

        Firebase.auth().createUserWithEmailAndPassword(
            this.state.email,
            this.state.password
        ).then(resp => {
            Firebase.firestore().collection('users').doc(resp.user.uid).set({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email
            }).then(() => {
                console.log('User account created.');
                console.log(resp.user.uid);
            })

            // logged in 
        }).catch(err => {
            console.log('Create account fail: ' + err);
        });


    }
    onPasswordChange(e) {
        //checking password strength  
        //By default the state is weak
        this.setState({ pwdState: "weak" });
        if (e.target.value.length > 8) {
            this.setState({ pwdState: "medium" });
        } else if (e.target.value.length > 12) {
            this.setState({ pwdState: "strong" });
        }
    }

    render() {
        //error message desplay to user if input fields have errors
        const { registering } = this.props;
        const { user, submitted } = this.state;
        //determine the current state of password 
        let pwdWeak = false,
            pwdMedium = false,
            pwdStrong = false;
        //Weak password set onlt the pwdWeak to true, cause render only the first bar 
        if (this.state.pwdState === "weak") {
            pwdWeak = true;
        } else if (this.state.pwdState === "medium") {
            //Medium pwd then render the weak and medium bars 
            pwdWeak = true;
            pwdMedium = true;
        } else if (this.state.pwdState === "strong") {
            //Strong, render all the previoud bars 
            pwdWeak = true;
            pwdMedium = true;
            pwdStrong = true;
        }
        return (
            <div className="container">
                <h3>Register</h3>

                <form onSubmit={this.handleSubmission}>
                    <div className="input-field">
                        <input onChange={this.handleChange} id="firstname" type="text" className="validate" />
                        <label htmlFor="firstname">First Name:</label>
                        {submitted && !user.firstName &&
                            <div className="help-block">First Name is required</div>}
                    </div>
                    <div className="input-field">
                        <input onChange={this.handleChange} id="lastname" type="text" className="validate" />
                        <label htmlFor="lastname">Last Name:</label>
                        {submitted && !user.lastname &&
                            <div className="help-block">Last Name is required</div>}
                    </div>
                    <div className="input-field">
                        <input onChange={this.handleChange} id="email" type="text" className="validate" />
                        <label htmlFor="email">Email:</label>
                        {submitted && !user.email &&
                            <div className="help-block">Email is required</div>}
                    </div>
                    <div className="input-field">
                        <input onChange={this.handleChange} id="password" type="password" className="validate" />
                        <label htmlFor="password">Password</label>
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>}
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Register</button>

                </form>

            </div>
        );
    }
}

export default Register;









