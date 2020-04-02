import React from 'react'
import './index.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MyPageInfo from './MyPageInfo'
import MyPageNavi from './MyPageNavi'
import MyPageOrderList from './MyPageOrderList'
import MyPageReviewList from './MyPageReviewList'
import MyPageModifyUserInfo from './MyPageModifyUserInfo'
import MyPageConfirmPw from './MyPageConfirmPw'



export default function() {
    return (
        <>
        
            <Router>
                    <MyPageInfo/>
                    <div className="mypage-container">
                    <MyPageNavi/>
                    <Switch>
                            <Route path="/mypage/order" component={MyPageOrderList}/>
                            <Route path="/mypage/review" component={MyPageReviewList}/>
                            <Route path="/mypage/confpw" component={MyPageConfirmPw}/>
                            <Route path="/mypage/modify" component={MyPageModifyUserInfo}/>
                            <Route component={MyPageOrderList}/>
                    </Switch>
                    </div>
            </Router>
        </>
    )
}
