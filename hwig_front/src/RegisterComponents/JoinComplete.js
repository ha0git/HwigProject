import React from 'react';
import { Link } from 'react-router-dom'
import './JoinComplete.css'

const JoinComplete = () => {
    return (
        <div className="joincomplete">
            <div className="jc_content">
                <div className="jc_main">
                    <h3 class="jc_tit">회원가입이 완료되었습니다.</h3>
                    <div className="jc_list">
                        <ul>
                            <li>아이디</li>
                            <li>ididididid</li>
                        </ul>
                        <ul>
                            <li>이름</li>
                            <li>휙휙휙</li>
                        </ul>
                        <ul>
                            <li>이메일</li>
                            <li>ididid@HWIG.COM</li>
                        </ul>
                    </div>
                    <form className="jc_mypage">
                        <button><Link to='/mypage'>마이페이지로 이동</Link></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JoinComplete;