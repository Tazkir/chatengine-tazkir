import axios from 'axios'
import * as str from '../index.js'

export const deleteWebhook = (event_trigger, successFunc, errorFunc) => (dispatch, getState) => {
    const { token } = getState().accounts;
    const { public_key } = getState().steps;

    axios.delete(
        `${str.ROOT_URL}/webhooks/${public_key}/${event_trigger}/`,
        { headers: { Authorization: `Token ${token}` }}
    )

    .then((response) => {
        console.log(response.data)
        dispatch({
            type: str.DELETE_WEBHOOK,
            payload: response.data
        })
        successFunc && successFunc(response.data)
    })

    .catch((error) => {
        errorFunc && errorFunc(error)

        console.log('Delete webhook error', error.response)
    })
}
