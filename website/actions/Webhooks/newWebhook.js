import axios from 'axios'
import * as str from '../index.js'

export const newWebhook = (data, successFunc, errorFunc) => (dispatch, getState) => {
    const { token } = getState().accounts;
    const { public_key } = getState().steps;

    axios.post(
        `${str.ROOT_URL}/webhooks/${public_key}/`,
        data,
        { headers: { Authorization: `Token ${token}` }}
    )

    .then((response) => {
        dispatch({
            type: str.UPDATE_WEBHOOK,
            payload: response.data
        })
        successFunc && successFunc(response.data)
    })

    .catch((error) => {
        errorFunc && errorFunc(error)

        console.log('New webhook error', error.response)
    })
}
