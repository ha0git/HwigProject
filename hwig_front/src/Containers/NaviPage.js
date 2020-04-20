import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import queryString from 'query-string'
import Navi from '../MainComponents/Navi'
import product1 from '../images/product1.png'
import axios from 'axios'
import { host } from './ServerAddress'

function NaviPage({ location, history }) {
    const [categoryList, setCategoryList] = useState(null)
    const query = queryString.parse(location.search);
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(9)

    // const getAxiosData = (uri) => {
    //     axios.get(host + uri)
    //         .then(res => {
    //             console.log(res.data)
    //             setCategoryList(res.data)
    //         })
    // }

    useEffect(() => {
        if (!categoryList) {
            //getAxiosData('api/product/category')
            setCategoryList({
                pcategory: [
                    {
                        category_p_id: 1,
                        category_id: null,
                        category_name: "채소 / 과일"
                    },
                    {
                        category_p_id: 2,
                        category_id: null,
                        category_name: "정육 / 가공육"
                    }
                ],
                category: [
                    {
                        category_p_id: 1,
                        category_id: 1,
                        category_name: "기본 채소"
                    },
                    {
                        category_p_id: 1,
                        category_id: 2,
                        category_name: "국산 과일"
                    },
                    {
                        category_p_id: 1,
                        category_id: 3,
                        category_name: "수입 과일"
                    },
                    {
                        category_p_id: 2,
                        category_id: 4,
                        category_name: "소고기"
                    },
                    {
                        category_p_id: 2,
                        category_id: 5,
                        category_name: "돼지 고기"
                    },
                    {
                        category_p_id: 2,
                        category_id: 6,
                        category_name: "가공육"
                    }
                ]
            })
        }
    })

    return (
        <>
            {categoryList && <Navi categoryList={categoryList} page={page} />}
        </>
    )
}

export default withRouter(NaviPage)
