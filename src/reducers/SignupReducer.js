import { EMAIL_PASS_REFFERALCODE, NAME_TITLE_LINKEDIN, ABOUTME } from '../actions/actionType';

const initState = {
    email: '',
    password: '',
    referralcode: '',
    name: '',
    title: '',
    linkedinURL: '',
    aboutme: '',
    photoURL: ''
};

export default (state = initState, { type, payload }) => {
    switch (type) {
        case EMAIL_PASS_REFFERALCODE:
            return {
                ...state,
                email: payload.email,
                password: payload.password,
                referralcode: payload.code
            }
        case NAME_TITLE_LINKEDIN:
            return {
                ...state,
                name: payload.name,
                title: payload.title,
                linkedinURL: payload.linkedin,
                photoURL: payload.photo
            }
        case ABOUTME:
            return {
                ...state,
                aboutme: payload
            }
        default:
            return state;
    }
};