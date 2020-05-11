import MyPageOrderList from './MyPageOrderList'
import React, { useState, useEffect }  from 'react'
import vienna from '../images/product/vienna.png';
import queryString from 'query-string'
import axios from 'axios'
import { host } from '../Containers/ServerAddress'

export default function MyPageOrderL({location, history}) {
    const [data, setData] = useState(null);
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(2)
    const query = queryString.parse(location.search);
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
        if (!data) {
            getAxiosData(`api/members/tototo/orders`)
        }
        if (!query.page) {
            history.push(`/mypage/order?page=${page}`)
        }
        if ((parseInt(query.page) !== page)) {
            setPage(parseInt(query.page))
        }
    }, [data]
    )
    return (
        <>
            {data && <MyPageOrderList data={data} page={page} history={history} size={size} confirmD={confirmD}/> }
        </>
    )
}
