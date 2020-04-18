import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../images/logo.svg";
import hd_down from "../images/hd_down.webp";
import sidebanner from "../images/sidebanner.png";
import {connect} from 'react-redux'
import {auth_logout} from '../Actions/index'

function Header(props) {
    const [isLogged, setIsLogged] = useState(false)
    
    useEffect(() => {
        if(isLogged !== props.isLogged){
            setIsLogged(props.isLogged)
        }
    })

    const handleLogoutAction = () => {
        console.log("logout action 실행")
        // props.auth_logout('cds/logout');
        props.auth_logout('api/mlogin/p_logout');
        window.location.reload()
    }

    return (
        <>
            <div className="header">
                <div className="hd_content">
                    <div className="hd_up">
                        <div className="hd_event"><p><Link to="/event">장바구니 자랑하면 적립금 <span>2배</span>로!</Link></p></div>
                        {!isLogged ? <ui className="hd_menu">
                            <li><Link to="/join">회원가입</Link></li>
                            <li><Link to="/login">로그인</Link></li>
                            <li><Link to="/customer">고객센터 <img src={hd_down} alt=""></img></Link>
                                <ul className="hd_downMenu">
                                    <li><Link to="/customer/notice">공지사항</Link></li>
                                    <li><Link to="/customer/temp">자주하는 질문</Link></li>
                                    <li><Link to="/customer/qna">1:1 문의</Link></li>
                                </ul>
                            </li>
                        </ui> :
                        <ui className="hd_menu">
                            <li><Link to="/mypage">ㅌㅌㅌㅌ 님 안녕하세요.</Link></li>
                            <li><p onClick={()=>handleLogoutAction()}>로그아웃</p></li>
                            <li><Link to="/customer">고객센터 <img src={hd_down} alt=""></img></Link>
                                <ul className="hd_downMenu">
                                    <li><Link to="/customer/notice">공지사항</Link></li>
                                    <li><Link to="/customer/temp">자주하는 질문</Link></li>
                                    <li><Link to="/customer/qna">1:1 문의</Link></li>
                                </ul>
                            </li>
                        </ui>
                        }
                    </div>
                    <div className="hd_logo"><Link exact to="/">
                        <img src={logo} alt=""></img>
                    </Link>
                    </div>
                    <div class="floating">
                        <div><a href="#"><img src={sidebanner}></img></a></div>
                        <div><Link to="/shop/cart">장바구니</Link></div>
                        <div><a>등급별 혜택</a></div>
                        <div><a>최근 본 상품</a></div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        userInfo: state.reducer.userInfo,
        isLogged: state.reducer.isLogged
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        auth_logout: (uri) =>  dispatch(auth_logout(uri))
    }
}

Header = connect(mapStateToProps, mapDispatchToProps)(Header);

export default Header;