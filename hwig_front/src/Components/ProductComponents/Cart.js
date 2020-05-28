import React, { useState, useEffect } from 'react'
import './Cart.css'
import xbutton from '../images/xbutton.png'

export default function Cart(props) {
    const [count, setCount] = useState(props.prdList)
    const [goodsInfo, setGoodsInfo] = useState(props.prdList)
    //삭제된 상품 배열
    const [prd_ids, setPrd_ids] = useState(new Array());
    const [order_counts, setOrder_counts] = useState(new Array());

    const mem_id = props.userInfo.mem_id;

    //배송비 금액 부분
    let result = 0;
    let delivery_charge = 0;

    for (let i = 0; i < goodsInfo.length; i++) {
        result += (goodsInfo[i].prd_price * goodsInfo[i].order_count)
    }
    if (result >= 25000) {
        delivery_charge = 0
    } else if (result < 25000) {
        delivery_charge = 3000
    }

    //장바구니 비우기
    const onAllRemove = (id) => {
        const remove = goodsInfo.filter(good => good.prd_id === id)
        setGoodsInfo(remove)
        props.onClick2({ mem_id })
        console.log(remove)
    }
    //품절상품 삭제
    const onStock = () => {
        setGoodsInfo(goodsInfo.filter(good => good.prd_stock !== 0))
    }

    //상품 리스트 mapping
    const productGoods = goodsInfo.map(goods => {

        //상품수량 증가버튼
        const onIncrease = () => {
            setCount(goods.order_count += 1)
            console.log(goods.order_count)
        }
        //상품수량 감소버튼
        const onDecrease = () => {
            if (count > 1) {
                setCount(goods.order_count -= 1)
            }
        }

        //장바구니 삭제버튼
        const onRemove = prd_id => {

            //장바구니 남아있는 상품 객체 골라내기
            const items = goodsInfo.filter(good => good.prd_id !== prd_id)
            setGoodsInfo(items)
            props.onClick1({ mem_id, prd_id })
            console.log(items)
            console.log(mem_id, prd_id)
        }

        return (
            <>
                <tbody>
                    <tr data-tr_value={goods.prd_id} >
                        {/*<td className="cart-table-item-none" colspan="5"><br/><br/>장바구니에 담긴 상품이 없습니다.<br/><br/><br/></td>*/}
                        <td>
                            <div className="cart_goods_thumb">
                                <img src={"http://13.209.202.242:8080/" + goods.prd_thumb} />
                            </div>
                            <div className="cart_goods_desc">
                                <div className="cart_goods_name">
                                    {goods.prd_name}
                                </div>
                                <br />
                                <div className="cart_goods_price">
                                    {goods.prd_price}원
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="cart_goods_quantity">
                                <button type="button" className="btn_reduce" onClick={onDecrease}>
                                    <img src="https://res.kurly.com/pc/ico/1801/ico_minus_24x4_777.png" />
                                </button>
                                <input type="text" className="inp_quantity" value={goods.order_count} />
                                <button type="button" className="btn_rise" onClick={onIncrease}>
                                    <img src="https://res.kurly.com/pc/ico/1801/ico_plus_24x24_777.png" />
                                </button>
                            </div>
                        </td>
                        <td>
                            <div className="cart_goods_price2">
                                {goods.prd_price * goods.order_count}원
                        </div>
                        </td>
                        <td className="cart_delete_btn">
                            <button type="button" onClick={() => onRemove(goods.prd_id)}>
                                <img src={xbutton}></img>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </>
        )
    })

    //주문하기 버튼
    
    const handleSubmit = (e) => {
        console.log('handleSubmit 실행됨')
        e.preventDefault();
        //남아있는 상품 order_count, prd_id 배열 만들기
        let order = "";
        let id = "";

        for (let i = 0; i < goodsInfo.length; i++) {
            order_counts.push(goodsInfo[i].order_count)
            prd_ids.push(goodsInfo[i].prd_id)
        }
        props.onSubmit({ mem_id, prd_ids, order_counts })
    }

    return (
        <>
            <div className="cart_container">
                <div className="cart_tit">
                    <div className="cart_title">장바구니</div>
                    <div>주문하실 상품명 및 수량을 정확하게 확인해 주세요.</div>
                </div>
                <form onSubmit={handleSubmit}>
                    <table className="cart_table">
                        <thead>
                            <tr>
                                <th className="cart_table_column_detail cartd">상품 정보</th>
                                <th className="cart_table_column_count cartd">수량</th>
                                <th className="cart_table_column_price cartd">상품금액</th>
                                <th className="cart_table_column_delete cartd">장바구니 삭제</th>
                            </tr>
                        </thead>
                        {productGoods}
                    </table>
                    <div className="cart_button">
                        <button className="cart_delete_button" type="button" id="delete" onClick={() => onAllRemove(goodsInfo.prd_id)}>장바구니 비우기</button>
                        <button className="cart_delete_button" type="button" onClick={() => { onStock() }}>품절상품 삭제</button>
                    </div>
                    <table className="cart_table2">
                        <thead>
                            <tr>
                                <th className="cart_calculate_order cartd">총 주문금액</th>
                                <th className="cart_calculate_plus cartd"></th>
                                <th className="cart_calculate_deliv cartd">배송비</th>
                                <th className="cart_calculate_equal cartd"></th>
                                <th className="cart_calculate_total cartd">총 결제금액</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>
                                    <div className="cart_calculate_price">{result}원</div>
                                </td>
                                <td className="cart_cal">+</td>
                                <td>
                                    <div className="cart_calculate_price">{delivery_charge}원</div>
                                </td>
                                <td className="cart_cal">=</td>
                                <td>
                                    <div className="cart_calculate_price cart_totalPrice">{result + delivery_charge}원</div>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                    <div className="cart_submitbtn">
                        <button type="button" className="cart_submit1" >계속 쇼핑하기</button>
                        <button className="cart_submit" type="submit">주문하기</button>
                    </div>
                </form>

            </div>
        </>
    )
}

