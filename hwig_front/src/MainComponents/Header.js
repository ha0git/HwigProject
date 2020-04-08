import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../images/logo.svg";
import hd_down from "../images/hd_down.webp";
import peng from "../images/peng.jpg";

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="hd_content">
                    <div className="hd_up">
                        <div className="hd_event"><p><Link to="/event">장바구니 자랑하면 적립금 <span>2배</span>로!</Link></p></div>
                        <ui className="hd_menu">
                            <li><Link to="/join">회원가입</Link></li>
                            <li><Link to="/login">로그인</Link></li>
                            <li><Link to="/customer">고객센터 <img src={hd_down}></img></Link>
                                <ul className="hd_downMenu">
                                    <li><Link to="/customer/notice">공지사항</Link></li>
                                    <li><Link to="/customer/qna">자주하는 질문</Link></li>
                                    <li><Link to="/customer/temp">1:1 문의</Link></li>
                                </ul>
                            </li>
                        </ui>
                    </div>
                    <div className="hd_logo"><Link exact to="/">
                        <img src={logo}></img>
                    </Link>
                    </div>
                    <div class="floating">
                        <div><a href="#"><img src={peng}></img></a></div>
                        <div><Link to="/cart">장바구니</Link></div>
                        <div><a>등급별 혜택</a></div>
                        <div><a>최근 본 상품</a></div>
                    </div>
                </div>
            </div >
        </>
    )
}
