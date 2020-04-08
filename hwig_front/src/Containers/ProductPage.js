import React, { useState, useEffect } from 'react'
import Product from '../ProductComponents/Product'
import qs from 'qs'

export default function ProductPage({ location, history }) {
    const [prdList, setPrdList] = useState(null);
    const query = qs.parse(location.search)
    const [page, setPage] = useState(1);
    const [num, setNum] = useState(parseInt(query.no));




    useEffect(() => {
        if (query.no === undefined) {
            history.push(`/shop/product?page=${page}`)
        }
        if (num !== query.no) {
            setNum(parseInt(query.no))
        }
        if (prdList === null) {
            setPrdList([
                {

                }

            ])
        }
    })
    return (
        <>
            <Product />
        </>
    )
}
