import React from 'react'
import {Link} from 'react-router-dom'
import './MyPageNavi.css'

export default function MyPageNavi() {
    return (
        <>
            <div className="mypage-navi-design">
                <ul>
                    <h3 className="mypage-navi-title">고객센터</h3>
                    <Link className="mypage-navi" to="/mypage/order">
                        <li className="mypage-navi-button">주문내역 ></li>
                    </Link>
                    <Link className="mypage-navi" to="/mypage/review">
                        <li className="mypage-navi-button">상품후기 ></li>
                    </Link>
                    <Link className="mypage-navi" to="/mypage/confpw">
                        <li className="mypage-navi-button" id="mypage-navi-button">개인정보수정 ></li>
                    </Link>
                </ul>
            </div>
        </>
    )
}
