/*import firebase from 'firebase';

export const createPost = (post) => {
    return (dispatch) => {
        firebase.firestore().collection('posts').add(post)
            .then(() => {
                dispatch({ type: 'CREATE_POST_SUCCESSFUL' })
            }).catch(err => {
                dispatch({ type: 'CREATE_POST_ERROR' }, err)
            })
    }
}

export const userAction = () => {

}*/


