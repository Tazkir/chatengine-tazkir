import axios from 'axios'
import * as str from '../index.js'

export const deleteInvite = (inviteKey, successFunc, errorFunc) => (dispatch, getState) => {
    const { token } = getState().accounts;

    axios.delete(
        `${str.ROOT_URL}/projects/invites/${inviteKey}/`,
        { headers: { Authorization: `Token ${token}` }}
    )

    .then((response) => {
        if (response.status === 200) {
            dispatch({
                type: str.DELETE_INVITE,
                payload: response.data
            })
            successFunc && successFunc(response.data)
        }
    })

    .catch((error) => {
        errorFunc && errorFunc(error)

        console.log('Delete invite error', error.response)
    })
}
