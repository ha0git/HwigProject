import React, { useState } from 'react'
import './Question.css'
import { Link } from 'react-router-dom'
import Pagination from "react-js-pagination";

export default function Question(props) {
    const [activePage, setactivePage] = useState(15);

    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setactivePage(pageNumber)
    }

    return (
        <>
            <div className="qs_content">
                <div className="qs_head">
                    <h2 className="qs_tit">
                        1:1 문의
                    </h2>
                </div>
                <form className="qs_frmList">
                    <table>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>카테고리</th>
                                <th>제목</th>
                            </tr>
                        </thead>
                    </table>
                    <div className="qs_nodata">
                        1:1 문의 내역이 존재하지 않습니다.
                        </div>
                    <div className="qs_sitemcd">
                        <button>글쓰기</button>
                    </div>
                    <div className="frm_pagination">
                        <Pagination
                            activePage={activePage}
                            itemsCountPerPage={10}
                            totalItemsCount={450}
                            pageRangeDisplayed={5}
                            onChange={handlePageChange}
                        />
                    </div>
                </form>
            </div>
        </>
    )
}
