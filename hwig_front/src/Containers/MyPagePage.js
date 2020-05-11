import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import MyPage from '../MypageComponents/MyPage.js'
import {Redirect} from 'react-router-dom'



export default function MyPagePage(props) {
    
    const isLogged = props.isLogged
    
    return (
        <>
            {/*isLogged ? <MyPage /> : <Redirect to="/" /> */}   
            <MyPage />
        </>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        isLogged: state.reducer.isLogged
    }
}

MyPagePage = connect(mapStateToProps)(MyPagePage)