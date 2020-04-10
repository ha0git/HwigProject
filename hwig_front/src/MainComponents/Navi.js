import React from 'react'
import { FormControl } from 'react-bootstrap'
import list from "../images/list.svg"
import nvBtn from "../images/nvBtn.webp"
import bg from "../images/bg_1x9.webp"
import { Link } from 'react-router-dom'
import jQuery from "jquery";
import './Navi.css'

export default function Navi() {
    document.$ = document.jQuery = jQuery;
    window.$ = window.jQuery = jQuery;

    window.$(window).ready(function () {
        var jbOffset = document.$('.jbMenu').offset();
        document.$(document).scroll(function () {
            if (document.$(document).scrollTop() > jbOffset.top) {
                document.$('.jbMenu').addClass('jbFixed');
            }
            else {
                document.$('.jbMenu').removeClass('jbFixed');
            }
        })
    })

    return (
        <>
            <div className="nav-container jbMenu">
                <ul className="nav-menu">
                    <li><a className="nav-category" href="#"><img src={list}></img>전체 카테고리</a>
                        <div className="nav_sub">
                            <ul className="nav_submenu">
                                <li><Link>채소 · 과일</Link></li>
                                <li><Link>기본 채소</Link></li>
                                <li><Link>국산 과일</Link></li>
                                <li><Link>수입 과일</Link></li>
                            </ul>
                            <ul className="nav_submenu">
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
                <img src={bg} className="bg" />
            </div>
        </>
    )
}