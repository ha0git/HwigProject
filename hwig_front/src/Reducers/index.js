import {LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT ,GET_SESSION_USERINFO, NO_SESSION} from '../Actions/index'
import {combineReducers} from 'redux'

const InitialState = {
    data:"없음.",
    userInfo: "없음",
    isLogged:false,
    session:"없음."
}

const reducer = (state = InitialState, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            return{
                ...state,
                data: action.data,
                isLogged:true,
                session:"있음"
            }
        case LOGIN_FAIL:
            return{
                ...state,
                data: "fail",
                isLogged:false
            }
        case GET_SESSION_USERINFO:
            return{
                ...state,
                userInfo: action.data,
                // isLogged: true
            }
        case NO_SESSION:
            return{
                ...state,
                userInfo:"none",
                isLogged: false
            }
        case LOGOUT:
            return{
                ...state,
                userInfo:"none",
                isLogged:false
            }
        default:
            return state;
    }
} 

const reducers = combineReducers({
    reducer
})

export default reducers;


