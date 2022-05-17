import axios from 'axios'
import * as str from '../index.js'

export const editWebhook = (event_trigger, data, successFunc, errorFunc) => (dispatch, getState) => {
    const { token } = getState().accounts;
    const { public_key } = getState().steps;

    axios.patch(
        `${str.ROOT_URL}/webhooks/${public_key}/${event_trigger}/`,
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

        console.log('Edit webhook error', error.response)
    })
}
