import React, { useState } from 'react'
import './Notice.css'
import { Link } from 'react-router-dom'
import Pagination from "react-js-pagination";

export default function Notice(props) {
    const [activePage, setactivePage] = useState(15);

    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setactivePage(pageNumber)
    }

    return (
        <>
            <div className="nt_content">
                <div className="nt_head">
                    <h2 className="nt_tit">
                        공지사항
                            <span>휙의 새로운 소식들과 유용한 정보들을 한곳에서 확인하세요.</span>
                    </h2>
                </div>
                <form className="nt_frmList">
                    <div className="nt_sitemcd">
                        <select>
                            <option>제목</option>
                            <option>내용</option>
                            <option>제목 + 내용</option>
                        </select>
                        <input type="text"></input>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>작성일</th>
                                <th>조회</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>공지</td>
                                <td><Link>[가격인하공지][카나슈] 티, 커피 슈가 7종(2020.3.13~)</Link></td>
                                <td>HWIG</td>
                                <td>2020-03-27</td>
                                <td>333</td>
                            </tr>
                            <tr>
                                <td>공지</td>
                                <td><Link>[가격인하공지][카나슈] 티, 커피 슈가 7종(2020.3.13~)</Link></td>
                                <td>HWIG</td>
                                <td>2020-03-27</td>
                                <td>333</td>
                            </tr>
                            <tr>
                                <td>공지</td>
                                <td><Link>[가격인하공지][카나슈] 티, 커피 슈가 7종(2020.3.13~)</Link></td>
                                <td>HWIG</td>
                                <td>2020-03-27</td>
                                <td>333</td>
                            </tr>
                            <tr>
                                <td>공지</td>
                                <td><Link>[가격인하공지][카나슈] 티, 커피 슈가 7종(2020.3.13~)</Link></td>
                                <td>HWIG</td>
                                <td>2020-03-27</td>
                                <td>333</td>
                            </tr>
                            <tr>
                                <td>공지</td>
                                <td><Link>[가격인하공지][카나슈] 티, 커피 슈가 7종(2020.3.13~)</Link></td>
                                <td>HWIG</td>
                                <td>2020-03-27</td>
                                <td>333</td>
                            </tr>
                            <tr>
                                <td>공지</td>
                                <td><Link>[가격인하공지][카나슈] 티, 커피 슈가 7종(2020.3.13~)</Link></td>
                                <td>HWIG</td>
                                <td>2020-03-27</td>
                                <td>333</td>
                            </tr>
                        </tbody>
                    </table>
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
