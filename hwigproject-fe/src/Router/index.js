import React from 'react'
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../MainComponents/Header'
import Navi from '../MainComponents/Navi'
import Footer from '../MainComponents/Footer'
import SearchPage from '../Containers/SearchPage'
import CartPage from '../Containers/CartPage'
import EventListPage from '../Containers/EventListPage'
import EventPage from '../Containers/EventPage'
import JoinPage from '../Containers/JoinPage'
import LoginPage from '../Containers/LoginPage'
import MainPage from '../Containers/MainPage'
import ProductListPage from '../Containers/ProductListPage'
import ProductPage from '../Containers/ProductPage'
import CS from '../CustomerServiceComponents/index'
import FindIdInfoPage from '../Containers/FindIdInfoPage'
import FindPwInfoPage from '../Containers/FindPwInfoPage'
import MyPage from '../MypageComponents/Index'


export default function () {
    return (
        <>
            <Router className="router">
                <Header />
                <Navi />
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/search" component={SearchPage} />
                    <Route path="/cart" component={CartPage} />
                    <Route path="/eventlist" component={EventListPage} />
                    <Route path="/event" component={EventPage} />
                    <Route path="/join" component={JoinPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/shop" component={ProductListPage} />
                    <Route path="/product" component={ProductPage} />
                    <Route path="/customer" component={CS} />
                    <Route path="/find_id" component={FindIdInfoPage} />
                    <Route path="/find_pw" component={FindPwInfoPage} />
                    <Route path="/mypage" component={MyPage}/>
                    <Route component={MainPage} />
                </Switch>
                
                <div className="top-container">
                <Footer />
                </div>
            </Router>
        </>
    )
}
