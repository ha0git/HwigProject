import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import './Cart.css'

export default function Cart(props) {
    const [count, setCount] = useState(1)
    const [goodsInfo, setGoodsInfo] = useState(props.prdList)

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

    const onAllRemove = (id) => {
        setGoodsInfo(goodsInfo.filter(good => good.prd_id === id))
    }

    const onStock = () => {
        setGoodsInfo(goodsInfo.filter(good => good.prd_stock !== 0))
        console.log(goodsInfo)
    }

    const productGoods = goodsInfo.map(goods => {

        const onIncrease = () => {
            setCount(goods.order_count += 1)
        }
        const onDecrease = () => {
            if (count > 1) {
                setCount(goods.order_count -= 1)
            }
        }
        const onRemove = (id) => {
            const item = goodsInfo.filter(good => good.prd_id !== id)
            setGoodsInfo(item)
        }

        return (
            <>
                <tbody>
                    <tr data-tr_value={goods.prd_id}>
                        {/*<td className="cart-table-item-none" colspan="5"><br/><br/>장바구니에 담긴 상품이 없습니다.<br/><br/><br/></td>*/}
                        <td>
                            <div className="cart-goods-thumb">
                                <img src={goods.prd_thumb_img} />
                            </div>
                            <div className="cart-goods-desc">
                                <div className="cart-goods-name">
                                    {goods.prd_name}
                                </div>
                                <br />
                                <div className="cart-goods-price">
                                    {goods.prd_price}원
                            </div>
                            </div>
                        </td>
                        <td>
                            <div className="cart-goods-quantity">
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
                            <div className="cart-goods-price2">
                                {goods.prd_price * goods.order_count}원
                        </div>
                        </td>
                        <td>
                            <button type="button" onClick={() => { onRemove(goods.prd_id) }}>삭제</button>
                        </td>
                    </tr>
                </tbody>
            </>
        )
    })
    return (
        <>
            <div className="cart_container">
                <div className="cart-tit">
                    <div className="cart-title">장바구니</div>
                    <div>주문하실 상품명 및 수량을 정확하게 확인해 주세요.</div>
                </div>

                <form>

                    <Table className="cart_table">
                        <thead>
                            <tr>
                                <th className="cart-table-column-detail cartd">상품 정보</th>
                                <th className="cart-table-column-count cartd">수량</th>
                                <th className="cart-table-column-price cartd">상품금액</th>
                                <th className="cart-table-column-delete cartd">장바구니 삭제</th>
                            </tr>
                        </thead>
                        {productGoods}

                    </Table>
                    <div className="cart-button">
                        <button className="cart-delete-button" type="button" id="delete" onClick={() => onAllRemove(goodsInfo.prd_id)}>장바구니 비우기</button>
                        <button className="cart-delete-button" type="button" onClick={() => { onStock() }}>품절상품 삭제</button>
                    </div>
                    <Table className="cart_table2">
                        <thead>
                            <tr>
                                <th className="cart-calculate-order"><div className="cartd">총 주문금액</div></th>
                                <th className="cart-calculate-plus"></th>
                                <th className="cart-calculate-deliv"><div className="cartd">배송비</div></th>
                                <th className="cart-calculate-equal"></th>
                                <th className="cart-calculate-total"><div className="cartd">총 결제금액</div></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="cart-calculate-price" id="">{result}원</div>
                                </td>
                                <td className="cart-calculate-plus"><div className="cartd2">+</div></td>
                                <td>
                                    <div className="cart-calculate-price" id="">{delivery_charge}원</div>
                                </td>
                                <td className="cart-calculate-equal"><div className="cartd2">=</div></td>
                                <td>
                                    <div className="cart-calculate-price" id="cart-calculate-price">{result + delivery_charge}</div>
                                </td>

                            </tr>
                        </tbody>

                    </Table>
                    <div>
                        <button type="button" className="cart-submit1" >계속 쇼핑하기</button>
                        <button type="button" className="cart-submit" type="submit">주문하기</button>
                    </div>
                </form>

            </div>
        </>
    )
}

