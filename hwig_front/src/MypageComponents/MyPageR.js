import MyPageReviewList from './MyPageReviewList'
import React, { useState, useEffect }  from 'react'
import vienna from '../images/product/vienna.png';
import queryString from 'query-string'
import axios from 'axios'
import { host } from '../Containers/ServerAddress'
import {connect} from 'react-redux'

export default function MyPageR(props) {
    const [data1, setData1] = useState(null);
    const [data2, setData2] = useState(null);


    const getAxiosData1 = (uri) => {
        axios.get(host + uri)
            .then(res => {
                console.log(res.data)
                setData1(res.data)
            })
    }
    const getAxiosData2 = (uri) => {
        axios.get(host + uri)
            .then(res => {
                console.log(res.data)
                setData2(res.data)
            })
    }
    useEffect(() => {
        if (!data1) {
            //getAxiosData1(`api/members/${props.userInfo.mem_id}/prds`)
            setData1(
                [
                    {
                        order_paydate : "2020-05-11 10:22:22",
                        prd_name: "소고기",
                        order_count: 2,
                        prd_thumb : "dada",
                        prd_id : 2
                    }
                ]
            ) 
        } 
        if (!data2 && props.userInfo.mem_id !== undefined) {
            //getAxiosData2(`api/review/review_mem?mem_id=${props.userInfo.mem_id}`)
            setData2(
                [
                    {
                        review_id: 1,
                        review_subject: "후기제목이다",
                        review_content: "별론데요",
                        review_img: 1,
                        review_regdate: 1,
                        prd_name: "소세지",
                    },
                    {
                        review_id: 2,
                        review_subject: "후기제목",
                        review_content: "별론데요",
                        review_img: 2,
                        review_regdate: 2,
                        prd_name: "고기",
                    },
                ]
            )
        }
    }, [data1],[data2]
    )
    return (
        <>
            {data1,data2 && <MyPageReviewList data1={data1} data2={data2}/> }
        </>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        isLogged: state.reducer.isLogged,
        userInfo: state.reducer.userInfo
    }
}

MyPageR = connect(mapStateToProps)(MyPageR)