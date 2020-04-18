import React, { useState } from 'react'
import './Question.css'
import {Redirect} from 'react-router-dom'
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
    // console.log(props.qnaList[0].qna.qna_category)
    const getQnaList = props.qnaList;
    // console.log(getQnaList)
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
            <td v-html="description" className="temp_toggle_content" colSpan="5">
                {
                list.qna_content.split('\n').map( line => {
                return (<span>{line}<br/></span>)
            })
            }
            </td>
        </tr>
        {list.reply_content && 
        <tr className={`temp_toggle${index}`}>
            <td className="temp_toggle_content2" colSpan="5">
                <div></div>
                <div>
                    <img src={response}/>
                            <p>{list.reply_content.split(/(<br>|<br\/>|<br \/>)/g).map( line => {
                return (<span>{line.replace(/(<br>|<br\/>|<br \/>)/g, '')}<br/></span>)
            })}</p>
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
