import React from 'react'
import {Link} from 'react-router-dom'

export default function MyPageNavi() {
    return (
        <>
            <div className="cs_navi">
                <div className="cs_content">
                    <div className="cs_menu">
                        <h2 className="cs_tit">마이페이지</h2>
                        <div className="cs_inner">
                            <ul className="list_menu">
                                <li><Link to="/mypage/order">주문내역</Link></li>
                                <li><Link to="/mypage/review">상품후기</Link></li>
                                <li><Link to="/mypage/modify">개인정보수정</Link></li>
                                <li><Link to="/customer/qna">1:1문의</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
