import React from 'react'
import { FormControl } from 'react-bootstrap'
import list from "../images/list.svg"
import nvBtn from "../images/nvBtn.webp"
import bg from "../images/bg_1x9.webp"
import { Link } from 'react-router-dom'
import jQuery from "jquery";
import './Navi.css'

export default function Navi(props) {
    const categoryLists = props.categoryList.category
    const pcategoryLists = props.categoryList.pcategory
    const scategoryLists = props.categoryList.scategory

    const category = pcategoryLists.map((pcategory) => {
        if (!pcategory.category_p_id) {
            return (
                <ul className="nav_submenu">
                    <li key={pcategory.category_id}><Link to={`/shop?category_id=${pcategory.category_id}&page=1`}>{pcategory.category_name}</Link></li>
                    {categoryLists.map(category => {
                        if (pcategory.category_id === category.category_p_id) {
                            return (
                                <li><Link to={`/shop?category_id=${category.category_p_id}${category.category_id}&page=1`}>{category.category_name}</Link></li>
                            )
                        }
                    })}
                </ul>
            )
        }
    })

    //네비 메뉴 고정 (JQuery)
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
                    <li><Link className="nav-category" to='#'><img src={list}></img>전체 카테고리</Link>
                        <div className="nav_sub">
                            {category}
                        </div>
                    </li>
                    <li><Link to={`/shop?productnew&category_id=${scategoryLists[0].category_id}&page=${props.page}`} className="nav-items">{scategoryLists[0].category_name}</Link></li>
                    <li><Link to={`/shop?productsale&category_id=${scategoryLists[1].category_id}&page=${props.page}`} className="nav-items">{scategoryLists[1].category_name}</Link></li>
                    <li><Link to={`/shop?productbest&category_id=${scategoryLists[2].category_id}&page=${props.page}`} className="nav-items">{scategoryLists[2].category_name}</Link></li>
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
