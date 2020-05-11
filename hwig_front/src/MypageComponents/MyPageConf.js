import React,{useState,useEffect} from 'react'
import './MyPageConfirmPw.css'
import {Container, Row, Col, Form, Button, Modal} from 'react-bootstrap'
import axios from 'axios'
import { host } from '../Containers/ServerAddress'
import MyPageConfirmPw from './MyPageConfirmPw'


export default function MyPageConf() {
    const [userInfo,setUserInfo] = useState(null)
    const getAxiosData = (uri) => {
        axios.get(host + uri)
            .then(res => {
                console.log(res.data)
                setUserInfo(res.data)
            })
    }
    useEffect(() => {if (!userInfo) {
        getAxiosData(`api/members/kikiki`)
        }})
    return (
        <>
            {userInfo && <MyPageConfirmPw userInfo = {userInfo}/>}
        </>
    )
}
