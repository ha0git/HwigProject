import React, {useState} from 'react'
import './MyPageOrderDetail.css'
import {Table, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function MyPageOrderDetail(props) {
    const goodsInfo = props.data.prdList
    const orderInfo = props.data.memData
    const order_count = 1
    const mem_id = "test1"
    const cartAll = () => {
        for(let i = 0; i < goodsInfo.length; i++) {
            const prd_id = goodsInfo[i].prd_id
            console.log({ mem_id, prd_id, order_count })
            props.cart({ mem_id, prd_id, order_count })
        }
    }
    const cancel = () => {
        if (orderInfo.order_status == "입금확인") {
            return (
                <>
                <button type="button" className="mypage_orderdetail_btn_cancel">전체 상품 주문 취소</button>
                </>
            )
        }
    }
    
    const OrderDetails = goodsInfo.map(goodsInfo => {
        const prd_id = goodsInfo.prd_id
        const carteach = () => {
            console.log("1")
            props.cart({ mem_id, prd_id, order_count })
        }
        return (
            <>
                <tr className="mypage_orderdetail_fst">
                    <td></td>
                    <td className="mypage_orderdetail_thumb">
                    <Link to={`../shop/product?goodsno=${goodsInfo.prd_id}`}><img src={"http://13.209.202.242:8080/" + goodsInfo.prd_thumb} /></Link>
                    </td>
                    <td className="mypage_orderdetail_info">
                        <div className="mypage_orderdetail_name">
                        <Link to={`../shop/product?goodsno=${goodsInfo.prd_id}`}>{goodsInfo.prd_name}</Link>
                        </div>
                        <div className="mypage_orderdetail_desc">
                            <span className="mypage_orderdetail_price">{goodsInfo.prd_price}원</span>
                            <span className="mypage_orderdetail_ea">{goodsInfo.order_count}개 구매</span>
                        </div>
                    </td>
                    <td className="mypage_orderdetail_progress">
                        {orderInfo.order_status}
                    </td>
                    <td className="mypage_orderdetail_action">
                        <button type="button" className="mypage_orderdetail_btn" onClick={carteach}>장바구니 담기</button>
                    </td>
                    <td></td>
                </tr>
            </>
        )
    })
    return (
        <>
            <div className="mypage_orderdetail_container">
                <div>
                    <div className="mypage_orderdetail_page_section">
                        <div className="mypage_orderdetail_head_aticle">
                            <h2 className="mypage_orderdetail_tit">주문 내역 상세</h2>
                        </div>
                        <div className="mypage_orderdetail_link_type">
                            <h3 className="mypage_orderdetail_tit">주문번호 {orderInfo.order_id}</h3>
                            <span className="mypage_orderdetail_link">
                            배송 또는 상품에 문제가 있나요?
                                <Link to={`/customer/qna/board?order_id=${orderInfo.order_id}`}>1:1 문의하기</Link>
                            </span>
                        </div>
                        
                        <table className="mypage_orderdetail_tbl_type1">
                            
                        <tbody>
                           {OrderDetails}
                        </tbody>
                        </table>
                    <div className="mypage_orderdetail_order_cancel">
                    <span className="mypage_orderdetail_inner_cancel">
                    <button type="button" className="mypage_orderdetail_cart_btn" onClick={cartAll}>전체 상품 다시 담기</button>
                    {cancel()}
                    </span>
                    <p className="mypage_orderdetail_cancel_notice">직접 주문 취소는 <strong className="mypage_orderdetail_emph">‘입금확인’</strong> 상태일 경우에만 가능합니다.</p>
                    </div>
                    
                    <div className="mypage_orderdetail_head_section">
                    <h3 className="mypage_orderdetail_tit">
                    결제 정보
                    </h3>
                    </div>


                    <table className="mypage_orderdetail_tbl_type2">
                       
                        <tbody>
                            <tr>
                                <th>총주문금액</th>
                                <td><span>{orderInfo.order_paymoney}</span>원
                                </td>
                            </tr>
                            <tr>
                                <th>상품할인</th>
                                <td> <span >{orderInfo.prd_sale}</span>원</td>
                            </tr>
                            <tr>
                                <th>적립금 사용</th>
                                <td>- <span >{orderInfo.order_used_reverse}</span>원</td>
                            </tr>
                            <tr>
                                <th>배송비</th>
                                <td>
                                    <div>0원</div>
                                </td>
                            </tr>
                            <tr>
                                <th>결제금액</th>
                                <td>
                                    <strong className="mypage_orderdetail_emph"><span>{orderInfo.order_paymoney}</span>원</strong>
                                </td>
                            </tr>
                            <tr>
                                <th>적립금액</th>
                                <td>
                                    <strong className="emph">{orderInfo.order_reverse}원</strong>
                                </td>
                            </tr>
                            <tr>
                                <th>결제방법</th>
                                <td>{orderInfo.order_payway}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mypage_orderdetail_head_section">
                        <h3 className="mypage_orderdetail_tit">주문 정보</h3>
                    </div>
                    <table className="mypage_orderdetail_tbl_type2">
                        <tbody>
                            <tr>
                            <th>주문 번호</th>
                            <td>{orderInfo.order_id}</td>
                            </tr>
                            {/*<tr>
                            <th>주문자명</th>
                            <td>{orderInfo.order_sender}</td>
                            </tr>*/}
                            <tr>
                            <th>보내는 분</th>
                            <td>{orderInfo.order_sender}</td>
                            </tr>
                            <tr>
                            <th>주문 처리상태</th>
                            <td>배송완료</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="mypage_orderdetail_head_section">
                        <h3 className="mypage_orderdetail_tit">배송 정보</h3>
                    </div>
                        <table className="mypage_orderdetail_tbl_type2">
                            <tbody>
                                <tr>
                                    <th>받는 분</th>
                                    <td>{orderInfo.order_receiver}</td>
                                </tr>
                                <tr>
                                    <th>받는 분 핸드폰</th>
                                    <td>
                                    {orderInfo.order_receiver_tel}
                                    </td>
                                </tr>
                                <tr>
                                    <th>주소</th>
                                    <td>
                                    {orderInfo.order_receiver_addr}
                                    </td>
                                </tr>
                                <tr>
                                    <th>배송 요청사항</th>
                                    <td>
                                    {orderInfo.order_request}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        </>
    )
}