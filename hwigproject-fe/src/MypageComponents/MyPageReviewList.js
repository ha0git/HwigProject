import React from 'react'
import {Nav} from 'react-bootstrap'
import './MyPageReviewList.css'

export default function ReviewList() {
    return (
        <>
            <div className="mypage-review-container">
                <div className="mypage-review-title">상품후기</div>
                <div className="mypage-review-subtitle">
                    <p>- 후기 작성 시 사진후기 100원, 글후기 50원을 적립해드립니다.</p>
                    <p>- 주간 베스트 후기로 선정 시 5000원을 추가 적립</p>
                    <p>* 후기 작성은 배송 완료일로부터 30일 이내 가능합니다.</p>
                </div>

                <Nav justify variant="tabs" defaultActiveKey="link-1">
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">작성가능 후기(0)</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">작성완료 후기(0)</Nav.Link>
                    </Nav.Item> 
                    </Nav>
                    <div>
            <table className="mypage-review-table-container">
                            <tr>
                                <td className="mypage-review-table-item" colspan="5"><br/><br/>작성가능한 후기 내역이 없습니다.<br/><br/><br/></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            {/* <tr>
                            <td>2</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            </tr> */}
                    </table>
            </div>
            </div>


        </>
    )
}
