import React from 'react'
import './MyPageOrderList.css'
import {Table, Form} from 'react-bootstrap'

export default function OrderList() {
    return (
        <>
            <div className="mypage-order-container">
                <span className="mypage-order-title">주문내역</span><span className="mypage-order-subtitle">지난 3년간의 주문내역 조회가 가능합니다</span><span></span>
                <div>
                    <table className="mypage-order-table-container">
                            <tr>
                                <td className="mypage-order-table-item" colspan="5"><br/><br/>장바구니에 담긴 상품이 없습니다.<br/><br/><br/></td>
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
