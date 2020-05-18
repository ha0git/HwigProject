import MyPageOrderDetail from './MyPageOrderDetail'
import React, { useState, useEffect } from 'react'
import vienna from '../images/product/vienna.png';
import queryString from 'query-string'
import axios from 'axios'
import { host } from '../Containers/ServerAddress'

export default function MyPageOrderD({ location, history }) {
    const [data, setData] = useState(null);
    const query = queryString.parse(location.search)
    const [num, setNum] = useState(parseInt(query.orderno));
    const getAxiosData = (uri) => {
        axios.get(host + uri)
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
    }
    const sendData = (uri, data) => {
        axios.post(host+uri, data)
        .then(res=>{
            console.log(res.data)
            if (res.data.code === 200 ) {
                alert("장바구니에 추가 되었습니다.")
            }
        })
    }
    useEffect(() => {
        console.log(num)
        if (!query.orderno) {
            history.push(`/mypage/orderdetail?orderno=${num}`)
        }
        if (data === null) {
            getAxiosData(`api/members/tototo/orders/${num}`)
        }
    }
    )
    const cart = (data) => {
        console.log(data)
        sendData(`api/cart/cartinsert`, data)
    }
    return (
        <>
            {data && <MyPageOrderDetail data={data} cart={cart} />}
        </>
    )
}
