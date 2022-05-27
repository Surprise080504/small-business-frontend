import { LOGINSUCCESS } from '../actions/actionType';

const initState = {
    isAuthenticate: false,
    userdata: {}
};

export default (state = initState, { type, payload }) => {
    switch (type) {
        case LOGINSUCCESS:
            return {
                ...state,
                isAuthenticate: true,
                userdata: payload
            }
        default:
            return state;
    }
};