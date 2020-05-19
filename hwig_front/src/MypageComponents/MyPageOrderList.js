import React, {useState} from 'react'
import './MyPageOrderList.css'
import {Table, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pagination from "react-js-pagination";


export default function OrderList(props) {

    const orderInfo = props.data.data
    console.log(orderInfo)
    const [activePage, setactivePage] = useState(1);
    
    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setactivePage(pageNumber)
        props.history.push(`/mypage/order?page=${pageNumber}`)
    }
    
    const orderlist = orderInfo.map(orderInfo => {
        const handleConfirm = () => {
            const order_id = orderInfo.order_id
            const order_status = "배송 완료"
            console.log({order_status},order_id)
            props.confirmD({order_status},order_id)
        }
        const confirmD = () => {
            if (orderInfo.order_status == "배송 중") {
                return (
                    <>
                    <button className="mypage_order_confirm" onClick={handleConfirm}>구매확정</button>
                    </>
                )
            } else {
                return
            }
        }
        return (
            <>
            <li className="mypage_order_li">
                <div className="mypage_order_date">{orderInfo.order_paydate}</div> 
                    <div className="mypage_order_goods">
                        <div className="mypage_order_name">
                        <Link to={`orderdetail?orderno=${orderInfo.order_id}`}>{orderInfo.prd_name} 포함 주문건</Link>
                        </div>
                        <div className="mypage_order_info">
                            <div className="mypage_order_goods_thumb">
                                <img src={orderInfo.prd_thumb}/>
                            </div> 
                            <div className="mypage_order_desc">
                                <dl>
                                    <dt>주문번호</dt> <dd>{orderInfo.order_id}</dd>
                                </dl> 
                                <dl>
                                    <dt>결제금액</dt> <dd>{orderInfo.order_paymoney}</dd>
                                </dl> 
                                <dl>
                                    <dt>주문상태</dt> <dd class="mypage_order_status_end">{orderInfo.order_status}</dd>
                                </dl>
                            </div>
                        </div> 
                        <div className="mypage_order_status">
                            <span className="mypage_order_inner_status">  
                                <Link to={`/customer/qna/board?order_id=${orderInfo.order_id}`} className="mypage_order_link">1:1 문의</Link>
                                {confirmD()}
                            </span>
                            
                        </div>
                    </div>
                </li>
            </>
        )
    })
    const showOrderList = () =>{

        if (orderInfo.length > 0) {let list =[];
        let begin = (activePage-1)*props.size;
        let end;
        if(orderInfo.length < activePage*2){
            end = orderInfo.length;
        }else{
            end = activePage*2;
        }
        console.log(begin,end)

        for(let i=begin; i<end; i++){
            list.push(orderlist[i])
        }
        console.log(list)

        return list} else {
            return (
                <>
                <br /> <br /> 최근 주문 내역이 없습니다.
                </>
            )
        }
    }
    const showPaging = () => {
        if (orderInfo.length > 0) {
            return(<Pagination
                activePage={activePage}
                itemsCountPerPage={1}
                totalItemsCount={orderInfo.length}
                pageRangeDisplayed={3}
                onChange={handlePageChange}
            />)
        } else {
            return
        }
    }
    return (
        <>
            <div className="mypage-order-container">
                <div className="mypage-order-title">주문내역<span className="mypage-order-subtitle">지난 3년간의 주문내역 조회가 가능합니다</span></div>
                
                <div>
                    <ul className="mypage_order_list_order">
                        {showOrderList()}
                    </ul>
                </div>
                <div className="product-pagenation-container">
                    {showPaging()}
                    
                </div>
            </div>
        </>
    )
}