import React from 'react'
import './OrderOk.css'
import OK from '../images/orderok/Ok.png'
import {Link} from 'react-router-dom'

export default function OrderOk(props) {
    const orderInfo = props.orderInfo
    return (
        <div className="orderOk-container">
            <div className="orderOk-subcontainer">
                <div>주문완료</div>
                    <div><img src={OK} alt="okimg"/></div>
                        <div>{props.mem_name}님의 주문이 완료되었습니다.</div>
                            <div className="orderOk-subcontainer-orderlist">
                                <div>
                                    <Link to={`/mypage/order?order_id=${orderInfo.order_id}`}>
                                        <span>주문번호</span> <span>{orderInfo.order_id}</span> <span>></span>
                                    </Link>
                                </div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>상품명</td>
                                            <td>{orderInfo.prd_name}</td>
                                        </tr>
                                        <tr>
                                            <td>배송지 정보</td>
                                            <td>{orderInfo.order_receiver_addr}</td>
                                        </tr>
                                        <tr>
                                            <td>결제 일시</td>
                                            <td>{orderInfo.order_paydate}</td>
                                        </tr>
                                        <tr>
                                            <td>결제 방법</td>
                                            <td>{orderInfo.order_payway}</td>
                                        </tr>
                                        <tr>
                                            <td>결제 금액</td>
                                            <td>{orderInfo.order_paymoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <Link to="/mypage/order">
                                    <input type="button" value="주문내역 바로가기"/>
                                </Link>
                            </div>
            </div>
        </div>
    )
}
