import axios from 'axios'
import * as str from '../index.js'

export const getWebhooks = (projectID, successFunc, errorFunc) => (dispatch, getState) => {
    const { token } = getState().accounts;

    axios.get(
        `${str.ROOT_URL}/webhooks/${projectID}/`,
        { headers: { Authorization: `Token ${token}` }}
    )

    .then((response) => {
        if (response.status === 200) {
            dispatch({
                type: str.GET_WEBHOOKS,
                payload: response.data
            })
            successFunc && successFunc(response.data)
        }
    })

    .catch((error) => {
        errorFunc && errorFunc(error)
        console.log('Get Webhooks error', error.response)
    })
}
