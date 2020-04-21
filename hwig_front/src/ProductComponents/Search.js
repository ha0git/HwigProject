import React, {useState} from 'react'
import './Search.css'
import ImageMapper from 'react-image-mapper'
import { Link } from 'react-router-dom'
import Pagination from "react-js-pagination";

export default function Search(props) {
    const [activePage, setactivePage] = useState(1);
    const [keyword, setKeyword] = useState("")
    let searchList = []
    let searchCount = 0;

    const handleSearch = () => {
        console.log(keyword)
        props.history.push(`/shop/search?keyword=${keyword}&page=${props.page}`)
        props.getAxiosData(`/api/product/productsearch?keyword=${keyword}`)
    }


    const handleEnter = (e) => {
        if(e.key === "Enter"){
            props.history.push(`/shop/search?keyword=${keyword}&page=${props.page}`)
            props.getAxiosData(`/api/product/productsearch?keyword=${keyword}`)
        }
    }
    

    if(props.search_list){
        searchCount = props.search_list.length
    }
    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setactivePage(pageNumber)
        props.history.push(`/shop/search?page=${pageNumber}`)
    }
    console.log(props.search_list)
    if(props.search_list){
    searchList = props.search_list
    }
    const searchGoods = searchList.map((product) => (
        <li key={product.prd_id}>
            <Link to={`shop/product?goodsno=${product.prd_id}&page=1`}><ImageMapper src={product.prd_img}></ImageMapper>
                <div className="product_list_goods_info">
                    <span className="product_list_goods_name">{product.prd_name}&nbsp;{product.prd_kg}</span>
                    <span className="product_list_goods_price">{product.prd_price}원</span>
                    <span className="product_list_goods_desc">{product.prd_comment}</span>
                </div>
            </Link>
        </li>
    ))


    const showSearchList = () => {
        let list = [];
        let begin = (props.page - 1) * props.size;
        let end;
        if (searchList.length < props.page * 9) {
            end = searchList.length
        } else {
            end = props.page * 9;
        }

        for (let i = begin; i < end; i++) {
            list.push(searchGoods[i])
        }
        return list
    }
    
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
                            <input type="text" value={keyword} onChange={(e)=> {setKeyword(e.target.value)}} onKeyPress={handleEnter}></input>
                            <input type="submit" onClick={handleSearch} value="검색하기"></input>
                        </div>
                    </div>
                    <div className="goodsList">
                        <p className="search_result">
                            <strong>총 <span>{searchCount}</span>개</strong>의 상품이 검색되었습니다.
                        </p>
                        <div className="pagediv">
                            <div className="product_list_body">
                                <ul className="product_list_goods">
                                    {showSearchList()}
                                </ul>
                            </div>
                            <div className="frm_pagination">
                                <Pagination
                                activePage={activePage}
                                itemsCountPerPage={props.size}
                                totalItemsCount={searchList.length}
                                pageRangeDisplayed={props.size}
                                onChange={handlePageChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
