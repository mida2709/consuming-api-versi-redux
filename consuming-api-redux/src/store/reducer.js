// import { FETCH_POSTS, CREATE_POST, DELETE_POST, UPDATE_POST } from './actions';
import { FETCH_POSTS, CREATE_POST,DELETE_POST,UPDATE_POST } from "./action";

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      // Simulasikan pengambilan data dari API
      const fetchedPosts = [
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
        { id: 3, title: 'Post 3' },
      ];
      return {
        ...state,
        posts: fetchedPosts,
      };
    case CREATE_POST:
      const newPost = {
        id: Date.now(),
        title: action.payload.title,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case DELETE_POST:
      const updatedPosts = state.posts.filter((post) => post.id !== action.payload);
      return {
        ...state,
        posts: updatedPosts,
      };
    case UPDATE_POST:
      const { postId, postData } = action.payload;
      const updatedPostIndex = state.posts.findIndex((post) => post.id === postId);
      const updatedPost = {
        ...state.posts[updatedPostIndex],
        ...postData,
      };
      const updatedPostsArray = [...state.posts];
      updatedPostsArray[updatedPostIndex] = updatedPost;
      return {
        ...state,
        posts: updatedPostsArray,
      };
    default:
      return state;
  }
};

export default postReducer;
