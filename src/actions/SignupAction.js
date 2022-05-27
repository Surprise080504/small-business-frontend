import { EMAIL_PASS_REFFERALCODE, NAME_TITLE_LINKEDIN, ABOUTME, LOGINSUCCESS } from "../actions/actionType";
import { ServerURL } from '../config/port';
import { notification } from "antd";
import axios from "axios";
const jwt = require("jsonwebtoken");

// sign up
export const Setemail_pass_code = (email, password, code) => dispatch => {
    return dispatch({
        type: EMAIL_PASS_REFFERALCODE,
        payload: { email, password, code }
    });
};
export const Setname_title_linkedin_photo = (name, title, linkedin, photo) => dispatch => {
    return dispatch({
        type: NAME_TITLE_LINKEDIN,
        payload: { name, title, linkedin, photo }
    });
}
export const Setaboutme = (about) => dispatch => {
    return dispatch({
        type: ABOUTME,
        payload: about
    });
}
export const Send_signdata = (data) => async dispatch => {
    const response = await fetch(data.photoURL);
    const blob = await response.blob();
    const file = new File([blob], 'image.jpg', { type: blob.type });

    let formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("refercode", data.referralcode);
    formData.append("name", data.name);
    formData.append("title", data.title);
    formData.append("linkedinURL", data.linkedinURL);
    formData.append("aboutme", data.aboutme);

    if (file) {
        formData.append("avatar", file);
    }

    return axios.post(`${ServerURL}/signup`, formData, {
        headers: {
            // "x-auth-token": localStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
        },
        // timeout: 20000,
    }).then(e => {
        if (e) {
            console.log(e);
            dispatch({
                type: LOGINSUCCESS,
                payload: e.data
            })
            notification.success({ message: "Success", description: "Register Success" })
            window.location.href = '/partner';
        }
    }).catch(err => notification.warning({ message: "Warning!", description: err.response.data }))
}
export const Send_logindata = (email, pass) => dispatch => {
    return axios.post(`${ServerURL}/login`, { email, pass }).then(e => {
        if (e) {
            if (e.data.role == "admin")
                window.location.href = '/chatroom';
            else if (e.data.role == "user")
                window.location.href = '/partner';
            notification.success({ message: "Success", description: "Login Success" })
        }
    }).catch(err => notification.warning({ message: "Warning", description: err.response.data }))
}