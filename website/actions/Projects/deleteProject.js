import axios from 'axios'
import * as str from '../index.js'

export const deleteProject = (projectId, successFunc, errorFunc) => (dispatch, getState) => {
    const { token } = getState().accounts;

    axios.delete(
        `${str.ROOT_URL}/projects/${projectId}/`,
        { headers: { Authorization: `Token ${token}` }}
    )

    .then((response) => {
        if (response.status === 200) {
            successFunc && successFunc(response.data)
        }
    })

    .catch((error) => {
        errorFunc && errorFunc(error)

        console.log('Delete project error', error.response)
    })
}
