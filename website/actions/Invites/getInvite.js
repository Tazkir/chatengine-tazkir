import axios from 'axios'
import * as str from '../index.js'

export const getInvite = (inviteKey, successFunc, errorFunc) => (dispatch, getState) => {

    axios.get(`${str.ROOT_URL}/projects/invites/${inviteKey}/`)

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

        console.log('Get invite error', error.response)
    })
}
