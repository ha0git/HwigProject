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

export const login_fail = (data) => {
    return{
        type: LOGIN_FAIL,
        data
    }
}

export const auth_login = (uri, data) => {
    return (dispatch) => {
        return axios.post(host + uri, data,{withCredentials:true})
        .then(res => {
            console.log("로그인 응답 데이터=> "+ res.data)
            if(res.data.isLogged){
                console.log("로그인 성공=> ",res.data)
                dispatch(login_success(res.data))
            }else{
            console.log("로그인 실패=> ", res.data)
                dispatch(login_fail(res.data.isLogged))
                alert("아이디 또는 비밀번호가 틀렸습니다.")
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
    console.log("로그아웃 실행")
    return (dispatch) => {
        return axios.get(host + uri, {withCredentials:true})
        .then(res => {
            console.log(res.data)
            dispatch(logout(res.data.isLogged))
        })
    }
}


export const get_session_userInfo = (data) => {
    return{
        type: GET_SESSION_USERINFO,
        data
    }
}

export const no_session = (data) => {
    return{
        type: NO_SESSION,
        data
    }
}

export const check_session = (uri) => {
    return (dispatch) => {
        return axios.get(host + uri, {withCredentials:true})
        .then(res => {
            console.log("세션 체크 응답 데이터=> " + res.data)
            if(res.data.isLogged){
                console.log(res.data, "세션 존재")
                dispatch(get_session_userInfo(res.data))
            }else{
                console.log(res.data, "세션 없음")
                dispatch(no_session(res.data.isLogged))
            }
        })
    }
}


