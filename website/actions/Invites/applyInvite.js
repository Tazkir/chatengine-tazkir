import axios from 'axios'
import * as str from '../index.js'

export const applyInvite = (inviteKey, successFunc, errorFunc) => (dispatch, getState) => {

    axios.put(`${str.ROOT_URL}/projects/invites/${inviteKey}/`)

    .then((response) => {
        if (response.status === 200 || response.status === 201) {
            dispatch({
                type: str.FETCH_PROJECT,
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
