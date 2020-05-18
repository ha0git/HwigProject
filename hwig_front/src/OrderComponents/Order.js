import React, { useState, useEffect } from 'react'
import jQuery from "jquery";
import './Order.css'
import { Modal } from 'react-bootstrap'
import DaumPostcode from 'react-daum-postcode'
import ImageMapper from 'react-image-mapper';

export default function Order(props) {
    const [show, setShow] = useState(false);
    const [order_receiver_addr, setOrder_receiver_addr] = useState("")
    const [getaddress1, setGetAddress1] = useState("")
    const [getaddress2, setGetAddress2] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [order_receiver, setOrder_receiver] = useState("")
    const [order_receiver_tel, setOrder_receiver_tel] = useState("")
    const [order_request, setOrder_request] = useState("")
    const [order_checked, setOrder_checked] = useState(false)
    const [order_reverse, setOrder_reverse] = useState(0)
    const [order_initPay, setOrder_initPay] = useState(0)
    const [order_used_reverse, setOrder_used_reverse] = useState(0)
    const [order_payway, setOrder_payway] = useState("")
    const [order_paymoney, setOrder_paymoney] = useState(0)
    const [order_salePay, setOrder_salePay] = useState(0)
    const [isNewAddr, setIsNewAddr] = useState(false)
    const [isPhoneNumberValid, setisPhoneNumberValid] = useState(false)
    const [order_prd_ids, setOrder_prd_ids] = useState(new Array())
    const [order_counts, setOrder_counts] = useState(new Array())

    //주문자 정보
    const mem_id = props.userInfo.mem_id
    const mem_reverse = props.userInfo.mem_reverse
    const mem_tel = props.userInfo.mem_tel
    const mem_email = props.userInfo.mem_email
    const order_sender = props.userInfo.mem_name

    // 상품정보

    const goodsInfo = props.prdList;
    console.log(goodsInfo)


    //상품정보 mapping
    const odItems = goodsInfo.map(odgoods => {
        return (
            <tr key={odgoods.prd_id}>
                <td className="order_thumb">
                    <ImageMapper src={odgoods.prd_thumb} />
                </td>
                <td className="order_goodsInfo">
                    <div>{odgoods.prd_name}&nbsp;{odgoods.prd_ea}</div>
                    <div>{odgoods.order_count}개 / 개 당 {odgoods.prd_price}원</div>
                </td>
                <td>
                    {odgoods.order_count * odgoods.prd_price}원
            </td>
            </tr>
        )
    })

    //배송 정보

    // 주소 검색 API
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
    //다음 주소 검색 
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
        setGetAddress1(fullAddress)
        setZipcode(data.zonecode)
        setIsNewAddr(true)
        if (setGetAddress1) {
            handleClose()
        }
    }

    //휴대폰 번호 정규표현식
    const validatePhoneNumber = phoneNumberInput => {
        const phoneNumberRegExp = /^\d{3}-\d{3,4}-\d{4}$/;
        if (phoneNumberInput.match(phoneNumberRegExp)) {
            setisPhoneNumberValid(true)
            setOrder_receiver_tel(phoneNumberInput)

        } else {
            setisPhoneNumberValid(false)
            setOrder_receiver_tel(phoneNumberInput)
        }
    }

    //적립금 / 결제수단
    const handleOnChange = (e) => {
        setOrder_used_reverse(parseInt(e.target.value))
        const re = /^[0-9\b]+$/;

        if (!e.target.value) {
            setOrder_used_reverse(0)
        }
        if (re.test(e.target.value)) {
            setOrder_used_reverse(e.target.value)
        }
        if (e.target.value > mem_reverse) {
            alert('보유 적립금보다 큰 금액 입니다.')
            setOrder_used_reverse(0);
        }
    }

    useEffect(() => {
        //결제금액창
        let sales = 0
        let initPay = 0
        let pay = 0

        for (let i = 0; i < goodsInfo.length; i++) {
            //상품 금액 (할인 전 금액)
            initPay += (goodsInfo[i].prd_price * goodsInfo[i].order_count)
            //상품 할인 금액
            sales += (goodsInfo[i].prd_price * goodsInfo[i].prd_sale)
        }
        pay = order_initPay - order_salePay + delivery_charge - order_used_reverse

        setOrder_salePay(sales)
        setOrder_initPay(initPay)
        setOrder_paymoney(pay)
        setOrder_reverse(order_paymoney * 0.05)
        console.log(order_paymoney)

        //상품id 배열 선언
        let item = ""
        let count = ""
        // let order_prd_ids = new Array();
        // let order_counts = new Array();

        for (let i = 0; i < goodsInfo.length; i++) {
            item = goodsInfo[i].prd_id
            order_prd_ids[i] = item

            count = goodsInfo[i].order_count
            order_counts[i] = count
        }
        console.log(order_prd_ids)
        console.log(order_counts)

    }, [order_salePay,
        order_initPay,
        order_paymoney,
        order_reverse,
        order_used_reverse,
        order_prd_ids,
        order_counts])

    //배송비
    let delivery_charge = 0;

    if ((order_initPay - order_salePay) >= 25000) {
        delivery_charge = 0
    } else if ((order_initPay - order_salePay) < 25000) {
        delivery_charge = 3000
    }

    //결제하기 버튼
    const handleSubmit = (e) => {

        const sumAddress = zipcode + getaddress1 + " " + getaddress2 + " ";
        setOrder_receiver_addr(sumAddress);
        console.log(zipcode)
        console.log(order_receiver_addr)

        if (!order_receiver) {
            alert('수령인을 입력해주세요.')
        } else if (!order_receiver_tel) {
            alert('휴대폰 번호를 입력해주세요.')
        } else if (!isPhoneNumberValid) {
            alert('휴대폰 번호를 양식에 맞게 입력해주세요.')
        } else if (!order_checked) {
            alert('결제 진행에 동의해주세요.')
        }
        e.preventDefault();

        props.onSubmit({
            mem_id,
            order_reverse,
            order_used_reverse,
            order_paymoney,
            order_request,
            order_prd_ids,
            order_counts,
            order_sender,
            order_receiver,
            order_receiver_tel,
            isNewAddr,
            order_receiver_addr,
            order_payway
        })
    }
    return (
        <div className="order">
            <div className="order_content">
                <div className="order_header">
                    <h2>주문서</h2>
                    <p>주문하실 상품명 및 수량을 정확하게 확인해 주세요.</p>
                </div>
                <form onSubmit={handleSubmit}>
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
                                {odItems}
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
                                    <td>{order_sender}</td>
                                </tr>
                                <tr>
                                    <th>휴대폰*</th>
                                    <td>{mem_tel}</td>
                                </tr>
                                <tr>
                                    <th>이메일*</th>
                                    <td>
                                        {mem_email}
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
                                *정기 배송 휴무일: 택배 배송(
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
                                        <input type="button" id="join_address" onClick={handleShow} value="새 배송지 추가" />
                                        {getaddress1 &&
                                            < form >
                                                <input
                                                    className="input-box"
                                                    type="text"
                                                    onChange={e => setGetAddress1(e.target.value)}
                                                    value={getaddress1}
                                                    readOnly />
                                                <input
                                                    className="input-box"
                                                    type="text"
                                                    value={getaddress2}
                                                    onChange={e => {
                                                        setGetAddress2(e.target.value)
                                                        setOrder_receiver_addr("(" + zipcode + ")" + " " + getaddress1 + " " + getaddress2)
                                                    }
                                                    }
                                                    placeholder="나머지 주소를 작성해주세요." />
                                            </form>}
                                    </td>
                                </tr>
                                <tr className="order_delivery_name">
                                    <th>수령인 이름*</th>
                                    <td>
                                        <input
                                            type="text"
                                            placeholder="홍길동"
                                            value={order_receiver}
                                            onChange={(e) => setOrder_receiver(e.target.value)} />
                                    </td>
                                </tr>
                                <tr className="order_delivery_tel">
                                    <th>휴대폰*</th>
                                    <td>
                                        <input type="text"
                                            placeholder="010-1234-1234"
                                            onChange={e => validatePhoneNumber(e.target.value)}
                                            required></input>
                                    </td>
                                </tr>
                                <tr className="order_delivery_memo">
                                    <th>배송 요청사항</th>
                                    <td className="order_remaining">
                                        <textarea
                                            placeholder="문 앞에 놓아주세요."
                                            value={order_request}
                                            onChange={(e) => setOrder_request(e.target.value)} />
                                        <div className="order_chk_bytes"><span class="textcount">0</span> / 50자</div>
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
                        <div className="order_titleArea action_start">
                            <p>결제금액</p>
                        </div>
                        <div className="order_payview_body">
                            <table className="order_tbl order_payview_table">
                                <tbody>
                                    <tr className="order_payview_first">
                                        <th>상품 금액</th>
                                        <td>{order_initPay}원</td>
                                    </tr>
                                    <tr className="order_payview_table_line">
                                        <th><hr className="order_payview_line" /></th>
                                        <td><hr className="order_payview_line" /></td>
                                    </tr>
                                    <tr>
                                        <th>상품할인금액</th>
                                        <td>{order_salePay}원</td>
                                    </tr>
                                    <tr>
                                        <th>배송비</th>
                                        <td>{delivery_charge}원</td>
                                    </tr>
                                    <tr className="order_payment_emoney">
                                        <th>적립금사용</th>
                                        <td>{order_used_reverse}원</td>
                                    </tr>
                                    <tr className="order_payview_table_line">
                                        <th><hr className="order_payview_line" /></th>
                                        <td><hr className="order_payview_line" /></td>
                                    </tr>
                                    <tr className="order_payview_last">
                                        <th>최종결제금액</th>
                                        <td>{order_paymoney}원</td>
                                    </tr>
                                    <tr className="order_payview_reverse">
                                        <td colSpan="2">구매 시 {order_reverse}원 (5%) 적립예정</td>
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
                                        <input type="text" id="wr_2" onChange={handleOnChange} />
                                        <span>원</span>
                                        <button type="button" onClick={() => setOrder_used_reverse(mem_reverse)}>모두 사용</button>
                                        <p>보유 적립금: {mem_reverse}원</p>
                                        <p>*적립금 내역: 마이컬리 > 적립금</p>
                                    </td>
                                </tr>
                                <tr className="order_pay_method">
                                    <th>결제 수단</th>
                                    <td>
                                        <input type="radio" checked /><span>신용카드</span>
                                        <div className="order_card_select" >
                                            <select onChange={e => setOrder_payway(e.target.value)}>
                                                <option selected disabled="disabled">카드를 선택해주세요</option>
                                                <option>신한</option>
                                                <option>국민</option>
                                                <option>우리</option>
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
                                <tr className="order_method_nogoods action_end">
                                    <th>미출고 시 조치방법*</th>
                                    <td>
                                        <input type="radio" name="refund" checked /><span>결제수단으로 환불</span>
                                        <input type="radio" name="refund" /><span>상품 입고 시 배송</span>
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
                                                    <input type="checkbox" id="join_check1" onChange={e => setOrder_checked(e.target.checked)}></input>
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
                        <button type="submit">결제하기</button>
                        <p>* 미성년자가 결제 시 법정대리인이 그 거래를 취소할 수 있습니다.</p>
                    </div>
                </form>
            </div>
        </div >
    )
}