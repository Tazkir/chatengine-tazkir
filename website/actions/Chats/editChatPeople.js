import axios from 'axios'
import * as str from '../index.js'

export const editChatPeople = (projectId, chatId, data, successFunc, errorFunc) => (dispatch, getState) => {
    const { token } = getState().accounts;

    axios.put(
        `${str.ROOT_URL}/projects/${projectId}/chats/${chatId}/`,
        data,
        { headers: { Authorization: `Token ${token}` }}
    )

    .then((response) => {
        if (response.status === 200) {
            dispatch({
                type: str.UPDATE_CHAT,
                payload: response.data
            })
            successFunc && successFunc(response.data)
        }
    })

    .catch((error) => {
        errorFunc && errorFunc(error)

        console.log('Edit Chat Members error', error.response)
    })
}
