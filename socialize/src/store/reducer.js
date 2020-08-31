import { firebaseReducer, firestoreReducer } from 'react-redux-firebase'
import { combineReducers } from 'redux'

const initialState = {
    posts: [

    ],
    userData: {},
    userActionErr: null,
    loginStatus: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log("login error");
            return {
                ...state,
                userActionErr: action.error.code
            }
        case 'LOGIN_SUCCESS':
            console.log('Login success, state not changed');
            return {
                ...state,
                loginStatus: true
            };
        case "SIGNUP_SUCCESS":
            return {
                ...state,
                authError: null
            }
        case "SIGNUP_ERROR":
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCHED_POSTS_SUCCESS':
            return {
                ...state,
                posts: action.resp
            }

        case 'CREATE_NEW_POST':
            console.log('A new post has been added')
            return state;

        case 'CREATE_NEW_POST_FAIL':
            console.log('An error has occurred: ' + action.err.message);
            return {
                ...state,
                userActionErr: action.err.message
            };

        case 'REMOVE_ALL_POSTS':
            return {
                ...state,
                posts: []
            }
        default:
            return state;
    }
}

const reducer = combineReducers({
    auth: authReducer,
    post: postReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default reducer;