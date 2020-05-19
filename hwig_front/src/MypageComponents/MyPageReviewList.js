import React, {useState} from 'react'
import {Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './MyPageReviewList.css'
import jQuery from "jquery";
import Pagination from "react-js-pagination";

export default function ReviewList(props) {

    window.$ = window.jQuery = jQuery;
    const goodsInfo = props.data1
    const prd_review = props.data2
    const [activePage, setactivePage] = useState(1);
    const willWriteReviewTable = goodsInfo.map(goodsInfo => {
        return (
            <>
                <tr className="mypage_reviewlist_fst">
                    <td></td>
                    <td className="mypage_reviewlist_thumb">
                    <Link to={`reviewform?prdno=${goodsInfo.prd_id}`}><img src={goodsInfo.prd_thumb} /></Link>
                    </td>
                    <td className="mypage_reviewlist_info">
                        <div className="mypage_reviewlist_name">
                        <Link to={`reviewform?prdno=${goodsInfo.prd_id}`}>{goodsInfo.prd_name}</Link>
                        </div>
                        <div className="mypage_reviewlist_desc">
                            <span className="mypage_reviewlist_date">{goodsInfo.order_paydate}</span><p />
                            <span className="mypage_reviewlist_ea">{goodsInfo.order_count}개 구매</span>
                        </div>
                    </td>
                    <td className="mypage_reviewlist_progress">
                        
                    </td>
                    <td className="mypage_reviewlist_action">
                        <button type="button" className="mypage_reviewlist_btn" onclick="">후기쓰기</button>
                    </td>
                    <td></td>
                </tr>
            </>
        )
    })
    const handleShow = (index) => {
        window.$(document).ready(function () {
            console.log('실행')
            if (window.$(`.temp_toggle${index}`).css('display') === "none") {
                window.$(`.temp_toggle${index}`).css('display', "")
            }
            else {
                window.$(`.temp_toggle${index}`).css('display', "none")
            }
        })
    }
    const prdReviewList = prd_review.map((review, index) => {
        window.$(document).ready(function () {
            console.log('실행')
            window.$(`.temp_toggle${index}`).css('display', 'none')
        })
        return (
            <>
                <tr key={index}>
                    <td>{review.review_id}</td>
                    <td><a onClick={() => handleShow(index)}>{review.review_subject}</a></td>
                    <td>{review.prd_name}</td>
                    <td>{review.review_regdate}</td>
                </tr>
                <tr className={`temp_toggle${index}`}>
                    <td className="prd_toggle_content" colSpan="4">
                        <img src={review.review_img} />
                        <pre text-align="left">{review.review_content}</pre>
                    </td> 
                </tr>
            </>
        )
    }
    )
    const showReviewList = () => {
        let list = [];
        let begin = (activePage - 1) * 5;
        let end;
        if (prd_review.length < activePage * 5) {
            end = prd_review.length;
        } else {
            end = activePage * 5;
        }
        console.log(begin, end)

        for (let i = begin; i < end; i++) {
            list.push(prdReviewList[i])
        }
        console.log(list)

        return list
    }

    const handlePageChange = (pageNumber) => {
        setactivePage(pageNumber)
        console.log(`active page is ${pageNumber}`);
        props.history.push(`/mypage/review&page=${pageNumber}`)
    }
    const willWriteReview = () => {
        if (props.data1.length > 0) {
            return (
                <table className="mypage_reviewlist_tbl_type1">
                        
                <tbody>
                    {willWriteReviewTable}
                </tbody>
                </table>
            )   
        } else {
            return(
                <tr>
                    <td className="mypage-review-table-item" colspan="5"><br/><br/>작성 가능한 후기가 없습니다.<br/><br/><br/></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            )
        }      
    }
    const writtenReview = () => {
        if (props.data2.length > 0) {
            console.log(prd_review.length)
            return(
                // <tr>
                //     <td className="mypage-review-table-item" colspan="5"><br/><br/>작성한 후기 내역이 없습니다.<br/><br/><br/></td>
                //     <td></td>
                //     <td></td>
                //     <td></td>
                //     <td></td>
                // </tr>
                <>
                <div className="prd_frmList qaa">
                                <table>
                <thead className="prd_frmtit">
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>상품명</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody className="prd_frmContent">
                    {showReviewList()}
                </tbody>
                </table>
                <div className="frm_pagination">
                    <Pagination
                        activePage={activePage}
                        itemsCountPerPage={5}
                        totalItemsCount={prd_review.length}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}
                    />
                </div>
                </div>
                </>
            )
        } else {
            console.log("tqtq")
            return(
                <>
                <tr>
                    <td className="mypage-review-table-item" colspan="5"><br/><br/>작성한 후기 내역이 없습니다.<br/><br/><br/></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </>
            )
        }
    }
    const [review,setReview] = useState(
        willWriteReview
    )
    const handleSelect = (eventKey) => {
        if (eventKey == "link-1") {
            setReview(
                willWriteReview
            )
        } else if (eventKey == "link-2") {
            setReview(
                writtenReview
            )
            console.log("tq")
        }
    }
    const log = () => {
        console.log(props.data2)
    }
    return (
        <>
            <div className="mypage-review-container">
                <div className="mypage-review-title">상품후기</div>
                <div className="mypage-review-subtitle">
                    <p>- 후기 작성 시 사진후기 100원, 글후기 50원을 적립해드립니다.</p>
                    <p>- 주간 베스트 후기로 선정 시 5000원을 추가 적립</p>
                    <p>* 후기 작성은 배송 완료일로부터 30일 이내 가능합니다.</p>
                </div>

                    <Nav justify variant="tabs" defaultActiveKey="link-1" onSelect={handleSelect}>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">작성가능 후기(0)</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2" onClick={log}>작성완료 후기(0)</Nav.Link>
                        </Nav.Item> 
                    </Nav>
                <div>
                    
                <table className="mypage-review-table-container">
                    {review}
                </table>
                
            </div>
            </div>


        </>
    )
}
