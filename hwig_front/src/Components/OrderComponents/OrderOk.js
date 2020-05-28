import React from 'react'
import './OrderOk.css'
import OK from '../images/orderok/Ok.png'
import { Link } from 'react-router-dom'

export default function OrderOk(props) {
    const orderInfo = props.orderInfo
    return (
        <div className="orderOk-container">
            <div className="orderOk-subcontainer">
                <div className="orderOk_tit">주문완료</div>
                <div><img src={OK} alt="okimg" /></div>
                <div>{props.mem_name}님의 주문이 완료되었습니다.</div>
                <div className="orderOk-subcontainer-orderlist">
                    <div>
                        <Link to={`/mypage/order?order_id=${orderInfo.order_id}`}>
                            <span>주문번호</span> <span>{orderInfo.order_id}</span> <span>></span>
                        </Link>
                    </div>
                    <table>
                        <tbody className="orderOk_list">
                            <tr className="orderOk_name">
                                <th>상품명</th>
                                <td>{orderInfo.prd_name + " 외 " + localStorage.getItem('prd_ids') + "건"}</td>
                            </tr>
                            <tr className="orderOk_info">
                                <th>배송지 정보</th>
                                <td>{orderInfo.order_receiver_addr}</td>
                            </tr>
                            <tr className="orderOk_time">
                                <th>결제 일시</th>
                                <td>{orderInfo.order_paydate}</td>
                            </tr>
                            <tr className="orderOk_payway">
                                <th>결제 방법</th>
                                <td>{orderInfo.order_payway}</td>
                            </tr>
                            <tr className="orderOk_money">
                                <th>결제 금액</th>
                                <td>{orderInfo.order_paymoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="orderOk_btn">
                    <Link to="/mypage/order">
                        <input type="button" value="주문내역 바로가기" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
