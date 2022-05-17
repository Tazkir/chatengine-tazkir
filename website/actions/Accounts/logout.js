import * as str from '../index.js';

export const logout = (successFunc) => (dispatch) => {
    dispatch({
      type: str.SIGN_OUT
    });
  
    successFunc && successFunc();
}