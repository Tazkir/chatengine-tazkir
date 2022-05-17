import axios from 'axios';
import * as str from '../index.js';

export const resetAccount = (uuid, successFunc, errorFunc) => (dispatch) => {
    axios.get(`${str.ROOT_URL}/accounts/${uuid}/`)

    .then((response) => {
        if (response.status === 200) {
            dispatch({
                type: str.SIGN_IN_OK,
                payload: response.data
            });

            successFunc(response.data);
        }
    })

    .catch((error) => {
        errorFunc(error.response)
        console.log('Reset account error', error.response);
    });
}
