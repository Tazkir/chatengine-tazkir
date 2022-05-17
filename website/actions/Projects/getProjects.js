import axios from 'axios'
import * as str from '../index.js'

export const getProjects = (successFunc, errorFunc) => (dispatch, getState) => {
    const { token } = getState().accounts;

    axios.get(
        `${str.ROOT_URL}/projects/`,
        { headers: { Authorization: `Token ${token}` }}
    )

    .then((response) => {
        if (response.status === 200) {
            successFunc && successFunc(response.data)

            dispatch({
                type: str.FETCH_PROJECTS,
                payload: response.data
            })
        }
    })

    .catch((error) => {
        errorFunc && errorFunc(error)

        console.log('Fetch closet error', error.response)
    })
}
