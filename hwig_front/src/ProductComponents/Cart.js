import React, { useState, useEffect }  from 'react'
import {Table} from 'react-bootstrap'
import './Cart.css'
import jQuery from "jquery";
import { First } from 'react-bootstrap/PageItem';
window.$ = window.jQuery = jQuery;


export default function Cart(props) {
    window.$(document).ready(function(){
        window.$("input[type=checkbox]:first").click(function(){
            if(window.$("input[type=checkbox]:first").prop("checked")){
                window.$("input[name=chk]").prop("checked",true);
            }else{
                window.$("input[name=chk]").prop("checked",false);
            }
        })
        window.$('#delete').click(function(){
          if(window.confirm("삭제하시겠습니까?")){
              window.$("input[name=chk]:checked").each(function(){
                  var tr_value =window.$(this).val();
                  setGoodsInfo(
                      goodsInfo.splice(tr_value,1)
                  )
              });
          }else{
              return false;
          }
      });
      })
    const [goodsInfo,setGoodsInfo] = useState(props.prdList.product)
    const [quant,setQuant] = useState(1)
    
    let result = 0;
    let delivery_charge = 0;

    for (let i = 0; i < goodsInfo.length; i++) {
        result += (goodsInfo[i].prd_price * goodsInfo[i].prd_quantity)
    }
    if (result >= 25000) {
        delivery_charge = 0
    } else if (result < 25000) {
        delivery_charge = 3000
    }

    const deleteprd = (i) => {
        console.log(goodsInfo[i])
    }
    const productGoods = goodsInfo.map(goodsInfo => {

        const rise = () => {
            goodsInfo.prd_quantity += 1
            setQuant( quant => quant = goodsInfo.prd_quantity)
        }
        const reduce = () => {
            if (quant > 1) {
                goodsInfo.prd_quantity -= 1
                setQuant( quant => quant = goodsInfo.prd_quantity)
            }
            else {
                return
            }
        }


        return (
            <>
            <tbody>
                <tr data-tr_value={goodsInfo.prd_id}>
                    {/*<td className="cart-table-item-none" colspan="5"><br/><br/>장바구니에 담긴 상품이 없습니다.<br/><br/><br/></td>*/}
                    <td>
                        <label className="cart_ch">
                        <input type="checkbox" id="cart_check2" name="chk" value={goodsInfo.prd_id}></input>
                        <span></span>
                    </label>
                    </td>
                    <td>
                        <div className="cart-goods-thumb">
                            <img src={goodsInfo.prd_thumb_img} />
                        </div>
                        <div className="cart-goods-desc">
                            <div className="cart-goods-name">
                            {goodsInfo.prd_name}
                            </div>
                            <br />
                            <div className="cart-goods-price">
                            {goodsInfo.prd_price}원
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="cart-goods-quantity">
                            <button type="button" className="btn_reduce" onClick={reduce}>
                                <img src="https://res.kurly.com/pc/ico/1801/ico_minus_24x4_777.png" />
                            </button> 
                            <input type="text" className="inp_quantity" value={goodsInfo.prd_quantity}/>
                            <button type="button" className="btn_rise" onClick={rise}>
                                <img src="https://res.kurly.com/pc/ico/1801/ico_plus_24x24_777.png" />
                            </button>
                        </div>
                    </td>
                    <td>
                        <div className="cart-goods-price2">
                            {goodsInfo.prd_price * goodsInfo.prd_quantity}원
                        </div>
                    </td>
                </tr>
            </tbody>
            </>
        )
    } )
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
                                            <th className="cart-table-column-check">
                                            <label className="cart_ch">
                                                <input type="checkbox" ></input>
                                                <span></span>
                                            </label></th>
                                            <th className="cart-table-column-detail"><div className="cartd">상품 정보</div></th>
                                            <th className="cart-table-column-count"><div className="cartd">수량</div></th>
                                            <th className="cart-table-column-price"><div className="cartd">상품금액</div></th>
                                        </tr>
                                    </thead>
                                        {productGoods}
                                    
                                </Table>
                                <div className="cart-button">
                                <button className="cart-delete-button" type="button" id="delete">선택상품 삭제</button>
                                <button className="cart-delete-button" type="button">품절상품 삭제</button>
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
                                                <div className="cart-calculate-price" id="cart-calculate-price">{result+delivery_charge}</div>
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
            
                                                 