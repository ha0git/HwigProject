import MyPageOrderList from '../MypageComponents/MyPageOrderList'
import React, { useState, useEffect }  from 'react'
import vienna from '../images/product/vienna.png';
import queryString from 'query-string'
import axios from 'axios'
import { host } from './ServerAddress'
import {connect} from 'react-redux'

export default function MyPageOrderL(props) {
    const [data, setData] = useState(null);
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(2)
    const userInfoR = props.userInfo
    const query = queryString.parse(props.location.search);
    const confirmD = (data,order_id) => {
        console.log(data)
        sendData(`api/orders/${order_id}`, data)
    }
    const sendData = (uri, data) => {
        axios.put(host+uri, data)
        .then(res=>{
            console.log(res.data)
            if (res.data.code === 200 ) {
                alert("구매 확정되었습니다.")
                window.location.reload()
            }
    })}
    const getAxiosData = (uri) => {
        axios.get(host + uri)
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
    }
    useEffect(() => {
        if (!data && userInfoR.mem_id !== undefined) {
            getAxiosData(`api/members/${userInfoR.mem_id}/orders`)
            // setData(
            //     {
            //         data: [
            //             {
            //                 order_paydate : 1,
            //                 order_id : 1,
            //                 prd_name : 1,
            //                 prd_thumb : 1,
            //                 order_paymoney : 1,
            //                 order_status : 1,
            //             }
            //         ]
            //     }
            // )
        }
        if (!query.page) {
            props.history.push(`/mypage/order?page=${page}`)
        }
        if ((parseInt(query.page) !== page)) {
            setPage(parseInt(query.page))
        }
    }, [data]
    )
    return (
        <>
            {data && <MyPageOrderList data={data} page={page} history={props.history} size={size} confirmD={confirmD}/> }
        </>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        isLogged: state.reducer.isLogged,
        userInfo: state.reducer.userInfo
    }
}

MyPageOrderL = connect(mapStateToProps)(MyPageOrderL)