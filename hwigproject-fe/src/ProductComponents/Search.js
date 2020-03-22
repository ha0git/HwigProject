import React from 'react'
import './Search.css'

export default function Search() {
    return (
        <>
            <div className="search_container">
                <div className="search_content">
                    <div className="search_tit">
                        <h2>상품검색</h2>
                        <p>신선한 휙의 상품을 검색해보세요.</p>
                    </div>
                    <div className="search_box">
                        <div className="tit">
                            <p>검색조건</p>
                        </div>
                        <div className="desc">
                            <input type="text"></input>
                            <input type="submit" value="검색하기"></input>
                        </div>
                    </div>
                    <div className="goodsList">
                        <p className="search_result">
                            <strong>총 <span>0</span>개</strong>의 상품이 검색되었습니다.
                        </p>
                        <div className="pagediv">
                            <div className="search_pagination">
                                <a href="#"></a>
                                <a href="#"></a>
                                <a href="#"></a>
                                <a href="#"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
