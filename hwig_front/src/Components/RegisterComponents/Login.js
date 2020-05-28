import React,{useState} from 'react'
import {Container, Row, Col, Form, Button, Modal} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Login.css'

export default function Login(props) {
    const [mem_id, setId] = useState("")
    const [mem_pw, setPw] = useState("")

    const handleSubmit = (e) => {
        console.log("실행")
        e.preventDefault();
        if(!mem_id || !mem_pw){
        console.log("없음")
        alert('아이디 또는 비밀번호를 입력하세요.') 
        }else{
            console.log("성공")
          props.onSubmit({ mem_id, mem_pw });
        }
    }


    return (
        <>
        <Container className="login-container">
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                            <h1 className="login-title">로그인</h1>
                        <br/>
                            <Form.Control 
                                className="login-input-box" 
                                size="lg" 
                                type="text" 
                                placeholder="아이디를 입력해주세요."
                                onChange={(e)=>setId(e.target.value)}
                                value={mem_id}
                            />
                        <br />
                            <Form.Control 
                                className="login-input-box" 
                                size="lg" 
                                type="password" 
                                placeholder="비밀번호를 입력해주세요."
                                onChange={(e)=>setPw(e.target.value)}
                                value={mem_pw}
                            />
                        <div className="login-text-link-position">
                            <Link className="login-text-link" to="/find_id">아이디 찾기</Link> | <Link className="login-text-link" to="/find_pw">비밀번호 찾기</Link>
                        </div>
                            <Button className="login-button" type="submit">로그인</Button>
                        <br />
                            <Link to="/join">
                                <Button className="login-join-button">회원가입</Button>
                            </Link>
                    </Form>
                </Col>
            </Row>
        </Container>
    </>
    )
}
