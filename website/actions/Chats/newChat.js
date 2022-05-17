import axios from 'axios'
import * as str from '../index.js'

export const newChat = (projectId, data, successFunc, errorFunc) => (dispatch, getState) => {
    const { token } = getState().accounts;


    axios.post(
        `${str.ROOT_URL}/projects/${projectId}/chats/`,
        data,
        { headers: { Authorization: `Token ${token}` }}
    )

    .then((response) => {
        if (response.status === 201) {
            dispatch({
                type: str.UPDATE_CHAT,
                payload: response.data
            })
            successFunc && successFunc(response.data)
        }
    })

    .catch((error) => {
        errorFunc && errorFunc(error)

        console.log('New chat error', error.response)
    })
}
