import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Order from '../OrderComponents/Order'
import { Redirect, withRouter } from 'react-router-dom';
import vienna from '../images/product/vienna.png'
import { connect } from 'react-redux';
import { host } from './ServerAddress';
import queryString from 'query-string'


function OrderPage(props) {
    const [isLogged, setIsLogged] = useState(false);
    const [prdList, setPrdList] = useState(null)
    const query = queryString.parse(props.location.search)

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
                localStorage.setItem('order_id', res.data.order_id)
                console.log(localStorage)
                { res.data.order_id && props.history.push('/order/orderOk') }
            })
    }
    const handleData = (data) => {
        console.log(data)
        sendJoinData('api/orders/', data)
    }

    useEffect(() => {
        if (!prdList) {
            getAxiosData(`api/cart/cartlist?mem_id=${props.userInfo.mem_id}`)
            // setPrdList([
            //     {
            //         prd_id: 1,
            //         prd_thumb: vienna,
            //         prd_name: "비엔나",
            //         prd_ea: '1개',
            //         prd_price: 300,
            //         prd_sales: 0.1,
            //         order_count: 3,

            //     },
            //     {
            //         prd_id: 2,
            //         prd_thumb: vienna,
            //         prd_name: "브로콜리",
            //         prd_ea: '1개',
            //         prd_price: 2000,
            //         prd_sales: 0.3,
            //         order_count: 1
            //     },
            //     {
            //         prd_id: 3,
            //         prd_thumb: vienna,
            //         prd_name: "아보카도",
            //         prd_ea: '1개',
            //         prd_price: 1000,
            //         prd_sales: 0.5,
            //         order_count: 1
            //     }
            // ])
        }
    }, [prdList])

    return (
        <div>
            {isLogged ? <Redirect to="/login" /> : prdList && <Order
                prdList={prdList}
                userInfo={props.userInfo}
                onSubmit={handleData}
                history={props.history}
            />}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.reducer.userInfo
    }
}

export default withRouter(connect(mapStateToProps)(OrderPage))