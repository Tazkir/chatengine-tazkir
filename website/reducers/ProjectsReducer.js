import * as str from '../actions/index.js'
import _ from 'lodash'

const initialState = {
    list: {}
};
  
export default function projectsReducer(state = initialState, action) {
    switch (action.type) {
        case str.FETCH_PROJECTS:
            return {
                ...state,
                list: _.mapKeys(action.payload, 'public_key')
            };

        case str.FETCH_PROJECT:
            return {
                ...state,
                list: {
                    ...state.list,
                    [action.payload.public_key]: action.payload
                }
            };

        case str.SIGN_OUT:
            return initialState;

        default:
            return state;
    }
}