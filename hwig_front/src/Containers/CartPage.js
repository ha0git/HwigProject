import Cart from '../ProductComponents/Cart'
import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import axios from 'axios'
import { host } from './ServerAddress'
import vienna from '../images/product/vienna.png';
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function CartPage(props) {
    const [prdList, setPrdList] = useState(null);
    const query = queryString.parse(props.location.search)
    const [page, setPage] = useState(1);
    const [list, setList] = useState(1)
    const [num, setNum] = useState(parseInt(query.goodsno));
    const [isLogged, setIsLogged] = useState(false);

    const getAxiosData = (uri) => {
        axios.get(host + uri)
            .then(res => {
                console.log(res.data)
                setPrdList(res.data)
            })
    }
    const sendJoinData1 = (uri, data) => {
        axios.post(host + uri, data)
            .then(res => {
                console.log(res.data)
            })
    }
    const sendJoinData2 = (uri, data) => {
        axios.post(host + uri, data)
            .then(res => {
                props.history.push('/order')
            })
    }
    const sendJoinData3 = (uri, data) => {
        axios.get(host + uri, data)
            .then(res => {
                console.log(res.data)
                props.history.push('/')
            })
    }
    const handleData1 = (data) => {
        console.log(data)
        sendJoinData1('api/cart/cartdelete', data)
    }
    const handleData2 = (data) => {
        console.log(data)
        sendJoinData2('api/cart/cartupdate', data)
    }
    const handleData3 = data => {
        console.log(data.mem_id)
        sendJoinData3(`api/cart/cartalldelete?mem_id=${props.userInfo.mem_id}`, data)
    }

    console.log(props.userInfo.mem_id)

    useEffect(() => {
        if (!prdList) {
            getAxiosData(`api/cart/cartlist?mem_id=${props.userInfo.mem_id}`)
            // setPrdList([
            //     {
            //         prd_id: 1,
            //         prd_thumb_img: vienna,
            //         prd_name: '고소한 비엔나 소세지고소한 비엔나 소세지',
            //         prd_comment: '들기름을 넣어 고소한 비엔나 소세지',
            //         prd_price: 1000,
            //         order_count: 1,
            //         prd_stock: 10
            //     },
            //     {
            //         prd_id: 2,
            //         prd_thumb_img: vienna,
            //         prd_name: '고소한 비엔나 소세지',
            //         prd_comment: '들기름을 넣어 고소한 비엔나 소세지',
            //         prd_price: 2000,
            //         order_count: 1,
            //         prd_stock: 0
            //     },
            //     {
            //         prd_id: 3,
            //         prd_thumb_img: vienna,
            //         prd_name: '고소한 비엔나 소세지',
            //         prd_comment: '들기름을 넣어 고소한 비엔나 소세지',
            //         prd_price: 3000,
            //         order_count: 1,
            //         prd_stock: 0
            //     },]
            // )
        }
    }, [prdList])
    return (
        <>
            {isLogged ? <Redirect to="/login" /> : prdList && <Cart
                prdList={prdList}
                userInfo={props.userInfo}
                onClick1={handleData1}
                onClick2={handleData3}
                onSubmit={handleData2}
                history={props.history}
            />}
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        userInfo: state.reducer.userInfo
    }
}
export default withRouter(connect(mapStateToProps)(CartPage))
