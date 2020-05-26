import React, { useState, useEffect } from 'react';
import './Product.css'
import ImageMapper from 'react-image-mapper';
import Pagination from "react-js-pagination";
import jQuery from "jquery";


export default function Product(props) {

    const [order_count, setOrder_count] = useState(1)
    const goodsInfo = props.prdList;
    const mem_id = props.userInfo.mem_id;
    const prd_id = props.prdList.prd_id;
    const prd_price = props.prdList.prd_price;
    const prd_review = props.prdReview;


    console.log(prd_review)

    // 상품 주문

    const onIncrease = () => {
        setOrder_count(unit => unit + 1)
    }
    const onDecrease = () => {
        if (order_count > 1) {
            setOrder_count(unit => unit - 1)
        }
    }

    const handleSubmit = (e) => {
        console.log('handleSubmit 실행됨')
        e.preventDefault();
        props.onSubmit({ mem_id, prd_id, order_count })
    }

    const totalPay = (goodsInfo.prd_price * order_count)

    //상품 리뷰
    window.$ = window.jQuery = jQuery;

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
            window.$(`.temp_toggle${index}`).css('display', 'none')
        })
            return (
                <>
                    <tr key={index}>
                        <td>{review.review_id}</td>
                        <td><a onClick={() => handleShow(index)}>{review.review_subject}</a></td>
                        <td>{review.mem_id}</td>
                        <td>{review.review_regdate}</td>
                    </tr>
                    <tr className={`temp_toggle${index}`}>
                        <td className="prd_toggle_content" colSpan="4">
                            <img src={"http://13.209.202.242:8080/" + review.review_img} />
                            <p>{review.review_content}</p>
                        </td>
                    </tr>
                </>
            )
    })
    const [activePage, setactivePage] = useState(1);

    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setactivePage(pageNumber)
        props.history.push(`/shop/product?goodsno=${goodsInfo.prd_id}&page=${pageNumber}`)
    }

    const showOrderList = () =>{

        if (prd_review.length > 0) {
            let list =[];
            let begin = 0;
            let end;

            begin = (activePage - 1) * 5;

            if(prd_review.length < props.page * 5){
                end = props.page * 5;
            }else{
                end = activePage *5;
            }
            console.log(begin,end)

            for(let i=begin; i<end; i++){
                list.push(prdReviewList[i])
            }
            console.log(list)

            return list
        }
        else{
            return(
                <tr>
                    <td colSpan="4">해당 상품에 대한 리뷰가 없습니다.</td>
                </tr>
            )
        }
    }

    return (

        <form onSubmit={handleSubmit}>
            <div className="prd_wrap">
                <div className="section_view">
                    <div className="thumb">
                        <ImageMapper src={"http://13.209.202.242:8080/" + goodsInfo.prd_thumb} />
                    </div>
                    <p className="product_name">
                        <strong className="p_name">
                            {goodsInfo.prd_name}
                        </strong>
                        <span className="srtdesc">
                            {goodsInfo.prd_comment} ({goodsInfo.prd_kg}/{goodsInfo.prd_ea})
                        </span>
                    </p>
                    <p className="product_price">
                        <strong className="p_price">
                            {goodsInfo.prd_price}<span className="won">원</span>
                        </strong>
                        <span className="p_price_unlogged">
                            로그인 후, 적립혜택이 제공됩니다.
                        </span>
                    </p>
                    <div className="product_info">
                        <dl class="list fst">
                            <dt class="tit">판매단위</dt>
                            <dd class="desc">{goodsInfo.prd_ea}</dd>
                        </dl>
                        <dl class="list">
                            <dt class="tit">중량/용량</dt>
                            <dd class="desc">{goodsInfo.prd_kg}</dd>
                        </dl>
                        <dl class="list">
                            <dt class="tit">원산지</dt>
                            <dd class="desc">{goodsInfo.prd_from}</dd>
                        </dl>
                        <dl class="list">
                            <dt class="tit">포장타입</dt>
                            <dd class="desc">{goodsInfo.prd_wrap} <br />
                                <strong class="emph">택배배송은 에코포장이 스티로폼으로 대체됩니다.</strong>
                            </dd>
                        </dl>
                        <dl class="list">
                            <dt class="tit">알레르기정보</dt>
                            <dd class="desc">- 돼지고기, 쇠고기, 대두 함유
                            <br />- 이 제품은 알류, 우유, 메밀, 땅콩, 밀, 고등어, 게, 새우, 복숭아, 토마토, 아황산류, 호두, 닭고기, 오징어, 조개류, 잣을 사용한 제품과 같은 제조시설에서 제조하고 있습니다.</dd>
                        </dl>
                        <dl class="list">
                            <dt class="tit">유통기한</dt>
                            <dd class="desc">상품별 별도표기</dd>
                        </dl>
                        <dl class="list">
                            <dt class="tit">안내사항</dt>
                            <dd class="desc"><span class="txt">{goodsInfo.prd_info}</span></dd>
                        </dl>
                        <dl class="list last">
                            <dt class="tit">구매수량</dt>
                            <div className="cart-goods-quantity prd_btn">
                                <button type="button" className="btn_reduce" onClick={onDecrease}>
                                    <img src="https://res.kurly.com/pc/ico/1801/ico_minus_24x4_777.png" />
                                </button>
                                <input type="text" className="inp_quantity" value={order_count} />
                                <button type="button" className="btn_rise" onClick={onIncrease}>
                                    <img src="https://res.kurly.com/pc/ico/1801/ico_plus_24x24_777.png" />
                                </button>
                            </div>
                        </dl>
                        <div className="prd_pay">
                            <div className="prd_pay_total">
                                <span className="prd_pay_tit">총 상품금액&nbsp;:&nbsp;</span>
                                <span className="prd_pay_num"> {totalPay}</span>
                                <span className="prd_pay_won">원</span>
                            </div>
                            <div className="prd_gocart" >
                                <button type="submit">장바구니 담기</button>
                            </div>
                        </div>
                    </div>
                    <div className="prd_image">
                        <img src={"http://13.209.202.242:8080/" + goodsInfo.prd_img} />
                    </div>
                    <div className="prd_review">
                        <h2>PRODUCT REVIEW</h2>
                        <ul className="prd_reviewInfo">
                            <li>
                                <span className="prd_ico"></span>
                                <p>상품에 관련된 후기를 볼 수 있는 공간입니다.</p>
                            </li>
                            <li>
                                <span className="prd_ico"></span>
                                <p>후기작성 및 배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이휙 내 1:1 문의에 남겨주세요.</p>
                            </li>
                        </ul>
                        <div className="prd_frmList">
                            <table>
                                <thead className="prd_frmtit">
                                    <tr>
                                        <th>번호</th>
                                        <th>제목</th>
                                        <th>작성자</th>
                                        <th>작성일</th>
                                    </tr>
                                </thead>
                                <tbody className="prd_frmContent">
                                    {showOrderList()}
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
                    </div>
                </div>
            </div>
        </form>

    )
}
