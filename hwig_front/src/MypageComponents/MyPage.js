import React, {useEffect,useState}  from 'react'
import './MyPage.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MyPageInfo from './MyPageInfo'
import MyPageNavi from './MyPageNavi'
import MyPageOrderList from './MyPageOrderList'
import MyPageReviewList from './MyPageReviewList'
import MyPageModify from './MyPageModify'
import MyPageConf from './MyPageConf'

import axios from 'axios'
import { host } from '../Containers/ServerAddress'




export default function MyPage() {
    const [userInfo,setUserInfo] = useState(null)
    const getAxiosData = (uri) => {
        axios.get(host + uri)
            .then(res => {
                console.log(res.data)
                setUserInfo(res.data)
            })
    }
    useEffect(() => {if (!userInfo) {
        //getAxiosData(`api/`)
        setUserInfo(
            {
                mem_ID : "testid",
                mem_PW : 12345,
                mem_name: "테스트",
                mem_email: "test@test.test",
                mem_phone: "01039350584",
                mem_reverse: 1110
            }
        )}})
    return (
        <>
                    {userInfo && <MyPageInfo userInfo = {userInfo} /> }
                    <div className="mypage-container">
                    <MyPageNavi/>
                    <Switch>
                            <Route path="/mypage/order" component={MyPageOrderList}/>
                            <Route path="/mypage/review" component={MyPageReviewList}/>
                            <Route path="/mypage/confpw" component={MyPageConf}/>
                            <Route path="/mypage/modify" component={MyPageModify}/>
                            <Route component={MyPageOrderList}/>
                    </Switch>
                    </div>
        </>
    )
}
