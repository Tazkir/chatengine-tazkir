import axios from 'axios';
import * as str from '../../actions';

export const sendFeedback = (data, successFunc) => (dispatch, getState) => {
  const { token } = getState().accounts;

  axios.post(
    `${str.ROOT_URL}/feedback/`,
    data,
    { headers: { Authorization: `Token ${token}` }}
  )

  .then((response) => {
    if (response.status === 201) {
      successFunc(response.data);
    }
  })

  .catch((error) => {
    console.log('Post feedback error', error.response);
  });
}
