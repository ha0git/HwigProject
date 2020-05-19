import MyPageReviewList from './MyPageReviewList'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { host } from '../Containers/ServerAddress'
import {connect} from 'react-redux'


export default function MyPageR(props) {
    const [data1, setData1] = useState(null);
    const [data2, setData2] = useState(null);
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(2)
    const userInfoR = props.userInfo

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
        console.log(userInfoR)
        if (!data1 && userInfoR.mem_id !== undefined) {
            getAxiosData1(`api/members/${userInfoR.mem_id }/prds`)
            // setData1(
            //     [
            //         {
            //             order_paydate: "2020-05-11 10:22:22",
            //             prd_name: "소고기",
            //             order_count: 2,
            //             prd_thumb: "dada",
            //             prd_id: 2
            //         },
            //         {
            //             order_paydate: "2020-05-11 10:22:22",
            //             prd_name: "소고기",
            //             order_count: 2,
            //             prd_thumb: "dada",
            //             prd_id: 2
            //         }
            //     ]
            // ) 
        } 
        if (!data2 && userInfoR.mem_id !== undefined) {
            getAxiosData2(`api/review/review_mem?mem_id=${userInfoR.mem_id }`)
            // setData2(
            //     [
                    
            //     ]
            // )
        }
    }, [data1], [data2]
    )
    return (
        <>
            {data1,data2 && 
                <MyPageReviewList 
                data1={data1} 
                data2={data2} 
                history={props.history} 
                size={size}
                page={page}
                /> 
            }
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