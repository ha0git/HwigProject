import React from 'react'
import { FormControl } from 'react-bootstrap'
import './Navi.css'
import list from "../images/list.svg"
import nvBtn from "../images/nvBtn.webp"

export default function Navi() {
    return (
        <>
            <div className="nav-container">
                <ul className="nav-menu">
                    <li><a className="nav-category" href="#"><img src={list}></img>전체 카테고리</a>
                        <div>
                            <ul> 채소·과일
                                <li>기본채소</li>
                                <li>국산 과일</li>
                                <li>수입 과일</li>
                            </ul>
                            <ul> 수산·해산·건어물
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </li>
                    <li><a className="nav-items" href="#">신상품</a></li>
                    <li><a className="nav-items" href="#">베스트</a></li>
                    <li><a className="nav-items" href="#">알뜰쇼핑</a></li>
                    <li><a className="nav-items" href="/eventlist">이벤트</a></li>
                    <li className="nav-search-container">
                        <FormControl id="nav-search" type="text" className="mr-sm-2" />
                        <input type="image" className="nav-btn" src={nvBtn}></input>
                    </li>
                </ul>
            </div>
        </>
    )
}
