import React from 'react'
import jQuery from "jquery";
import './Order.css'
import product_img from '../images/product/product1.png'


export default function Order() {
        /* top:100px;
    left:945px; */
    window.$ = window.jQuery = jQuery;

    window.$(document).ready(function(){
    window.$(window).scroll(function(event){
        if(window.$(window).scrollTop() > 1458) {
            // console.log(window.$(".order-action-start").offset().top)
            window.$(".order-payview-container").css("position", "fixed").css('top','100px').css('left','70%').css('right', '0px');
        }
        else if((window.$(window).scrollTop() < 1792)) {
            window.$(".order-payview-container").css("position", "absolute").css('top','1620px').css('left','70%').css('right', '150px');
        }
        if((window.$(window).scrollTop() > 1792)) {
            // console.log(window.$(".order-action-end").offset().top)
            window.$(".order-payview-container").css("position", "absolute").css('top','1780px').css('left','70%').css('right', '150px');
        }
        });
    })

        

    return (
        <>
            <div className="order-container">
                <div className="order-title">주문서</div>
                <div>주문하실 상품명 및 수량을 정확하게 확인해 주세요.</div>
                <form>

                {/* 상품정보 */}
                    <div className="order-info-title">상품 정보</div>
                        <table>
                            <tr>
                                <td className="order-info-table-column-img"></td>
                                <td className="order-info-table-column-detail">상품정보</td>
                                <td className="order-info-table-column-price">상품금액</td>
                            </tr>
                            <tr>
                                <td className="order-info-table-ordered-img">
                                    <img src={product_img} alt="product_img"/>
                                </td>
                                <td className="order-info-table-ordered-detail">
                                    <div>유기농 비파 250g</div>
                                    <div>1개 / 개 당 19,000원</div>
                                </td>
                                <td className="order-info-table-ordered-price">
                                    <div>19000원</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="order-info-table-ordered-img">
                                    <img src={product_img} alt="product_img"/>
                                </td>
                                <td className="order-info-table-ordered-detail">
                                    <div>유기농 비파 250g</div>
                                    <div>1개 / 개 당 19,000원</div>
                                </td>
                                <td className="order-info-table-ordered-price">
                                    <div>19000원</div>
                                </td>
                            </tr>
                        </table>

                        {/* 개인정보 */}
                            <div className="order-user-title">개인정보 수정</div>
                            <div className="order-user-line"></div>
                        <div>
                            <table>
                                <tr className="order-user-info">
                                    <td>보내는분*</td>
                                    <td>
                                        <input type="text" className="order-user-info-name" value="홍길동" readOnly/>
                                    </td>
                                </tr>
                                <tr className="order-user-info">
                                    <td>휴대폰*</td>
                                    <td>
                                        <input type="tel" className="order-user-info-phone1" value="010" readOnly/>
                                            <span>-</span>
                                        <input type="tel" className="order-user-info-phone2" value="1234" readOnly/>
                                            <span>-</span>
                                        <input type="tel" className="order-user-info-phone2" value="5678" readOnly/>
                                    </td>
                                </tr>
                                <tr className="order-user-info">
                                    <td>이메일</td>
                                    <td>
                                        <input type="email" className="order-user-info-email" value="abcde@abc.com" readOnly/>
                                    </td>
                                </tr>
                                <tr className="order-user-info">
                                    <td></td>
                                    <td className="order-user-info-detail">
                                        <p>이메일을 통해 주문처리과정을 보내드립니다.</p>
                                        <p>정보 변경은 <span>마이컬리 > 개인정보 수정</span> 메뉴에서 가능합니다.</p>
                                    </td>
                                </tr>
                            </table>
                            <div className="order-user-line2"></div>
                        </div>

                        {/* 배송정보 */}
                        <div className="order-delivery-title">배송정보
                            <span>*정기 배송 휴무일: 샛별배송(<span>휴무없음</span>), 택배배송(<span>일요일</span>)</span>
                        </div>
                            <div className="order-user-line"></div>
                        <div>
                            <table>
                                <tr className="order-delivery-info">
                                    <td>주소</td>
                                    <td className="order-delivery-adress-button">
                                        <button>새 배송지 추가</button>
                                    </td>
                                </tr>
                                <tr className="order-delivery-info">
                                    <td>배송구분</td>
                                    <td className="order-delivery-info-detail">
                                        <p>아래의 장소는 배송 불가 지역입니다.</p>
                                        <p><span>> 배송 불가 장소</span>: 관공서/학교/병원/시장/공단 지역/산간 지역/백화점 등</p>
                                    </td>
                                </tr>
                                <tr className="order-delivery-info">
                                    <td>수령인 이름* </td>
                                    <td>
                                        <input type="text" className="order-delivery-info-name"/>
                                    </td>
                                </tr>
                                <tr className="order-delivery-info">
                                    <td>휴대폰*</td>
                                    <td>
                                        <input type="tel" className="order-delivery-info-phone1"/>
                                            <span>-</span>
                                        <input type="tel" className="order-delivery-info-phone2"/>
                                            <span>-</span>
                                        <input type="tel" className="order-delivery-info-phone2"/>
                                    </td>
                                </tr>
                                <tr className="order-delivery-info">
                                    <td className="order-delivery-require-title" >배송 요청사항</td>
                                    <td class="order-action-start">
                                        <textarea className="order-delivery-require" type="MSG" rows="4" cols="25"/>
                                    </td>
                                </tr>
                            </table>
                            <div className="order-user-line2"></div>
                        </div>


                        {/* 결제 금액 창 */}
                        <div className="order-payview-container">
                            <p>결제금액</p>
                            <div className="order-payview-body">
                                <table className="order-payview-table">
                                    <tr>
                                        <td>상품 금액</td>
                                        <td>24,900원</td>
                                    </tr>
                                    <tr className="order-payview-table-line">
                                        <td colSpan="2"><div className="order-user-line2"></div></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>상품할인금액</td>
                                        <td>0원</td>
                                    </tr>
                                    <tr>
                                        <td>배송비</td>
                                        <td>0원</td>
                                    </tr>
                                    <tr>
                                        <td>쿠폰사용</td>
                                        <td>0원</td>
                                    </tr>
                                    <tr>
                                        <td>적립금사용</td>
                                        <td>0원</td>
                                    </tr>
                                    <tr className="order-payview-table-line">
                                        <td colSpan="2"><div className="order-user-line2"></div></td>
                                        <td></td>
                                    </tr>
                                    <tr className="order-payview-table-total">
                                        <td>최종결제금액</td>
                                        <td>0원</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">구매 시 0원 (5%) 적립예정</td>
                                        <td></td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        {/* 적립금 */}
                    <div className="order-reserves-container">
                        <div className="order-reserves-title">적립금</div>
                        <div className="order-user-line"></div>
                        <table>
                            <tr className="order-reserves-info" >
                                <td>적립금 적용</td>
                                <td>
                                    <input type="text"/>
                                        <span>원</span>
                                            <input type="checkbox"/>
                                                <span>모두사용</span>
                                        <p>보유 적립금: 0원</p>
                                    <p class="order-action-end">*적립금 내역: 마이컬리 > 적립금</p>
                                </td>
                            </tr>
                        </table>
                        <div className="order-user-line2"  ></div>
                    </div>

                    {/* 결제 수단 */}
                    <div className="order-pay-container" >
                        <div className="order-pay-title">결제수단</div>
                        <div className="order-user-line"></div>
                        <table>
                            <tr className="order-pay-info">
                                <td>일반결제</td>
                                <td>
                                    <input type="radio" checked/><span>신용카드</span>
                                    <div>
                                        <select>
                                            <option selected>카드를 선택해주세요</option>
                                            <option>신한</option>
                                            <option>국민</option>
                                            <option>하나</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                            <tr className="order-pay-info" id="order-pay-info">
                                <td colSpan="2">
                                <p>※ 보안강화로 Internet Explorer 8 미만 사용 시 결제창이 뜨지 않을 수 있습니다.</p>
                                </td>
                                <td></td>
                            </tr>
                            <tr className="order-pay-info" id="order-pay-info">
                                <td className="order-select-title">미출고 시 조치방법*</td>
                                <td>
                                    <input type="radio" name="refund" checked/><span>결제수단으로 환불</span>
                                    <input type="radio" name="delivery"/><span>상품 입고 시 배송</span>
                                </td>
                            </tr>
                        </table>
                    </div>
                    
                    {/* 개인정보 수집/제공 */}
                    <div>
                        <div className="order-agree-title" >개인정보 수집/제공 *</div>
                        <div className="order-user-line" ></div>
                        <div className="order-agree-container">
                            <div className="agree_ch">
                                <label className="ch">
                                <input type="checkbox"></input>
                                <span></span>전체동의
                                </label>
                            </div>
                            <div className="agree_subCh">
                                <div className="agree_ch">
                                <label className="ch">
                                    <input type="checkbox"></input>
                                    <span></span>개인정보 수집 · 이용 동의 <span className="text_sub">(필수)</span>
                                </label>
                                <a href="#" className="btn_essential">약관보기 ></a>
                                </div>
                                <div className="agree_ch">
                                <label className="ch">
                                    <input type="checkbox"></input>
                                    <span></span>결제대행 서비스 약관 동의 <span className="text_sub">(필수)</span>
                                </label>
                                <a href="#" className="btn_essential">약관보기 ></a>
                                </div>
                        </div>
                        </div>
                    </div>

                    {/* 결제하기 버튼 */}
                    <div className="order-submit-button">  
                        <input type="button" value="결제하기"/>
                        <p>* 직접 주문취소는 '입금확인' 상태일 경우에만 가능합니다.</p>
                        <p>* 미성년자가 결제 시 법정대리인이 그 거래를 취소할 수 있습니다.</p>
                    </div>
                    </form>
            </div>
        </>
    )
}