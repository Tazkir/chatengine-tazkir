import axios from 'axios';
import * as str from '../../actions';

export const getFeedback = (successFunc) => (dispatch, getState) => {
  const { token } = getState().accounts;

  axios.get(
    `${str.ROOT_URL}/feedback/`,
    { headers: { Authorization: `Token ${token}` }}
  )

  .then((response) => {
    successFunc(response.data);
  })

  .catch((error) => {
    console.log('Fetch feedback error', error.response);
  });
}
