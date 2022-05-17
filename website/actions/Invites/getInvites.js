import axios from 'axios'
import * as str from '../index.js'

export const getInvites = (projectId, successFunc, errorFunc) => (dispatch, getState) => {
    const { token } = getState().accounts;

    axios.get(
        `${str.ROOT_URL}/projects/${projectId}/invites/`,
        { headers: { Authorization: `Token ${token}` }}
    )

    .then((response) => {
        if (response.status === 200) {
            dispatch({
                type: str.GET_INVITES,
                payload: response.data
            })
            successFunc && successFunc(response.data)
        }
    })

    .catch((error) => {
        errorFunc && errorFunc(error)

        console.log('Get collaborators error', error.response)
    })
}
