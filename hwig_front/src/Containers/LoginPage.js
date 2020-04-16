import React, {useState, useEffect} from 'react'
import Login from '../RegisterComponents/Login'
import {Redirect} from 'react-router-dom'
import {auth_login} from '../Actions/index'
import {connect} from 'react-redux'

function LoginPage(props) {
    const [isLogged, setIsLogged] = useState(false)
    
    console.log(props)
    useEffect(() => {
        if(isLogged !== props.isLogged){
            console.log(isLogged, props.isLogged)
            setIsLogged(props.isLogged)
        }
    })

    const handleData = (data) => {
        console.log(data)
        // props.auth_login('cds/login', data)
        props.auth_login('api/mlogin/p_login', data)
    }
    return (
        <>
            {isLogged ? <Redirect to="/"/> : <Login onSubmit={handleData}/>}
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLogged: state.reducer.isLogged
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        auth_login: (uri, data) =>  dispatch(auth_login(uri, data))
    }
}

LoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage)

export default LoginPage