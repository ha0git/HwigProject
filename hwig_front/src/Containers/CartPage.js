import Cart from '../ProductComponents/Cart'
import React, { useState, useEffect }  from 'react'
import {Table} from 'react-bootstrap'
import vienna from '../images/product/vienna.png';

export default function CartPage() {
    const [prdList, setPrdList] = useState(null);
    

    useEffect(() => {
        if (prdList === null) {
            setPrdList({
                product: [
                    {
                        prd_id: 1,
                        prd_thumb_img: vienna,
                        prd_name: '고소한 비엔나 소세지',
                        prd_comment: '들기름을 넣어 고소한 비엔나 소세지',
                        prd_price: 10000,
                        prd_quantity: 1,
                    },
                    {
                        prd_id: 2,
                        prd_thumb_img: vienna,
                        prd_name: '고소한 비엔나 소세지',
                        prd_comment: '들기름을 넣어 고소한 비엔나 소세지',
                        prd_price: 20000,
                        prd_quantity: 1,
                    },
                    {
                        prd_id: 3,
                        prd_thumb_img: vienna,
                        prd_name: '고소한 비엔나 소세지',
                        prd_comment: '들기름을 넣어 고소한 비엔나 소세지',
                        prd_price: 30000,
                        prd_quantity: 1,
                    },
                ]
            })
        }
    }, [prdList])
    return (
        <>
            {prdList && <Cart prdList={prdList}/> }
        </>
    )
}
