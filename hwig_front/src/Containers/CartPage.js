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
    const [isLogged, setIsLogged] = useState(false);
    const query = queryString.parse(props.location.search)
    const [page, setPage] = useState(1);
    const [list, setList] = useState(1)
    const [num, setNum] = useState(parseInt(query.goodsno));

    const getAxiosData = (uri) => {
        axios.get(host + uri)
            .then(res => {
                console.log(res.data)
                setPrdList(res.data)
            })
    }

    const sendJoinData = (uri, data) => {
        axios.post(host + uri, data)
            .then(res => {
                console.log(res.data)
                props.history.push('/order?orderPage')
            })
    }
    const handleData = (data) => {
        console.log(data)
        sendJoinData('api/cartdelete', data)
    }


    useEffect(() => {
        if (!prdList) {
            //getAxiosData(`api/cartlist`)
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
            //     },
            // ]
            // )
        }
    }, [])
    return (
        <>
            {isLogged ? prdList && <Cart
                prdList={prdList}
                userInfo={props.userInfo}
                onSubmit={handleData}
                history={props.history}
            />: <Redirect to="/login" />}
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        userInfo: state.reducer.userInfo
    }
}
export default withRouter(connect(mapStateToProps)(CartPage))
