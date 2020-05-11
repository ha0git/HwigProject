import React, {useEffect,useState} from 'react'
import './MyPageModify.css'
import axios from 'axios'
import { host2 } from '../Containers/ServerAddress'
import MypageReviewForm from './MypageReviewForm.js'
import {withRouter} from 'react-router-dom'
import queryString from 'query-string'

export default function MypageReviewF({location,history}) {
    const query = queryString.parse(location.search)
    const [num, setNum] = useState(parseInt(query.prdno));
    useEffect(() => {
        console.log(query)
        if (!query.prdno) {
            console.log(1)
            history.push(`/mypage/reviewform?prdno=${num}`)
        }
    })

    const sendMemData = (uri, data) => {
        axios.post(host2+uri, data)
        .then(res=>{
            console.log(res.data)
            if (res.data === true ) {
                alert("추카")
                history.push('/mypage/review')
            }
    })}
    const handleData = (data)=>{
        console.log(data)
        sendMemData('api/review/review_write', data)
    }
                            
    return (
        <>
            <MypageReviewForm onSubmit={handleData} num = {num}/>
        </>
    )
}
