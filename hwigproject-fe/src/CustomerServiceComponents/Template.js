import React, { useState } from 'react'
import './Template.css'
import { Link } from 'react-router-dom'
import Pagination from "react-js-pagination";

export default function Template(props) {
    const [activePage, setactivePage] = useState(15);

    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setactivePage(pageNumber)
    }

    return (
        <>
            <div className="tp_content">
                <div className="tp_head">
                    <h2 className="tp_tit">
                        자주하는 질문
                            <span>고객님들께서 가장 자주하시는 질문을 모두 모았습니다.</span>
                    </h2>
                </div>
                <form className="tp_frmList">
                    <div className="tp_sitemcd">
                        <select>
                            <option>선택</option>
                            <option>회원문의</option>
                            <option>주문/결제</option>
                            <option>취소/교환/반품</option>
                            <option>적립금</option>
                        </select>
                        <input type="text"></input>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>카테고리</th>
                                <th>제목</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>회원문의</td>
                                <td><Link>관리자야 아이디 비밀번호 찾아내라</Link></td>
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
