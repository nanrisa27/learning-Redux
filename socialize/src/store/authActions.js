export const logIn = function (credentials) {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase
            .auth()
            .signInWithEmailAndPassword(
                credentials.email,
                credentials.password
            ).then(() => {
                dispatch({
                    type: 'LOGIN_SUCCESS'
                });
            }).catch(err => {
                console.log('Login fail: ' + err);

                dispatch({
                    type: 'LOGIN_ERROR',
                    error: err
                });
            });
    };
}

export const logOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firesbase = getFirebase();

        firesbase
            .auth()
            .signOut()
            .then(() => {
                console.log('Logout success');

                dispatch({
                    type: 'LOGOUT_SUCCESS'
                });
            }).catch(err => {
                console.log('Logout fail: ' + err);

                dispatch({
                    type: 'LOGOUT_ERROR',
                    error: err
                });
            });
    };
}
export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firesbase = getFirebase();
        const firestore = getFirestore();

        firesbase
            .auth()
            .createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then(resp => {
                return firestore.collection("users").doc(resp.user.uid).set({
                    firstname: newUser.firstname,
                    lastname: newUser.lastname,

                });

            })
            .then(() => {
                dispatch({ type: "SIGNUP_SUCCESS" });
            })

            .catch(err => {
                dispatch({ type: "SIGNUP_ERROR", err });
            });
    }
}

