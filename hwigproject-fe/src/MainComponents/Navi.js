import React from 'react'
import { FormControl } from 'react-bootstrap'
import './Navi.css'
import list from "../images/list.svg"
import nvBtn from "../images/nvBtn.webp"
import { Link } from 'react-router-dom'

export default function Navi() {
    return (
        <>
            <div className="nav-container">
                <ul className="nav-menu">
                    <li><a className="nav-category" href="#"><img src={list}></img>전체 카테고리</a>
                        <div className="nav_sub">
                            <ul className="submenu">
                                <li><Link>채소 · 과일</Link></li>
                                <li><Link>기본 채소</Link></li>
                                <li><Link>국산 과일</Link></li>
                                <li><Link>수입 과일</Link></li>
                            </ul>
                            <ul className="submenu">
                                <li><Link>수산 · 해산 · 건어물</Link></li>
                                <li><Link>생선류</Link></li>
                                <li><Link>해산물 · 조개류</Link></li>
                                <li><Link>건어물 · 다시팩</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li><Link className="nav-items">신상품</Link></li>
                    <li><Link className="nav-items">베스트</Link></li>
                    <li><Link className="nav-items">알뜰쇼핑</Link></li>
                    <li><Link className="nav-items" to='/eventlist'>이벤트</Link></li>
                    <li className="nav-search-container">
                        <FormControl id="nav-search" type="text" className="mr-sm-2" />
                        <input type="image" className="nav-btn" src={nvBtn}></input>
                    </li>
                </ul>
            </div>
        </>
    )
}
