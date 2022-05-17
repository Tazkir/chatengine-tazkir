import axios from 'axios';
import * as str from '../index.js';

export const signUp = (data, successFunc, errorFunc) => (dispatch) => {
  axios.post(`${str.ROOT_URL}/accounts/`, data)

  .then((response) => {
    if (response.status === 200 || response.status === 201) {
      dispatch({
        type: str.SIGN_IN_OK,
        payload: response.data
      });

      successFunc(response.data);
    }
  })

  .catch((error) => {
    if (error.response && error.response.status === 400) {
      errorFunc(error.response.data.message);
      
    } else {
      console.log('Sign Up Error', error.response);
    }
  });
}