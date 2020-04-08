import React, { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import queryString from 'query-string'
import ProductList from '../ProductComponents/ProductList'
import product1 from '../images/product1.png'

export default function ProductListPage({ history, location }) {
    const [productItems, setProductItems] = useState(null)

    const query = queryString.parse(location.search);
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(9)

    useEffect(() => {
        if (query.page === undefined) {
            history.push(`/shop?page=${page}`)
        }
        if (query.page !== page) {
            setPage(parseInt(query.page));
            console.log(page)
        }
        if (productItems === null) {
            setProductItems({
                category: [
                    {
                        category_id: 0,
                        category_name: "전체 보기"
                    },
                    {
                        category_id: 1,
                        category_name: "기본 채소"
                    },
                    {
                        category_id: 2,
                        category_name: "국산 과일"
                    },
                    {
                        category_id: 3,
                        category_name: "수입 과일"
                    }
                ],
                product: [
                    {
                        id: 0,
                        prd_img: product1,
                        prd_name: '무농약 통셀러리 500g',
                        prd_price: '3,510원',
                        prd_comment: '셀러리 맛없어 사지마 먹지마'
                    },
                    {
                        id: 1,
                        prd_img: product1,
                        prd_name: '냉동 바밤 단호박 250g',
                        prd_price: '2,950원',
                        prd_comment: '손질없이 즐기는 간편 단호박'
                    },
                    {
                        id: 2,
                        prd_img: product1,
                        prd_name: '무농약 통셀러리 500g',
                        prd_price: '3,510원',
                        prd_comment: '셀러리 맛없어 사지마 먹지마'
                    },
                    {
                        id: 3,
                        prd_img: product1,
                        prd_name: '무농약 통셀러리 500g',
                        prd_price: '3,510원',
                        prd_comment: '셀러리 맛없어 사지마 먹지마'
                    },
                    {
                        id: 4,
                        prd_img: product1,
                        prd_name: '무농약 통셀러리 500g',
                        prd_price: '3,510원',
                        prd_comment: '셀러리 맛없어 사지마 먹지마'
                    },
                    {
                        id: 5,
                        prd_img: product1,
                        prd_name: '무농약 통셀러리 500g',
                        prd_price: '3,510원',
                        prd_comment: '셀러리 맛없어 사지마 먹지마'
                    },
                    {
                        id: 6,
                        prd_img: product1,
                        prd_name: '무농약 통셀러리 500g',
                        prd_price: '3,510원',
                        prd_comment: '셀러리 맛없어 사지마 먹지마'
                    },
                    {
                        id: 7,
                        prd_img: product1,
                        prd_name: '무농약 통셀러리 500g',
                        prd_price: '3,510원',
                        prd_comment: '셀러리 맛없어 사지마 먹지마'
                    },
                    {
                        id: 8,
                        prd_img: product1,
                        prd_name: '무농약 통셀러리 500g',
                        prd_price: '3,510원',
                        prd_comment: '셀러리 맛없어 사지마 먹지마'
                    },
                    {
                        id: 9,
                        prd_img: product1,
                        prd_name: '무농약 통셀러리 500g',
                        prd_price: '3,510원',
                        prd_comment: '셀러리 맛없어 사지마 먹지마'
                    },
                    {
                        id: 10,
                        prd_img: product1,
                        prd_name: '무농약 통셀러리 500g',
                        prd_price: '3,510원',
                        prd_comment: '셀러리 맛없어 사지마 먹지마'
                    },
                ]

            })
        }
    })
    return (
        <>
            {productItems && <ProductList productItems={productItems} page={page} size={size} history={history} />}
        </>
    )
}
