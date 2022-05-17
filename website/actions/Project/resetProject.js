import * as str from '../index.js'

export const resetProject = () => (dispatch) => {
    dispatch({ 
        type: str.RESET_PROJECT
    })
}
