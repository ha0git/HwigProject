import MyPageReviewList from './MyPageReviewList'
import React, { useState, useEffect } from 'react'
import vienna from '../images/product/vienna.png';
import queryString from 'query-string'
import axios from 'axios'
import { host } from '../Containers/ServerAddress'

export default function MyPageR() {
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
            //getAxiosData1(`api/members/tototo/prds`)
            setData1(
                [
                    {
                        order_paydate: "2020-05-11 10:22:22",
                        prd_name: "소고기",
                        order_count: 2,
                        prd_thumb: "dada",
                        prd_id: 2
                    }
                ]
            )
            getAxiosData2(`api/review/review_mem?mem_id=test1`)
            // setData2(
            //     {
            //         data:[
            //             {
            //                 review_id: null,
            //                 review_subject: null,
            //                 review_content: null,
            //                 review_img: null,
            //                 review_regdate: null,
            //                 prd_name: null,
            //             },
            //         ]
            //     }
            // )
        }
    }, [data1], [data2]
    )
    return (
        <>
            {data1 && <MyPageReviewList data1={data1} />}
        </>
    )
}
