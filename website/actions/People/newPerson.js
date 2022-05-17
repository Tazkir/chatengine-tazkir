import axios from 'axios'
import * as str from '../index.js'

export const newPerson = (projectId, data, successFunc, errorFunc) => (dispatch, getState) => {
    const { token } = getState().accounts;

    let formdata = new FormData()
    Object.keys(data).map(key => {
        if(key === 'avatar' && typeof data[key] === 'object') {
            return formdata.append(key, data[key], data[key].name)
        }
        return formdata.append(key, data[key])
    })

    axios.post(
        `${str.ROOT_URL}/projects/${projectId}/people/`,
        formdata,
        { headers: { Authorization: `Token ${token}` }}
    )

    .then((response) => {
        if (response.status === 201) {
            dispatch({
                type: str.UPDATE_PERSON,
                payload: response.data
            })
            successFunc && successFunc(response.data)
        }
    })

    .catch((error) => {
        errorFunc && errorFunc(error)

        console.log('New User error', error.response)
    })
}
