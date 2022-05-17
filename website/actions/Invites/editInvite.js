import axios from 'axios'
import * as str from '../index.js'

export const editInvite = (inviteKey, data, successFunc, errorFunc) => (dispatch, getState) => {
    const { token } = getState().accounts;

    axios.patch(
        `${str.ROOT_URL}/projects/invites/${inviteKey}/`,
        data,
        { headers: { Authorization: `Token ${token}` }}
    )

    .then((response) => {
        if (response.status === 200) {
            dispatch({
                type: str.UPDATE_INVITE,
                payload: response.data
            })
            successFunc && successFunc(response.data)
        }
    })

    .catch((error) => {
        errorFunc && errorFunc(error)

        console.log('Edit invite error', error.response)
    })
}
