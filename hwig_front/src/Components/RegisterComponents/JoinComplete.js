import React from 'react';
import { Link } from 'react-router-dom'
import './JoinComplete.css'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

export default function JoinComplete (props) {
    const isLogged = props.isLogged
    const userInfo = props.userInfo
    if (isLogged) {
        return (
            <div className="joincomplete">
                <div className="jc_content">
                    <div className="jc_main">
                        <h3 class="jc_tit">회원가입이 완료되었습니다.</h3>
                        <div className="jc_list">
                            <ul>
                                <li>아이디</li>
                                <li>{userInfo.mem_id}</li>
                            </ul>
                            <ul>
                                <li>이름</li>
                                <li>{userInfo.mem_name}</li>
                            </ul>
                            <ul>
                                <li>이메일</li>
                                <li>{userInfo.mem_email}</li>
                            </ul>
                        </div>
                        <form className="jc_mypage">
                            <button><Link to='/mypage'>마이페이지로 이동</Link></button>
                        </form>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <Redirect to="/" />
        )
    }
};
const mapStateToProps = (state, ownProps) => {
    return {
        isLogged: state.reducer.isLogged,
        userInfo: state.reducer.userInfo,
    }
}

JoinComplete = connect(mapStateToProps)(JoinComplete)
