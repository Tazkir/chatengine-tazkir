import axios from 'axios'
import * as str from '../index.js'

export const getProject = (projectId, successFunc, errorFunc) => (dispatch, getState) => {
    const { token } = getState().accounts;

    axios.get(
        `${str.ROOT_URL}/projects/${projectId}/`,
        { headers: { Authorization: `Token ${token}` }}
    )

    .then((response) => {
        if (response.status === 200) {
            successFunc && successFunc(response.data)

            dispatch({
                type: str.FETCH_PROJECT,
                payload: response.data
            })
            dispatch({
                type: str.UPDATE_PROJECT,
                payload: response.data
            })
        }
    })

    .catch((error) => {
        errorFunc && errorFunc(error)

        console.log('Fetch project error', error.response)
    })
}
