import React from 'react'
import {Col, Row, Table, Form, Button} from 'react-bootstrap'
import './Cart.css'

export default function Cart() {
    return (
        <>
            <div className="cart-container">
                    <Row>
                        <Col>
                                <div className="cart-title">장바구니</div>
                                <div>주문하실 상품명 및 수량을 정확하게 확인해 주세요.</div>
                            <br/>
                            <Form>
                                
                                <Table className="cart-table-container">
                                    <thead>
                                        <tr>
                                            <th className="cart-table-column-check">
                                            <Form.Check className="cart-table-column-checkbox" type="checkbox" /></th>
                                            <th className="cart-table-column-img">전체선택</th>
                                            <th className="cart-table-column-detail">상품 정보</th>
                                            <th className="cart-table-column-count">수량</th>
                                            <th className="cart-table-column-price">상품금액</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="cart-table-item-none" colspan="5"><br/><br/>장바구니에 담긴 상품이 없습니다.<br/><br/><br/></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        {/* <tr>
                                        <td>2</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        </tr>
                                        <tr>
                                        <td>3</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        </tr> */}
                                    </tbody>
                                </Table>
                                <div className="cart-button">
                                <Button className="cart-delete-button">선택 삭제</Button>
                                <Button className="cart-delete-button">품절 상품 삭제</Button>
                                </div>

                                <div className="cart-calculate">
                                    <div className="cart-calculate-title">상품금액</div>
                                    <div className="cart-calculate-price" id="">0 원</div>
                                </div>
                                <div className="cart-calculate-block">-</div>
                                <div className="cart-calculate">
                                    <div className="cart-calculate-title">상품할인금액</div>
                                    <div className="cart-calculate-price" id="">0 원</div>
                                </div>
                                <div className="cart-calculate-block">+</div>
                                <div className="cart-calculate">
                                    <div className="cart-calculate-title">배송비</div>
                                    <div className="cart-calculate-price" id="">0 원</div>
                                </div>
                                <div className="cart-calculate-block">=</div>
                                <div className="cart-calculate-result">
                                    <div className="cart-calculate-title">결제예정금액</div>
                                    <div className="cart-calculate-price" id="cart-calculate-price">0 원</div>
                                </div>
                                <div>
                                    <Button className="cart-submit" type="submit">주문하기</Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
            </div>
        </>
    )
}
