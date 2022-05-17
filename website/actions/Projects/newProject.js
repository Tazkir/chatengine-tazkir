import axios from 'axios'
import * as str from '../index.js'

export const newProject = (data, successFunc, errorFunc) => (dispatch, getState) => {
    const { token } = getState().accounts;

    axios.post(
        `${str.ROOT_URL}/projects/`,
        data,
        { headers: { Authorization: `Token ${token}` }}
    )

    .then((response) => {
        if (response.status === 201) {
            successFunc && successFunc(response.data)

            dispatch({
                type: str.FETCH_PROJECT,
                payload: response.data
            })
        }
    })

    .catch((error) => {
        errorFunc && errorFunc(error)

        console.log('Fetch closet error', error.response)
    })
}
