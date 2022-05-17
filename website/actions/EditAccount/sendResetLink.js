import axios from 'axios';
import * as str from '../index.js';

export const sendResetLink = (values, successFunc, errorFunc) => (dispatch) => {
  axios.put(
    `${str.ROOT_URL}/accounts/`,
    values
  )

  .then((response) => {
    successFunc(response.data)
  })
  
  .catch((error) => {
    console.log('Send reset link error', error.response)

    errorFunc(error.response)
  })
}