import React from 'react'
import './CSNavi.css'
import { Link } from 'react-router-dom'

export default function CSNavi() {
    return (
        <>
            <div className="cs_navi">
                <div className="cs_content">
                    <div className="cs_menu">
                        <h2 className="cs_tit">고객센터</h2>
                        <div className="cs_inner">
                            <ul className="list_menu">
                                <li><Link to="./customer/notice">고객센터</Link></li>
                                <li><Link to="./customer/temp">자주하는 질문</Link></li>
                                <li><Link to="./customer/qna">1:1 문의</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
