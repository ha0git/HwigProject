import {LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT ,GET_SESSION_USERINFO, NO_SESSION} from '../Actions/index'
import {combineReducers} from 'redux'

const InitialState = {
    userInfo: "없음",
    isLogged:false,
    session:"없음.",
    isCheck:false
}

const reducer = (state = InitialState, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            console.log("LOGIN_SUCCESS 실행")
            return{
                ...state,
                userInfo: action.data.mem,
                isLogged: action.data.isLogged,
            }
        case LOGIN_FAIL:
            console.log("LOGIN_FAIL 실행")
            return{
                ...state,
                userInfo: "",
                isLogged:false
            }   
        case GET_SESSION_USERINFO:
            console.log("GET_SESSION_USERINFO 실행", action.data)
            return{
                ...state,
                userInfo: action.data.mem,
                isLogged: action.data.isLogged,
                isCheck:true
            }
        case NO_SESSION:
            console.log("NO_SESSION 실행")
            return{
                ...state,
                userInfo:"",
                isLogged: action.data.isLogged,
                isCheck:true
            }
        case LOGOUT:
            console.log("LOGOUT 실행")
            return{
                ...state,
                userInfo:"",
                isLogged: action.data.isLogged
            }
        default:
            return state;
    }
} 

const reducers = combineReducers({
    reducer
})

export default reducers;


