import axios from 'axios';
import * as str from '../index.js';

export const signIn = (data, successFunc, errorFunc) => (dispatch) => {
    axios.post(`${str.ROOT_URL}/accounts/login/`, data)

    .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: str.SIGN_IN_OK,
            payload: response.data
          });

          successFunc(response.data);
        }
    })

    .catch((error) => {
      if (error.response && error.response.status === 400) {
        errorFunc('Oops! These creds are not correct.');

      } else if (error.response && error.response.status === 404) {
        errorFunc('We cannot find that email');
        
      } else {
        console.log('Sign In Error', error);
      }
    });
}