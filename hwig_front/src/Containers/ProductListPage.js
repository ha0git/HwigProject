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
        if (!query.page) {
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
                        category_id: 1,
                        category_name: "전체 보기"
                    },
                    {
                        category_id: 2,
                        category_name: "기본 채소"
                    },
                    {
                        category_id: 3,
                        category_name: "국산 과일"
                    },
                    {
                        category_id: 4,
                        category_name: "수입 과일"
                    }
                ],
                product: [
                    {
                        prd_id: 1,
                        prd_img: product1,
                        prd_name: '고소한 비엔나 소세지',
                        prd_kg: '225g',
                        prd_price: '3,510원',
                        prd_comment: '맛없어 사지마 먹지마'
                    },
                    {
                        prd_id: 2,
                        prd_img: product1,
                        prd_name: '이유식 재료 친환경 양송이 버섯',
                        prd_kg: '80g',
                        prd_price: '2,950원',
                        prd_comment: '맛없어 사지마 먹지마'
                    },
                    {
                        prd_id: 3,
                        prd_img: product1,
                        prd_name: '이유식 재료 친환경 브로콜리',
                        prd_kg: '225g',
                        prd_price: '3,510원',
                        prd_comment: '맛없어 사지마 먹지마'
                    },
                    {
                        prd_id: 4,
                        prd_img: product1,
                        prd_name: '흙당근',
                        prd_kg: '225g',
                        prd_price: '3,510원',
                        prd_comment: '맛없어 사지마 먹지마'
                    },
                    {
                        prd_id: 5,
                        prd_img: product1,
                        prd_name: '칼집 군밤용 처음밤',
                        prd_kg: '225g',
                        prd_price: '3,510원',
                        prd_comment: '맛없어 사지마 먹지마'
                    },
                    {
                        prd_id: 6,
                        prd_img: product1,
                        prd_name: '영얌 무농약 꿀 고구마',
                        prd_kg: '225g',
                        prd_price: '3,510원',
                        prd_comment: '맛없어 사지마 먹지마'
                    },
                    {
                        prd_id: 7,
                        prd_img: product1,
                        prd_name: '새싹 모둠 채소',
                        prd_kg: '225g',
                        prd_price: '3,510원',
                        prd_comment: '맛없어 사지마 먹지마'
                    },
                    {
                        prd_id: 8,
                        prd_img: product1,
                        prd_name: '당귀잎',
                        prd_kg: '225g',
                        prd_price: '3,510원',
                        prd_comment: '맛없어 사지마 먹지마'
                    },
                    {
                        prd_id: 9,
                        prd_img: product1,
                        prd_name: '엿구마 바삭침',
                        prd_kg: '225g',
                        prd_price: '3,510원',
                        prd_comment: '맛없어 사지마 먹지마'
                    },
                    {
                        prd_id: 10,
                        prd_img: product1,
                        prd_name: '스위트 치즈 고구마',
                        prd_kg: '225g',
                        prd_price: '3,510원',
                        prd_comment: '맛없어 사지마 먹지마'
                    },
                    {
                        prd_id: 11,
                        prd_img: product1,
                        prd_name: '커팅 부추',
                        prd_kg: '225g',
                        prd_price: '3,510원',
                        prd_comment: '맛없어 사지마 먹지마'
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
