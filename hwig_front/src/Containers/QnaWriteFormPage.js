import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { host } from './ServerAddress'
import QnaWriteForm from '../CustomerServiceComponents/QnaWriteForm'

export default function QnaWriteFormPage() {
    const [returnOrderNum, setReturnOrderNum] = useState(null)
    const [orderNumCheck, setOrderNumCheck] = useState(null)
    const [sendData, setSendData] = useState(null)

    const postAxiosData = (uri, data) => {
        axios.post(host + uri, { data: data })
            .then((res) => {
                console.log(res.data)
            })
    }

    useEffect(() => {
        if (!returnOrderNum) {
            setReturnOrderNum(1)
        }
    })

    const handleData = (data) => {
        console.log(data)
        postAxiosData('/qna', data)
    }

    const checkOrderNum = (orderNum) => {
        if (orderNum === returnOrderNum) {
            alert('확인되었습니다.')
        } else {
            alert('없는 주문 번호 입니다.')
        }
    }

    return (
        <>
            <QnaWriteForm onSubmit={handleData} orderNumCheck={orderNumCheck} checkOrderNum={checkOrderNum} />
        </>
    )
}
