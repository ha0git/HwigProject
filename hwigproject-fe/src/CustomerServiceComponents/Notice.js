import React, { useState } from 'react'
import './Notice.css'
import { Link } from 'react-router-dom'
import Pagination from "react-js-pagination";

export default function Notice(props) {
    console.log(props)
    const [activePage, setactivePage] = useState(1);

    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setactivePage(pageNumber)
        props.history.push(`/customer/notice?page=${pageNumber}`)
    }

    const notice_list = props.articleList
    console.log(notice_list)
    const getNoticeList = notice_list.map((list,index)=>
        <tr key={index}>
            <td>공지</td>
            <td><Link to={`/customer/notice/board?no=${list.notice_id}`}>{list.notice_subject}</Link></td>
            <td>HWIG</td>
            <td>{list.notice_regdate}</td>
            <td>{list.notice_hit}</td>
        </tr>
    )

    const showNoticeList = () =>{
        let list =[];
        let begin = (props.page-1)*props.size;
        let end;
        if(notice_list.length < props.page*10){
            end = notice_list.length;
        }else{
            end = props.page*10;
        }
        console.log(begin,end)

        for(let i=begin; i<end; i++){
            list.push(getNoticeList[i])
        }
        console.log(list)

        return list
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
                            {showNoticeList()}
                        </tbody>
                    </table>
                    <div className="frm_pagination">
                        <Pagination
                            activePage={activePage}
                            itemsCountPerPage={10}
                            totalItemsCount={notice_list.length}
                            pageRangeDisplayed={10}
                            onChange={handlePageChange}
                        />
                    </div>
                </form>
            </div>
        </>
    )
}
