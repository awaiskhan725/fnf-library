import {
  CHANGE_SEARCH_FIELD,
  REQUEST_DATA_PENDING,
  REQUEST_DATA_SUCCESS,
  REQUEST_DATA_FAILED,
} from "./constants";

// redux action that returns an object
export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

// redux action that is a higher order function that returns a function
export const requestData = () => (dispatch) => {
  // set the initial type value to pending
  dispatch({ type: REQUEST_DATA_PENDING });
  // fetch data from the internet
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => dispatch({ type: REQUEST_DATA_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: REQUEST_DATA_FAILED, payload: error }));
};
