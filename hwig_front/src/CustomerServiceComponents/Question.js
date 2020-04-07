import React, { useState } from 'react'
import './Question.css'
import response from '../images/qna/response.png'
import jQuery from "jquery";
import { Link } from 'react-router-dom'
import Pagination from "react-js-pagination";

export default function Question(props) {
    window.$ = window.jQuery = jQuery;
    const [activePage, setactivePage] = useState(15);

    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setactivePage(pageNumber)
        props.history.push(`/customer/qna?page=${pageNumber}`)
    }
    const handleShow = (index)=>{
        window.$(document).ready(function(){
            console.log('실행')
            if(window.$(`.temp_toggle${index}`).css('display') == "none"){
                window.$(`.temp_toggle${index}`).css('display', "")
            }else{
                window.$(`.temp_toggle${index}`).css('display', "none")
            }
            
        })
    }
    const getQnaList = props.qnaList;
    const getList = getQnaList.map((list,index)=>{
        window.$(document).ready(function(){
            console.log('실행')
            window.$(`.temp_toggle${index}`).css('display', 'none')
        })
    return(
    <>
        <tr key={index}>
            <th>{index+1}</th>
            <th>{list.qna_category}</th>
            <th>
            <a onClick={()=>handleShow(index)}>{list.qna_subject}</a>
                {list.reply_content && <span>[답변완료]</span>}
            </th>
            <th>{list.mem_id}</th>
            <th>{list.qna_regdate}</th>
        </tr>
        <tr className={`temp_toggle${index}`}>
            <td className="temp_toggle_content" colSpan="5">
                {list.qna_content}
            </td>
        </tr>
        {list.reply_content && 
        <tr className={`temp_toggle${index}`}>
            <td className="temp_toggle_content2" colSpan="5">
                <div></div>
                <div>
                    <img src={response}/>
                            <p>안녕하세요 휙 고객님,</p> 
                            <p>누구보다 빠른배송! 휙입니다.</p>
                            <br/>
                            <p>{list.reply_content}</p>
                </div>
            </td>
        </tr>}
    </>)
    })

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
                        <Link to="/customer/qna/board"><button>글쓰기</button></Link>
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
