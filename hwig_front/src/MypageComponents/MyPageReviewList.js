import React, {useState} from 'react'
import {Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './MyPageReviewList.css'

export default function ReviewList(props) {
    const goodsInfo = props.data1
    const willWriteReviewTable = goodsInfo.map(goodsInfo => {
        return (
            <>
                <tr className="mypage_orderdetail_fst">
                    <td></td>
                    <td className="mypage_orderdetail_thumb">
                    <Link to={`reviewform?prdno=${goodsInfo.prd_id}`}><img src={goodsInfo.prd_thumb} /></Link>
                    </td>
                    <td className="mypage_orderdetail_info">
                        <div className="mypage_orderdetail_name">
                        <Link to={`reviewform?prdno=${goodsInfo.prd_id}`}>{goodsInfo.prd_name}</Link>
                        </div>
                        <div className="mypage_orderdetail_desc">
                            <span className="mypage_orderdetail_price">{goodsInfo.order_count}개 구매</span><p />
                            <span className="mypage_orderdetail_ea">{goodsInfo.order_paydate}</span>
                        </div>
                    </td>
                    <td className="mypage_orderdetail_progress">
                        
                    </td>
                    <td className="mypage_orderdetail_action">
                        <button type="button" className="mypage_orderdetail_btn" onclick="">리뷰쓰기</button>
                    </td>
                    <td></td>
                </tr>
            </>
        )
    })
    const willWriteReview = () => {
        //return(
            //<tr>
                //<td className="mypage-review-table-item" colspan="5"><br/><br/>작성 가능한 후기 내역이 없습니다.<br/><br/><br/></td>
                //<td></td>
                //<td></td>
                //<td></td>
                //<td></td>
            //</tr>
        //)
        return (
                    <table className="mypage_orderdetail_tbl_type1">
                            
                    <tbody>
                        {willWriteReviewTable}
                    </tbody>
                    </table>
        )
    }
    const writtenReview = () => {
        return(
            <tr>
                <td className="mypage-review-table-item" colspan="5"><br/><br/>작성한 후기 내역이 없습니다.<br/><br/><br/></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        )
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
