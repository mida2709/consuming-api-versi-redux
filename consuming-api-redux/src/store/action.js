export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';

export const fetchPosts = () => {
  return {
    type: FETCH_POSTS,
  };
};

export const createPost = (postData) => {
  return {
    type: CREATE_POST,
    payload: postData,
  };
};

export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    payload: postId,
  };
};

export const updatePost = (postId, postData) => {
  return {
    type: UPDATE_POST,
    payload: { postId, postData },
  };
};
