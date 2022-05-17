import axios from 'axios'
import * as str from '../index.js'

export const deleteAccount = (successFunc, errorFunc) => (dispatch, getState) => {
  const { token } = getState().accounts; 

  axios.delete(
    `${str.ROOT_URL}/accounts/me/`,
    { headers: { Authorization: `Token ${token}` }}
  )

  .then((response) => {
    successFunc(response.data)
  })
  
  .catch((error) => {
    console.log('Delete account error', error.response)

    errorFunc()
  });
}