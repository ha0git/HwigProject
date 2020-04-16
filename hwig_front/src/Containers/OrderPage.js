import React, { useEffect, useState } from 'react'
import Order from '../OrderComponents/Order'
import { Redirect } from 'react-router-dom';
import vienna from '../images/product/vienna.png'

export default function OrderPage() {
    const [logged, setLogged] = useState(true);
    const [odgoodslist, setOdgoodslist] = useState(null)


    useEffect(() => {
        if (odgoodslist === null) {
            setOdgoodslist({
                odgoods: [
                    {
                        prd_id: 1,
                        prd_thumb_img: vienna,
                        prd_name: "비엔나",
                        prd_ea: '1개',
                        prd_price: 8650,
                        order_count: 3,
                    },
                    {
                        prd_id: 2,
                        prd_thumb_img: vienna,
                        prd_name: "브로콜리",
                        prd_ea: '1개',
                        prd_price: 86500,
                        order_count: 1
                    },
                    {
                        prd_id: 3,
                        prd_thumb_img: vienna,
                        prd_name: "아보카도",
                        prd_ea: '1개',
                        prd_price: 865000,
                        order_count: 1
                    }
                ],
                memInfo: [
                    {
                        mem_name: '휙휙휙',
                        mem_tel: '010-0000-0000',
                        mem_email: 'hwig@hwig.com'
                    }
                ],

                reverse: [
                    {
                        mem_reverse: 1000
                    }
                ],

            })
        }
    })

    return (
        <div>
            {logged ? odgoodslist && <Order odgoodslist={odgoodslist} /> : <Redirect to="/login" />}

        </div>
    )
}
