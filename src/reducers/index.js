import { combineReducers } from 'redux';

import AuthReducer from './authReducer';
import SignupReducer from './SignupReducer';

export default combineReducers({
    auth: AuthReducer,
    signupdata: SignupReducer

});