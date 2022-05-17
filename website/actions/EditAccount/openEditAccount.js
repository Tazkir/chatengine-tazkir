import * as str from '../index.js'

export const openEditAccount = () => (dispatch) => {
    dispatch({ type: str.OPEN_EDIT_ACCOUNT });
}