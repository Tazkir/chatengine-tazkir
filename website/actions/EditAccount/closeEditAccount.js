import * as str from '../index.js'

export const closeEditAccount = () => (dispatch) => {
    dispatch({ type: str.CLOSE_EDIT_ACCOUNT });
}