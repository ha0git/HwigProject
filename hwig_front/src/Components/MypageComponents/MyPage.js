import React, {useEffect,useState}  from 'react'
import './MyPage.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MyPageInfo from './MyPageInfo'
import MyPageNavi from './MyPageNavi'
import MyPageOrderL from '../Containers/MyPageOrderListPage'
import MyPageOrderD from '../Containers/MyPageOrderDetailPage'
import MyPageR from '../Containers/MyPageReviewPage'
import MyPageConf from '../Containers/MyPageConfirmPage'
import MyPageReviewF from '../Containers/MyPageReviewFormPage'

import axios from 'axios'
import { host } from '../Containers/ServerAddress'




export default function MyPage(props) {
    const userInfoR = props.userInfoR
    const [userInfo,setUserInfo] = useState(null)
    const [isLogged, setIsLogged] = useState(false);
    const [isCheck, setIsCheck] = useState(false)
    const getAxiosData = (uri) => {
        axios.get(host + uri)
            .then(res => {
                console.log(res.data)
                setUserInfo(res.data)
            })
    }
    useEffect(() => {
        if (userInfo === null && userInfoR.mem_id !== undefined) {
            getAxiosData(`api/members/${userInfoR.mem_id}`)
        } else if (userInfoR.mem_id == undefined) {
            console.log("tlqkf")
        }
    })
    if (isCheck !== props.isCheck) {
        setIsCheck(props.isCheck)
    }
    if (isLogged !== props.isLogged) {
        setIsLogged(props.isLogged)
    }
    return (
        <>
                    {userInfo && <MyPageInfo userInfo = {userInfo} /> }
                    <div className="mypage-container">
                    <MyPageNavi/>
                    <Switch>
                            <Route path="/mypage/order" component={MyPageOrderL}/>
                            <Route path="/mypage/review" component={MyPageR}/>
                            <Route path="/mypage/modify" component={MyPageConf}/>
                            <Route path="/mypage/orderdetail" component={MyPageOrderD}/>
                            <Route path="/mypage/reviewform" component={MyPageReviewF}/>
                            <Route component={MyPageR}/>
                    </Switch>
                    </div>
        </>
    )
}
