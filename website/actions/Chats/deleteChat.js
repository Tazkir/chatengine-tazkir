import axios from 'axios'
import * as str from '../index.js'

export const deleteChat = (projectId, chatId, successFunc, errorFunc) => (dispatch, getState) => {
    const { token } = getState().accounts;

    axios.delete(
        `${str.ROOT_URL}/projects/${projectId}/chats/${chatId}/`,
        { headers: { Authorization: `Token ${token}` }}
    )

    .then((response) => {
        if (response.status === 200) {
            dispatch({
                type: str.DELETE_CHAT,
                payload: response.data
            })
            successFunc && successFunc(response.data)
        }
    })

    .catch((error) => {
        errorFunc && errorFunc(error)

        console.log('Delete person error', error.response)
    })
}
