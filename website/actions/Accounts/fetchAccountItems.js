import axios from 'axios';
import * as str from '../index.js';

export const fetchAccountItems = (userId, successFunc) => (dispatch, getState) => {
  const { token } = getState().accounts;

  axios.get(
    `${str.ROOT_URL}/accounts/${userId}/items/`,
    { headers: { Authorization: `Token ${token}` }}
  )

  .then((response) => {
    if (response.status === 200) {
      successFunc(response.data);
    }
  })

  .catch((error) => {
    console.log('Fetch closet error', error.response);
  });
}