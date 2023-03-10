import {USER_ACTION_TYPES} from './user.types'

const INITIAL_STATE = {
    currentUser: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER: 
            return{
                ...state,
                currentUser: payload
            };
        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return{...state, currentUser: null};
        case USER_ACTION_TYPES.SIGN_OUT_FAILED:
        case USER_ACTION_TYPES.SIGN_IN_FAILED:
        case USER_ACTION_TYPES.SIGN_UP_FAILED:
            return {...state, error: payload};
        default: 
            //When we return current state then redux will know that the state has not been changed and hence does not update
            return state;
    }
}
