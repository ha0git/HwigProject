import Cart from '../ProductComponents/Cart'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import vienna from '../images/product/vienna.png';

export default function CartPage() {
    const [prdList, setPrdList] = useState(null);


    useEffect(() => {
        if (prdList === null) {
            setPrdList([
                {
                    prd_id: 1,
                    prd_thumb_img: vienna,
                    prd_name: '고소한 비엔나 소세지',
                    prd_comment: '들기름을 넣어 고소한 비엔나 소세지',
                    prd_price: 1000,
                    order_count: 1,
                    prd_stock: 10
                },
                {
                    prd_id: 2,
                    prd_thumb_img: vienna,
                    prd_name: '고소한 비엔나 소세지',
                    prd_comment: '들기름을 넣어 고소한 비엔나 소세지',
                    prd_price: 2000,
                    order_count: 1,
                    prd_stock: 0
                },
                {
                    prd_id: 3,
                    prd_thumb_img: vienna,
                    prd_name: '고소한 비엔나 소세지',
                    prd_comment: '들기름을 넣어 고소한 비엔나 소세지',
                    prd_price: 3000,
                    order_count: 1,
                    prd_stock: 0
                },
            ]
            )
        }
    }, [prdList])
    return (
        <>
            {prdList && <Cart prdList={prdList} />}
        </>
    )
}
