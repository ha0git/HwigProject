import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { host } from './ServerAddress'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import OrderOk from '../OrderComponents/OrderOk'

function OrderOkPage(props) {
    console.log(props.userInfo)
    const [orderInfo, setOrderInfo] = useState(null)
    const [isLogged, setIsLogged] = useState(false)
    console.log(props.isLogged)

    const getAxiosData = (uri) => {
        axios.get(host + uri)
            .then(res => {
                console.log(res.data)
                setOrderInfo(res.data)
            })
    }

    useEffect(() => {
        if (!orderInfo) {
            getAxiosData(`api/orders/${localStorage.getItem('order_id')}/summary`)
            // setOrderInfo(
            //     {
            //         order_id: "2020042100009",
            //         order_paydate: "2019-04-19 08:33:33",
            //         prd_name: "[everyday] 오징어채 볶음",
            //         order_count: 6,
            //         order_receiver_addr: "고양시 일산동구",
            //         order_payway: "국민카드",
            //         order_paymoney: 29700
            //     }
            // )
        }
    }, [orderInfo])
    return (
        <>
            {isLogged ? <Redirect to="/login" /> : orderInfo && <OrderOk
                orderInfo={orderInfo}
                mem_name={props.userInfo.mem_name} />}
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        userInfo: state.reducer.userInfo
    }
}

export default OrderOkPage = withRouter(connect(mapStateToProps)(OrderOkPage))