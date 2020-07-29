export const SET_ALERT = "SET_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";
export const GET_PROFILE = "GET_PROFILE";
export const GET_PROFILES = "GET_PROFILES";
export const GET_REPOS = "GET_REPOS";
export const UPDATE_PROFILE = "GET_PROFILE";
export const PROFILE_ERROR = "PROFILE_ERROR";
export const DELETED_ACCOUNT = "DELETED_ACCOUNT";
export const CLEAR_PROFILE = "CLEAR_PROFILE";
export const GET_POSTS = "GET_POSTS";
export const POSTS_ERROR = "POSTS_ERROR";

// const newUser = {
//   name,
//   email,
//   password,
// };

// try {
//   const config = {
//     headers: {
//       "Content-Type": "Application/json",
//     },
//   };

//   const body = JSON.stringify(newUser);

//   const res = await axios.post("/api/users", body, config);
//   console.log(res.data);
// } catch (err) {
//   console.error(err.response.data);
// }
