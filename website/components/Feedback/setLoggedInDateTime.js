import * as str from '../../actions';

export const setLoggedInDateTime = () => (dispatch) => {
    dispatch({
        type: str.SET_LOGGED_IN_DATE_TIME
    })
}
