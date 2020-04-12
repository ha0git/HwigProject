import React, { useEffect, useState } from 'react'
import Order from '../OrderComponents/Order'
import { Redirect } from 'react-router-dom';

export default function OrderPage({ history }) {
    const [logged, setLogged] = useState(true);
    return (
        <div>
            {logged ? <Order /> : <Redirect to="/login" />}

        </div>
    )
}
