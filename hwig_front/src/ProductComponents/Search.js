import React, {useState} from 'react'
import './Search.css'
import Pagination from '../CustomerServiceComponents/Pagination'

export default function Search(props) {
    const [activePage, setactivePage] = useState(1);
    let searchCount = 0;
    if(!props.search_list){
        searchCount = 0
    }else {
        searchCount = props.search_list.length
    }
    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setactivePage(pageNumber)
        props.history.push(`/customer/notice?page=${pageNumber}`)
    }
    const handleSubmit = () => {
        
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
                            <input type="text"></input>
                            <input type="submit" onClieck={handleSubmit} value="검색하기"></input>
                        </div>
                    </div>
                    <div className="goodsList">
                        <p className="search_result">
                            <strong>총 <span>{searchCount}</span>개</strong>의 상품이 검색되었습니다.
                        </p>
                        <div className="pagediv">
                            <div className="frm_pagination">
                                <Pagination
                                    activePage={activePage}
                                    itemsCountPerPage={props.size}
                                    totalItemsCount={searchCount}
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
