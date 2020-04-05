import React, { useState } from 'react'
import './Template.css'
import jQuery from "jquery";
import { Link } from 'react-router-dom'
import Pagination from "react-js-pagination";
import faq_img from '../images/faq/faq.png'

export default function Template(props) {
    window.$ = window.jQuery = jQuery;

    const [activePage, setactivePage] = useState(15);
    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setactivePage(pageNumber)
        props.history.push(`/customer/temp?page=${pageNumber}`)
    }
    
    const getFaqList = props.articleList;
   
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
    const getList = getFaqList.map((list, index)=>{
        window.$(document).ready(function(){
            console.log('실행')
            window.$(`.temp_toggle${index}`).css('display', 'none')
        })
    return(
    <>
        <tr key={index}>
            <td>{list.faq_id}</td>
            <td>{list.faq_category}</td>
            <td><a onClick={()=>handleShow(index)}>{list.faq_subject}</a></td>
        </tr>
        <tr className={`temp_toggle${index}`}>
            <td className="temp_toggle_content" colSpan="3"><img src={faq_img}/>{list.faq_content}</td>
        </tr>
    </>)
    })

    const showFaqList = () =>{
        let list =[];
        let begin = (props.page-1)*props.size;
        let end;
        if(getFaqList.length < props.page*10){
            end = getFaqList.length;
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
                                {showFaqList()}
                        </tbody>
                    </table>
                    <div className="frm_pagination">
                        <Pagination
                            activePage={activePage}
                            itemsCountPerPage={10}
                            totalItemsCount={getFaqList.length}
                            pageRangeDisplayed={10}
                            onChange={handlePageChange}
                        />
                    </div>
                </form>
            </div>
        </>
    )
}
