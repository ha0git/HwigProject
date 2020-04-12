import React, { useState } from 'react'
import jQuery from "jquery";
import './Order.css'
import { Modal } from 'react-bootstrap'
import DaumPostcode from 'react-daum-postcode';
import product_img from '../images/product/product1.png'


export default function Order() {

    window.$ = window.jQuery = jQuery;

    window.$(document).ready(function () {
        var odPayview = document.$('.payview').offset();
        window.$(window).scroll(function (event) {
            if (window.$(window).scrollTop() > odPayview.top) {
                window.$(".order_payview")
                    .css("position", "fixed")
                    .css('top', '150px')
                    .css('left', '70%')
                    .css('right', '0px');
            }
            else if ((window.$(window).scrollTop() < 1900)) {
                window.$(".order_payview")
                    .css("position", "absolute")
                    .css('top', '1620px')
                    .css('left', '70%')
                    .css('right', '150px');
            }
            if ((window.$(window).scrollTop() > 1900)) {
                window.$(".order_payview")
                    .css("position", "absolute")
                    .css('top', '1900px')
                    .css('left', '70%')
                    .css('right', '150px');
            }
        });
    })
    // 주소 검색 API
    const [show, setShow] = useState(false);
    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const [mem_zipcode, setZipcode] = useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddress = () => (
        <Modal id="join_address_modal" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>주소 검색</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <DaumPostcode
                    onComplete={handleComplete}
                />
            </Modal.Body>
        </Modal>)


    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
        console.log(data.zonecode) // 우편번호
        setAddress1(fullAddress)
        setZipcode(data.zonecode)
        if (setAddress1) {
            handleClose()
        }
    }

    return (
        <div className="order">
            <div className="order_content">
                <div className="order_header">
                    <h2>주문서</h2>
                    <p>주문하실 상품명 및 수량을 정확하게 확인해 주세요.</p>
                </div>
                <form>
                    {/* 상품 정보 */}
                    <div className="order_goodsList">
                        <div className="order_titleArea">
                            <p>상품 정보</p>
                        </div>
                        <table className="order_tbl_goodsList">
                            <colgroup>
                                <col width="120px" />
                                <col width="auto" />
                                <col width="190px" />
                            </colgroup>
                            <thead className="order_tbl_head">
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">상품 정보</th>
                                    <th scope="col">상품 금액</th>
                                </tr>
                            </thead>
                            <tbody className="order_tbl_body">
                                <tr>
                                    <td>
                                        <img src={product_img}></img>
                                    </td>
                                    <td className="order_goodsInfo">
                                        <div>아보카도 1개</div>
                                        <div>1개 / 개 당 2,805원</div>
                                    </td>
                                    <td>
                                        3,000원
                                </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* 주문자 정보 */}
                    <div className="order_orderer">
                        <div className="order_titleArea">
                            <p>주문자 정보</p>
                        </div>
                        <table className="order_tbl order_tbl_orderer">
                            <tbody>
                                <tr>
                                    <th>보내는 분*</th>
                                    <td>이이이</td>
                                </tr>
                                <tr>
                                    <th>휴대폰*</th>
                                    <td>010-0000-0000</td>
                                </tr>
                                <tr>
                                    <th>이메일*</th>
                                    <td>
                                        hwig@hwig.com
                                        <p>이메일을 통해 주문처리과정을 보내드립니다.<br />
                                        정보 변경은 마이휙 > 개인정보 수정  메뉴에서 가능합니다.</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* 배송 정보 */}
                    <div className="order_delivery">
                        <div className="order_titleArea">
                            <p>배송 정보</p>
                            <p className="order_delivery_desc">
                                *정기 배송 휴무일: 샛별배송(
                            <span>휴무없음</span>
                            ), 택배 배송(
                            <span>일요일</span>
                            )
                        </p>
                        </div>
                        <table className="order_tbl order_tbl_delivery">
                            <tbody>
                                <tr className="order_addr">
                                    <th>주소</th>
                                    <td>
                                        {/* <DaumPostcode onComplete={handleAddress} /> */}
                                        {handleAddress()}
                                        <button onClick={handleShow}>새 배송지 추가</button>
                                        <input type="text" value={address1} onChange={(e) => setAddress1(e.target.value)} />
                                        <input type="text" value={address2} onChange={(e) => setAddress2(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>배송 구분</th>
                                    <td>샛별 배송 지역 중 아래 장소는 배송 불가 장소입니다. <br />
                                ▶ 배송 불가 장소 : 관공서/ 학교/ 병원/ 시장/ 공단 지역/ 산간 지역/ 백화점 등
                                </td>
                                </tr>
                                <tr>
                                    <th>수령인 이름*</th>
                                    <td><input type="text" value="휙휙휙"></input></td>
                                </tr>
                                <tr>
                                    <th>휴대폰*</th>
                                    <td>
                                        <input type="tel" value="000" />
                                        <span className="order_bar">
                                            <span></span>
                                        </span>
                                        <input type="tel" value="000" />
                                        <span className="order_bar">
                                            <span></span>
                                        </span>
                                        <input type="tel" value="000" />
                                    </td>
                                </tr>
                                <tr className="order_delivery_memo">
                                    <th>배송 요청사항*</th>
                                    <td>
                                        <textarea value="글자 수만큼 카운트 되어야 함 =>"></textarea>
                                        <div className="order_chk_bytes">0 / 50자</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* 결제 금액 창 */}
                    <div className="order_payview">
                        <div className="order_titleArea">
                            <p>결제금액</p>
                        </div>
                        <div className="order_payview_body">
                            <table className="order_tbl order_payview_table">
                                <tbody>
                                    <tr className="order_payview_first">
                                        <th>상품 금액</th>
                                        <td>24,900원</td>
                                    </tr>
                                    <tr className="order_payview_table_line">
                                        <th><hr className="order_payview_line" /></th>
                                        <td><hr className="order_payview_line" /></td>
                                    </tr>
                                    <tr>
                                        <th>상품할인금액</th>
                                        <td>0원</td>
                                    </tr>
                                    <tr>
                                        <th>배송비</th>
                                        <td>0원</td>
                                    </tr>
                                    <tr className="order_payment_emoney">
                                        <th>적립금사용</th>
                                        <td>0원</td>
                                    </tr>
                                    <tr className="order_payview_table_line">
                                        <th><hr className="order_payview_line" /></th>
                                        <td><hr className="order_payview_line" /></td>
                                    </tr>
                                    <tr className="order_payview_last">
                                        <th>최종결제금액</th>
                                        <td>0원</td>
                                    </tr>
                                    <tr className="order_payview_reverse">
                                        <td colSpan="2">구매 시 0원 (5%) 적립예정</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* 적립금 / 결제수단 */}
                    <div className="order_method">
                        <div className="order_titleArea">
                            <p>적립금 / 결제 수단</p>
                        </div>
                        <table className="payview order_tbl order_tbl_method">
                            <tbody>
                                <tr className="order_method_emoney">
                                    <th>적립금 적용</th>
                                    <td>
                                        <input type="text" />
                                        <span>원</span>
                                        <input type="checkbox" />
                                        <button>모두사용</button>
                                        <p>보유 적립금: 0원</p>
                                        <p>*적립금 내역: 마이컬리 > 적립금</p>
                                    </td>
                                </tr>
                                <tr className="order_pay_method">
                                    <th>결제 수단</th>
                                    <td>
                                        <input type="radio" checked /><span>신용카드</span>
                                        <div className="order_card_select">
                                            <select>
                                                <option selected disabled="disabled">카드를 선택해주세요</option>
                                                <option>신한</option>
                                                <option>국민</option>
                                                <option>하나</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="order_pay_info">
                                    <td colSpan="2">
                                        <p>※ 보안강화로 Internet Explorer 8 미만 사용 시 결제창이 뜨지 않을 수 있습니다.</p>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr className="order_method_nogoods">
                                    <th>미출고 시 조치방법*</th>
                                    <td>
                                        <input type="radio" name="refund" checked /><span>결제수단으로 환불</span>
                                        <input type="radio" name="delivery" /><span>상품 입고 시 배송</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* 개인정보 수집/제공 */}
                    <div className="order_agree">
                        <div className="order_titleArea">
                            <p>개인정보 수집 / 제공</p>
                        </div>
                        <table>
                            <tbody>
                                <tr className="order_pay_agree">
                                    <td>
                                        <div className="order_agree_chk">
                                            <div className="agree_ch">
                                                <label className="ch">
                                                    <input type="checkbox" id="join_check1"></input>
                                                    <span></span>결제 진행 필수 동의
                                                </label>
                                            </div>
                                            <ul>
                                                <li>개인정보 수집 · 이용 동의<span>(필수)</span> <a href="#" className="btn_essential">약관동의 ></a></li>
                                                <li>결제대행 서비스 약관 동의<span>(필수)</span> <a href="#" className="btn_essential">약관동의 ></a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* 결제완료 버튼 */}
                    <div className="order_btn_payment">
                        <button>결제하기</button>
                        <p>* 미성년자가 결제 시 법정대리인이 그 거래를 취소할 수 있습니다.</p>
                    </div>
                </form>
            </div>
        </div >
    )
}