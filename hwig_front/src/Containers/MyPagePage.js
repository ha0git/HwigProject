import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import MyPage from '../MypageComponents/MyPage.js'
import {Redirect} from 'react-router-dom'



export default function MyPagePage(props) {
    
    const isLogged = props.isLogged
    
    return (
        <>
            {isLogged ? <MyPage userInfoR={props.userInfo}/> : <Redirect to="/" />}
        </>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        isLogged: state.reducer.isLogged,
        userInfo: state.reducer.userInfo
    }
}

MyPagePage = connect(mapStateToProps)(MyPagePage)