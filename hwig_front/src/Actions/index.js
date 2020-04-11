import axios from 'axios'
import {host} from '../Containers/ServerAddress'
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAIL = "LOGIN_FAIL"
export const GET_SESSION_USERINFO = "GET_SESSION_USERINFO"
export const NO_SESSION = "NO_SESSION"
export const LOGOUT = "LOGOUT"

export const login_success = (data) => {
    return {
        type: LOGIN_SUCCESS,
        data
    }
}

export const login_fail = () => {
    return{
        type: LOGIN_FAIL
    }
}

export const auth_login = (uri, data) => {
    return (dispatch) => {
        return axios.post(host + uri, data)
        .then(res => {
            if(res.data.isLogged){
                console.log("로그인 성공",res.data)
                dispatch(login_success(res.data))
            }else{
            console.log("로그인 실패", res.data)
                dispatch(login_fail())
            }
        })
        .catch(error => {
            throw(error)
        })
    }
}

export const logout = (data) => {
    return{
        type: LOGOUT,
        data
    }
}

export const auth_logout = (uri, data) => {
    return (dispatch) => {
        return axios.post(host + uri, data)
        .then(res => {
            dispatch(logout(res.data))
        })
    }
}


export const get_session_userInfo = (data) => {
    return{
        type: GET_SESSION_USERINFO,
        data
    }
}

export const no_session = () => {
    return{
        type: NO_SESSION
    }
}

export const check_session = (uri) => {
    return (dispatch) => {
        return axios.get(host + uri)
        .then(res => {
            if(res.headers.session){
                dispatch(get_session_userInfo(res.headers))
            }else{
                dispatch(no_session())
            }
        })
    }
}


