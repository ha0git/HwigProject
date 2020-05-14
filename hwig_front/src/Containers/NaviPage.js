import React, { useState, useEffect } from 'react'
import Navi from '../MainComponents/Navi'
import axios from 'axios'
import { host } from './ServerAddress'

function NaviPage() {
    const [categoryList, setCategoryList] = useState(null)
    const [page, setPage] = useState(1)

    const getAxiosData = (uri) => {
        axios.get(host + uri)
            .then(res => {
                console.log(res.data)
                setCategoryList(res.data)
            })
    }
    useEffect(() => {
        if (!categoryList) {
            getAxiosData('api/product/category')
            // setCategoryList({
            //     scategory: [
            //         {
            //             category_p_id: null,
            //             category_id: 33,
            //             category_name: '신상품'
            //         },
            //         {
            //             category_p_id: null,
            //             category_id: 44,
            //             category_name: '알뜰상품'
            //         },
            //         {
            //             category_p_id: null,
            //             category_id: 55,
            //             category_name: '베스트'
            //         }
            //     ],
            //     pcategory: [
            //         {
            //             category_p_id: null,
            //             category_id: 1,
            //             category_name: "채소 / 과일"
            //         },
            //         {
            //             category_p_id: null,
            //             category_id: 2,
            //             category_name: "정육 / 가공육"
            //         },
            //     ],
            //     category: [

            //         {
            //             category_p_id: 1,
            //             category_id: 100,
            //             category_name: "기본 채소"
            //         },
            //         {
            //             category_p_id: 1,
            //             category_id: 101,
            //             category_name: "국산 과일"
            //         },
            //         {
            //             category_p_id: 1,
            //             category_id: 102,
            //             category_name: "수입 과일"
            //         },
            //         {
            //             category_p_id: 2,
            //             category_id: 200,
            //             category_name: "소고기"
            //         },
            //         {
            //             category_p_id: 2,
            //             category_id: 201,
            //             category_name: "돼지 고기"
            //         },
            //         {
            //             category_p_id: 2,
            //             category_id: 202,
            //             category_name: "가공육"
            //         }
            //     ]

            // })
        }
    },)

    return (
        <>
            {categoryList && <Navi categoryList={categoryList} page={page} />}
        </>
    )
}

export default NaviPage
