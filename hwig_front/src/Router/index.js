import React from 'react'
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../MainComponents/Header'
import Footer from '../MainComponents/Footer'
import JoinPage from '../Containers/JoinPage'
import LoginPage from '../Containers/LoginPage'
import MainPage from '../Containers/MainPage'
import CS from '../CustomerServiceComponents/index'
import FindIdInfoPage from '../Containers/FindIdInfoPage'
import FindPwInfoPage from '../Containers/FindPwInfoPage'
import MyPage from '../MypageComponents/Index'
import JoinComplete from '../RegisterComponents/JoinComplete'
import Shop from '../ProductComponents/index'
import Event from '../EventComponents/index'
import Order from '../OrderComponents/index';
import NaviPage from '../Containers/NaviPage';
import Navi from '../MainComponents/Navi';


export default function () {
    return (
        <>
            <Header />
            <NaviPage />
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/eventlist" component={Event} />
                <Route path="/join" component={JoinPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/shop" component={Shop} />
                <Route path="/customer" component={CS} />
                <Route path="/find_id" component={FindIdInfoPage} />
                <Route path="/find_pw" component={FindPwInfoPage} />
                <Route path="/mypage" component={MyPage} />
                <Route path="/order" component={Order} />
                <Route path="/joincomplete" component={JoinComplete} />
                <Route component={MainPage} />
            </Switch>

            <div className="top-container">
                <Footer />
            </div>
        </>
    )
}
