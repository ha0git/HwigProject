import MyPageOrderDetail from './MyPageOrderDetail'
import React, { useState, useEffect } from 'react'
import vienna from '../images/product/vienna.png';
import queryString from 'query-string'
import axios from 'axios'
import { host } from '../Containers/ServerAddress'
import {connect} from 'react-redux'

export default function MyPageOrderD(props) {
    const [data, setData] = useState(null);
    const query = queryString.parse(props.location.search)
    const userInfoR = props.userInfo
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
            props.history.push(`/mypage/orderdetail?orderno=${num}`)
        }
        if (data === null && userInfoR.mem_id !== undefined) {
            getAxiosData(`api/members/${userInfoR.mem_id }/orders/${num}`)
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
const mapStateToProps = (state, ownProps) => {
    return {
        isLogged: state.reducer.isLogged,
        userInfo: state.reducer.userInfo
    }
}

MyPageOrderD = connect(mapStateToProps)(MyPageOrderD)