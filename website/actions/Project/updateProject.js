import * as str from '../index.js'

export const updateProject = (data) => (dispatch) => {
    dispatch({ 
        type: str.UPDATE_PROJECT,
        payload: data
    })
}
