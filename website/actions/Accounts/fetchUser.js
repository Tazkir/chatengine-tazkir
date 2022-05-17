import axios from 'axios';
import * as str from '../index.js';

export const fetchUser = (userId, successFunc) => (dispatch, getState) => {
  const { token } = getState().accounts;

  axios.get(
    `${str.ROOT_URL}/accounts/${userId}/`,
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
