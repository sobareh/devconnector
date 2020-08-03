import axios from "axios";
import { setAlert } from "./alert";
import { GET_POSTS, POSTS_ERROR, UPDATE_LIKES, DELETE_POSTS } from "./types";

// Get posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts");

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: err.response.data,
    });
  }
};

// Add like
export const addLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: {
        id,
        likes: res.data,
      },
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: err.response.data,
    });
  }
};

// Remove like
export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/unlike/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: {
        id,
        likes: res.data,
      },
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: err.response.data,
    });
  }
};

// Delete posts
export const deletePost = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/unlike/${id}`);

    dispatch({
      type: DELETE_POSTS,
      payload: id,
    });

    dispatch(setAlert("Post Removed", "success"));
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: err.response.data,
    });
  }
};
