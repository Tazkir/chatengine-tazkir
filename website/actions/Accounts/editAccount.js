import axios from 'axios';
import * as str from '../index.js';

export const editAccount = (values, successFunc, errorFunc) => (dispatch, getState) => {
  const { token } = getState().accounts; 

  axios.patch(
    `${str.ROOT_URL}/accounts/me/`,
    values,
    { headers: { Authorization: `Token ${token}` }}
  )

  .then((response) => {
    if (response.status === 200) {
      dispatch({
        type: str.PATCH_ACCOUNT,
        payload: response.data
      });
      
      successFunc(response.data);
    }
  })
  
  .catch((error) => {
    console.log('Edit account error', error.response);

    errorFunc();
  });
}