import axios from 'axios'
import * as str from '../index.js'

export const getPrivateKey = (projectId, successFunc, errorFunc) => (dispatch, getState) => {
    const { token } = getState().accounts;

    axios.get(
        `${str.ROOT_URL}/projects/${projectId}/private_key/`,
        { headers: { Authorization: `Token ${token}` }}
    )

    .then((response) => {
        if (response.status === 200) {
            successFunc && successFunc(response.data)
        }
    })

    .catch((error) => {
        errorFunc && errorFunc(error)

        console.log('Fetch closet error', error.response)
    })
}
