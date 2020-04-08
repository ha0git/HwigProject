import React from 'react'
import './MyPageInfo.css'

export default function MyPageInfo() {
    
    return (
        <div className="mypage-userinfo-container">
            <div className="mypage-userinfo-in-container">
                <div className="mypage-userinfo-grade">
                    <div className="mypage-userinfo-grade-container">
                        <p className="mypage-userinfo-grade-font">웰컴</p>
                    </div>
                    <div className="mypage-userinfo-namendetail-container">
                        <span className="mypage-userinfo-namendetail-name">홍길동</span><span>님</span>
                        <div className="mypage-userinfo-namendetail-detail">5% 적립 + 최초 1회 무료배송</div>
                    </div>
                    <div className="mypage-userinfo-buttons-container">
                        <input className="mypage-userinfo-button" type="button" value="전체등급보기"/>
                        <input className="mypage-userinfo-button" type="button" value="다음 달 예상등급 보기"/>
                    </div>
                </div>
                <div className="mypage-userinfo-reserves">
                    <div className="mypage-userinfo-reserves-title">적립금</div>
                    <div className="mypage-userinfo-reserves-price">0원 <span>></span></div>
                    <div className="mypage-userinfo-reserves-drop">소멸예정 0원</div>
                </div>
            </div>
        </div>
    )
}
