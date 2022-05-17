import axios from 'axios'
import * as str from '../index.js'

export const getMessageCount = (projectId, successFunc, errorFunc) => (dispatch, getState) => {
    const { token } = getState().accounts;

    axios.get(
        `${str.ROOT_URL}/projects/${projectId}/message_count/`,
        { headers: { Authorization: `Token ${token}` }}
    )

    .then((response) => {
        if (response.status === 200) {
            dispatch({
                type: str.UPDATE_PROJECT,
                payload: response.data
            })
            successFunc && successFunc(response.data)
        }
    })

    .catch((error) => {
        errorFunc && errorFunc(error)
        console.log('Fetch message count error', error)
    })
}
