import React, { useState, useEffect } from 'react'
import Search from '../ProductComponents/Search'
import { Spinner } from 'react-bootstrap'
import queryString from 'query-string'
import product1 from '../images/product1.png'
import axios from 'axios'
import { host } from './ServerAddress'
import { withRouter } from 'react-router-dom'

function SearchPage(props) {
    console.log(props)
    const [productItems, setProductItems] = useState(null)
    const query = queryString.parse(props.location.search);
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(9)
    const [list, setList] = useState(1)

    const getAxiosData = (uri) => {
        axios.get(host + uri)
            .then(res => {
                console.log(res.data)
                setProductItems(res.data)
            })
    }

    useEffect(() => {
        if (!query.page) {
            props.history.push(`/shop/search?page=${page}`)
        }
        if ((parseInt(query.page) !== page)) {
            setPage(parseInt(query.page))
            //getAxiosData(`api/product/mainlist?category_id=${query.category_id}`)
        }

        if (!productItems) {
            //getAxiosData(`api/product/mainlist?category_id=${query.category_id}`)
            // setProductItems({
            //     product: [
            //         {
            //             prd_id: 1,
            //             prd_img: product1,
            //             prd_name: '고소한 비엔나 소세지',
            //             prd_kg: '225g',
            //             prd_price: '3,510원',
            //             prd_comment: '여기는 채소 / 과일 상품들'
            //         },
            //         {
            //             prd_id: 2,
            //             prd_img: product1,
            //             prd_name: '이유식 재료 친환경 양송이 버섯',
            //             prd_kg: '80g',
            //             prd_price: '2,950원',
            //             prd_comment: '여기는 채소 / 과일 상품들'
            //         },
            //         {
            //             prd_id: 3,
            //             prd_img: product1,
            //             prd_name: '이유식 재료 친환경 브로콜리',
            //             prd_kg: '225g',
            //             prd_price: '3,510원',
            //             prd_comment: '여기는 채소 / 과일 상품들'
            //         },
            //         {
            //             prd_id: 4,
            //             prd_img: product1,
            //             prd_name: '흙당근',
            //             prd_kg: '225g',
            //             prd_price: '3,510원',
            //             prd_comment: '여기는 채소 / 과일 상품들'
            //         },
            //         {
            //             prd_id: 5,
            //             prd_img: product1,
            //             prd_name: '칼집 군밤용 처음밤',
            //             prd_kg: '225g',
            //             prd_price: '3,510원',
            //             prd_comment: '여기는 채소 / 과일 상품들'
            //         },
            //         {
            //             prd_id: 6,
            //             prd_img: product1,
            //             prd_name: '영얌 무농약 꿀 고구마',
            //             prd_kg: '225g',
            //             prd_price: '3,510원',
            //             prd_comment: '여기는 채소 / 과일 상품들'
            //         },
            //         {
            //             prd_id: 7,
            //             prd_img: product1,
            //             prd_name: '새싹 모둠 채소',
            //             prd_kg: '225g',
            //             prd_price: '3,510원',
            //             prd_comment: '여기는 채소 / 과일 상품들'
            //         },
            //         {
            //             prd_id: 8,
            //             prd_img: product1,
            //             prd_name: '당귀잎',
            //             prd_kg: '225g',
            //             prd_price: '3,510원',
            //             prd_comment: '여기는 채소 / 과일 상품들'
            //         },
            //         {
            //             prd_id: 9,
            //             prd_img: product1,
            //             prd_name: '엿구마 바삭침',
            //             prd_kg: '225g',
            //             prd_price: '3,510원',
            //             prd_comment: '여기는 채소 / 과일 상품들'
            //         },
            //         {
            //             prd_id: 10,
            //             prd_img: product1,
            //             prd_name: '스위트 치즈 고구마',
            //             prd_kg: '225g',
            //             prd_price: '3,510원',
            //             prd_comment: '여기는 채소 / 과일 상품들'
            //         },
            //         {
            //             prd_id: 11,
            //             prd_img: product1,
            //             prd_name: '커팅 부추',
            //             prd_kg: '225g',
            //             prd_price: '3,510원',
            //             prd_comment: '여기는 채소 / 과일 상품들'
            //         },
            //         {
            //             prd_id: 12,
            //             prd_img: product1,
            //             prd_name: '고소한 비엔나 소세지',
            //             prd_kg: '225g',
            //             prd_price: '3,510원',
            //             prd_comment: '여기는 정육 / 가공육 상품들'
            //         },
            //         {
            //             prd_id: 13,
            //             prd_img: product1,
            //             prd_name: '이유식 재료 친환경 양송이 버섯',
            //             prd_kg: '80g',
            //             prd_price: '2,950원',
            //             prd_comment: '여기는 정육 / 가공육 상품들'
            //         },
            //         {
            //             prd_id: 14,
            //             prd_img: product1,
            //             prd_name: '이유식 재료 친환경 브로콜리',
            //             prd_kg: '225g',
            //             prd_price: '3,510원',
            //             prd_comment: '여기는 정육 / 가공육 상품들'
            //         },
            //         {
            //             prd_id: 15,
            //             prd_img: product1,
            //             prd_name: '흙당근',
            //             prd_kg: '225g',
            //             prd_price: '3,510원',
            //             prd_comment: '여기는 정육 / 가공육 상품들'
            //         },
            //         {
            //             prd_id: 16,
            //             prd_img: product1,
            //             prd_name: '칼집 군밤용 처음밤',
            //             prd_kg: '225g',
            //             prd_price: '3,510원',
            //             prd_comment: '여기는 정육 / 가공육 상품들'
            //         },
            //         {
            //             prd_id: 17,
            //             prd_img: product1,
            //             prd_name: '영얌 무농약 꿀 고구마',
            //             prd_kg: '225g',
            //             prd_price: '3,510원',
            //             prd_comment: '여기는 정육 / 가공육 상품들'
            //         },
            //         {
            //             prd_id: 18,
            //             prd_img: product1,
            //             prd_name: '새싹 모둠 채소',
            //             prd_kg: '225g',
            //             prd_price: '3,510원',
            //             prd_comment: '여기는 정육 / 가공육 상품들'
            //         },
            //         {
            //             prd_id: 19,
            //             prd_img: product1,
            //             prd_name: '당귀잎',
            //             prd_kg: '225g',
            //             prd_price: '3,510원',
            //             prd_comment: '여기는 정육 / 가공육 상품들'
            //         },
            //         {
            //             prd_id: 20,
            //             prd_img: product1,
            //             prd_name: '엿구마 바삭침',
            //             prd_kg: '225g',
            //             prd_price: '3,510원',
            //             prd_comment: '여기는 정육 / 가공육 상품들'
            //         },
            //         {
            //             prd_id: 21,
            //             prd_img: product1,
            //             prd_name: '스위트 치즈 고구마',
            //             prd_kg: '225g',
            //             prd_price: '3,510원',
            //             prd_comment: '여기는 정육 / 가공육 상품들'
            //         },
            //         {
            //             prd_id: 22,
            //             prd_img: product1,
            //             prd_name: '커팅 부추',
            //             prd_kg: '225g',
            //             prd_price: '3,510원',
            //             prd_comment: '여기는 정육 / 가공육 상품들'
            //         },

            //     ]

            // })
        }
    }
    )
    
    return (
        <>
            <Search size={size} search_list={productItems}/>
        </>
    )
}


export default withRouter(SearchPage)