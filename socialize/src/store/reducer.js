const currentTime = new Date();

const initialState = {
    posts: [

    ],
    userData: {},
    userActionErr: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
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

export default reducer;