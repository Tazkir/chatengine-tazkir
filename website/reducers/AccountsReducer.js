import * as str from '../actions/index.js';

const initialState = {
    isEditAccountVisisble: false
};
  
// TODO: Name this AccountsReducer or something
export default function accountsReducer(state = initialState, action) {
    switch (action.type) {
        case str.SIGN_IN_OK:
            return {
                ...state,
                token: action.payload.token,
                email: action.payload.user.email,
            };

        
        case str.SET_LOGGED_IN_DATE_TIME:
            return {
                ...state,
                loggedInDateTime: Date.now(),
            };

        case str.PATCH_ACCOUNT:
            return {
                ...state,
                email: action.payload.email,
            };

        case str.OPEN_EDIT_ACCOUNT:
            return { ...state, isEditAccountVisisble: true };

        case str.CLOSE_EDIT_ACCOUNT:
            return { ...state, isEditAccountVisisble: false };

        case str.SIGN_OUT:
            return initialState;
            
        default:
            return state;
    }
}