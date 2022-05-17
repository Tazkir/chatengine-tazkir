import axios from 'axios'
import * as str from '../index.js'

export const deletePerson = (projectId, personId, successFunc, errorFunc) => (dispatch, getState) => {
    const { token } = getState().accounts;

    axios.delete(
        `${str.ROOT_URL}/projects/${projectId}/people/${personId}/`,
        { headers: { Authorization: `Token ${token}` }}
    )

    .then((response) => {
        if (response.status === 200) {
            dispatch({
                type: str.DELETE_PERSON,
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
