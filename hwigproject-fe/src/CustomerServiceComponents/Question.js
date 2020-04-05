import React, { useState } from 'react'
import './Question.css'
import { Link } from 'react-router-dom'
import Pagination from "react-js-pagination";

export default function Question(props) {
    const [activePage, setactivePage] = useState(15);

    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setactivePage(pageNumber)
        props.history.push(`/customer/qna?page=${pageNumber}`)
    }

    console.log(props.qnaList[6].reply_content)

    const getQnaList = props.qnaList;
    console.log(getQnaList[0].qna_category)
    const getList = getQnaList.map((list,index)=>
        <tr key={index}>
            <th>{list.qna_id}</th>
            <th>{list.qna_category}</th>
            <th>
                <Link>{list.qna_subject}</Link>
                {list.reply_content && <span>[답변완료]</span>}
            </th>
            <th>{list.mem_id}</th>
            <th>{list.qna_regdate}</th>
        </tr>
    )

    const showQnaist = () =>{
        let list =[];
        let begin = (props.page-1)*props.size;
        let end;
        if(getQnaList.length < props.page*10){
            end = getQnaList.length;
        }else{
            end = props.page*10;
        }
        console.log(begin,end)

        for(let i=begin; i<end; i++){
            list.push(getList[i])
        }
        console.log(list)

        return list
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
                                <th>작성자</th>
                                <th>작성일</th>
                            </tr>
                        </thead>
                    {getQnaList&&
                        <tbody>
                            {showQnaist()}
                        </tbody>
                    }
                    </table>
                    {!getQnaList && <div className="qs_nodata">
                        1:1 문의 내역이 존재하지 않습니다.
                    </div>}
                    <div className="qs_sitemcd">
                        <button>글쓰기</button>
                    </div>
                    <div className="frm_pagination">
                        <Pagination
                            activePage={activePage}
                            itemsCountPerPage={10}
                            totalItemsCount={getQnaList.length}
                            pageRangeDisplayed={10}
                            onChange={handlePageChange}
                        />
                    </div>
                </form>
            </div>
        </>
    )
}
