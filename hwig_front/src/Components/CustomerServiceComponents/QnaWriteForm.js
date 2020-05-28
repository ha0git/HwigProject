import React, { useState } from 'react'
import './QnaWriteForm.css'

export default function QnaWriteFrom(props) {

    const [qna_category, setCategory] = useState("")
    const [qna_subject, setSubject] = useState("")
    const [order_id, setOrderNum] = useState("")
    const [mem_email, setEmail] = useState(props.userInfo.mem_email)
    const [mem_tel, setTel] = useState(props.userInfo.mem_tel)
    const [qna_content, setContent] = useState("")
    const [mem_id, setMem_id] = useState(props.userInfo.mem_id)
    console.log(order_id)

    const hadleSubmit = (e) => {
        console.log(qna_category, qna_subject, order_id, mem_email, mem_tel, qna_content)
        e.preventDefault();
        if (qna_category == "선택해주세요." || !qna_category) {
            alert("카테고리를 선택해 주세요.")
        } else if (!qna_subject) {
            alert("제목을 입력해주세요.")
        } else if (!qna_content) {
            alert("내용을 입력해주세요.")
            // props.onSubmit({ qna_category, qna_subject, order_id, mem_email, mem_tel, qna_content });
        }else{
            props.onSubmit({ qna_category, qna_subject, qna_content, mem_id})
        }
    }

    const checkOrderNum = () => {
        props.checkOrderNum(order_id)
    }
    const returnNum = () => {
        if (props.num) {
            return ("주문번호 "+props.num+"번 관련 문의입니다.")
        } else {
            return ("문의하실 내용을 입력하세요.")
        }
    }

    return (
        <>
            <div className="qna-writeform-container">
                <div>1:1문의</div>
                <form onSubmit={hadleSubmit}>
                    <table className="qna-writeform-table">
                        <tr>
                            <td>제목</td>
                            <td colSpan="2">
                                <div>
                                    <select onChange={(e) => { setCategory(e.target.options[e.target.selectedIndex].text) }}>
                                        <option>선택해주세요.</option>
                                        <option>주문/결제</option>
                                        <option>취소/교환/환불</option>
                                        <option>배송문의</option>
                                        <option>적립금</option>
                                        <option>서비스 이용 및 기타</option>
                                        <option>회원문의</option>
                                    </select>
                                </div>
                                <div>
                                    <input type="text" id="qna-writeform-subject" value={qna_subject} onChange={(e) => { setSubject(e.target.value) }} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>이메일</td>
                            <td colSpan="2"><input type="text" id="qna-writeform-email" value={props.userInfo.mem_email} readOnly /></td>
                        </tr>
                        <tr>
                            <td>문자메세지</td>
                            <td colSpan="2"><input type="text" id="qna-writeform-tel" value={props.userInfo.mem_tel} readOnly /></td>
                        </tr>
                        <tr>
                            <td>내용</td>
                            <td colSpan="2">
                                <br />
                                <p>1:1 문의 작성 전 확인해주세요!</p>
                                <br />
                                <p>현재 문의량이 많아 순차적으로 답변 중에 있으며, 평균 2~3일 정도 소요되는 점 양해 부탁드립니다. 빠르게 안정화될 수 있도록 노력하겠습니다.</p>
                                <br />
                                <p>반품 / 환불</p>
                                <p>- 제품 하자 혹은 이상으로 반품 (환불)이 필요한 경우 사진과 함께 구체적인 내용을 남겨주세요.</p>
                                <br />
                                <p>주문취소</p>
                                <p>- 배송 단계별로 주문취소 방법이 상이합니다.
                                <br />
                                    {" "}{" "}[입금확인] 단계 :  [마이휙 > 주문내역 상세페이지] 에서 직접 취소 가능
                                <br />
                                    {" "}{" "}[입금확인] 이후 단계 : 고객행복센터로 문의
                                </p>
                                <br />
                                <p>- 생산이 시작된 [상품 준비중] 이후에는 취소가 제한되는 점 고객님의 양해 부탁드립니다.</p>
                                <p>- 비회원은 모바일 App 또는 모바일 웹사이트에서 [마이컬리 > 비회원 주문 조회 페이지] 에서 취소가 가능합니다.</p>
                                <p>- 일부 예약상품은 배송 3~4일 전에만 취소 가능합니다.</p>
                                <p>- 주문상품의 부분 취소는 불가능합니다. 전체 주문 취소 후 재구매 해주세요.</p>
                                <br />
                                <p>배송</p>
                                <p>- 배송일 및 배송시간 지정은 불가능합니다. (예약배송 포함)</p>
                                <p>※ 전화번호, 이메일, 주소, 계좌번호 등의 상세 개인정보가 문의 내용에 저장되지 않도록 주의해 주시기 바랍니다.</p>
                                <br />
                                <div>
                                    <textarea cols="105" rows="27" defaultValue={returnNum()} onChange={(e) => { setContent(e.target.value) }} />
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div>
                        <button type="submit">보내기</button>
                    </div>
                </form>
            </div>
        </>
    )
}
