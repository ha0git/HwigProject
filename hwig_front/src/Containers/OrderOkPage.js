import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { host } from './ServerAddress'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import OrderOk from '../OrderComponents/OrderOk'

function OrderOkPage(props) {
    console.log(props.userInfo)
    const [orderComponentOn, setOrderComponentOn] = useState(0)
    const [orderInfo, setOrderInfo] = useState(null)
    const [isLogged, setIsLogged] = useState(true)
    const [mem_name, setMem_name] = useState(null)
    console.log(props.isLogged)
    const getAxiosData = (uri) => {
        axios.get(host + uri)
            .then(res => {
                console.log(res.data)
                setOrderInfo(res.data)
            })

    }
    //props.order_id
    const order_id = 2020042100009
    useEffect(() => {
        if (orderComponentOn === 0) {
            setOrderComponentOn(1);
            getAxiosData(`api/orders/${order_id}/summary`)
        }

        if (isLogged !== props.isLogged) {
            setIsLogged(props.isLogged)
        }

        if (!isLogged) {
            props.history.push("/login")
        }

        if (!orderInfo) {
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
    })
    return (
        <>
            {orderInfo && <OrderOk orderInfo={orderInfo} mem_name={props.userInfo.mem_name} />}
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLogged: state.reducer.isLogged,
        userInfo: state.reducer.userInfo
    }
}

OrderOkPage = withRouter(connect(mapStateToProps)(OrderOkPage))

export default OrderOkPage
