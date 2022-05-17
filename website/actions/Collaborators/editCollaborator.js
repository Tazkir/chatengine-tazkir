import axios from 'axios'
import * as str from '../index.js'

export const editCollaborator = (projectId, collaboratorId, data, successFunc, errorFunc) => (dispatch, getState) => {
    const { token } = getState().accounts;

    axios.patch(
        `${str.ROOT_URL}/projects/${projectId}/collaborators/${collaboratorId}/`,
        data,
        { headers: { Authorization: `Token ${token}` }}
    )

    .then((response) => {
        if (response.status === 200) {
            dispatch({
                type: str.UPDATE_COLLABORATOR,
                payload: response.data
            })
            successFunc && successFunc(response.data)
        }
    })

    .catch((error) => {
        errorFunc && errorFunc(error)

        console.log('Edit collaborator error', error.response)
    })
}
