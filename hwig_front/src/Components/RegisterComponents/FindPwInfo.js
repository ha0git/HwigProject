import React,{useState} from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import './FindPwInfo.css'


export default function FindPwInfo(props) {
    const [getName, setName] = useState("")
    const [getId, setId] = useState("")
    const [getEmail, setEmail] = useState("")
    const [show, setShow] = useState(false)
    const mem_name = getName
    const mem_id = getId
    const mem_email = getEmail


    const handleSubmit = (e) => {
        console.log("실행")
        e.preventDefault();
        if(!getName || !getEmail || !getId)
            alert('아이디 또는 비밀번호를 입력하세요.')      
        else
          props.onSubmit({ mem_name, mem_id, mem_email });
    }

    return (
        <>
        <Container className="find-pw-container">
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                            <div className="find-pw-title">비밀번호 찾기</div>
                        <br/>
                            <div className="find-pw-input-box-title">이름</div>
                        <br/>
                            <Form.Control 
                                className="find-pw-input-box" 
                                size="lg" 
                                type="text" 
                                placeholder="고객님의 이름을 입력해주세요."
                                onChange={(e)=>setName(e.target.value)}
                                value={getName}
                            />
                        <br />
                            <div className="find-pw-input-box-title">아이디</div>
                        <br/>
                            <Form.Control 
                                className="find-pw-input-box" 
                                size="lg" 
                                type="text" 
                                placeholder="고객님의 아이디를 입력해주세요."
                                onChange={(e)=>setId(e.target.value)}
                                value={getId}
                            />
                        <br />
                            <div className="find-pw-input-box-title">이메일</div>
                        <br/>
                            <Form.Control 
                                className="find-pw-input-box" 
                                size="lg" 
                                type="email" 
                                placeholder="가입 시 등록하신 이메일 주소를 입력해주세요."
                                onChange={(e)=>setEmail(e.target.value)}
                                value={getEmail}
                            />
                        <br />
                            <Button className="find-pw-button" type="submit">찾기</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </>
    )
}
