export const removePosts = () => ({ type: 'REMOVE_ALL_POSTS' })

// export const createPost = post => ({ type: 'CREATE_NEW_POST', post })

export const newPost = (post) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        const firestore = getFirestore();
        const authorId = getState().firebase.auth.authorId

        firestore
            .collection("posts")
            .add({ ...post, authorId: authorId, created_at: new Date() })
            .then(() => {
                dispatch({ type: 'CREATE_NEW_POST', post });
            })
            .catch(err => {
                dispatch({ type: 'CREATE_NEW_POST_FAILED', err: err })
            });
    };
}

export const getPosts = (post) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        const firestore = getFirestore();
        const firebase = getFirebase();

        firestore
            .collection('posts')
            .get()
            .then(resp => {
                dispatch({
                    type: 'FETCHED_POSTS_SUCCESS',
                    resp: resp.docs
                })
            })
            .catch(err => {
                dispatch({
                    type: 'FETCHED_POSTS_FAIL',
                    err: err
                })
            });
    };
}