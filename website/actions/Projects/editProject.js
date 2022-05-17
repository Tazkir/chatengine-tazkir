import axios from 'axios'
import * as str from '../index.js'

export const editProject = (projectId, data, successFunc, errorFunc) => (dispatch, getState) => {
    const { token } = getState().accounts;

    axios.patch(
        `${str.ROOT_URL}/projects/${projectId}/`,
        data,
        { headers: { Authorization: `Token ${token}` }}
    )

    .then((response) => {
        successFunc && successFunc(response.data)
        dispatch({
            type: str.FETCH_PROJECT,
            payload: response.data
        })
        dispatch({
            type: str.UPDATE_PROJECT,
            payload: response.data
        })
    })

    .catch((error) => {
        errorFunc && errorFunc(error)

        console.log('Edit project error', error.response)
    })
}
