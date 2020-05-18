import React, { useEffect, useState } from 'react'
import './MyPageModify.css'
import axios from 'axios'
import { host } from '../Containers/ServerAddress'
import MypageReviewForm from './MypageReviewForm.js'
import queryString from 'query-string'
import {connect} from 'react-redux'


export default function MypageReviewF(props) {
    const query = queryString.parse(props.location.search)
    const [num, setNum] = useState(parseInt(query.prdno));
    const id = props.userInfo.mem_id
    useEffect(() => {
        console.log(query)
        if (!query.prdno) {
            console.log(1)
            props.history.push(`/mypage/review`)
        }
    })

    const sendMemData = (uri, data) => {
        axios.post(host+uri, data,{processData: false})
        .then(res=>{
            console.log(res.data)
            console.log(res.status)
            if (res.data.isInsert == true ) {
                alert("추카")
                props.history.push('/mypage/review')
            } else {
                alert("후기를 작성할 수 없습니다.")
            }
    })}
    const handleData = (data)=>{
        console.log(data)
        sendMemData('api/review/review_write', data)
    }

    return (
        <>
            <MypageReviewForm onSubmit={handleData} num = {num} id = {id}/>
        </>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        isLogged: state.reducer.isLogged,
        userInfo: state.reducer.userInfo
    }
}

MypageReviewF = connect(mapStateToProps)(MypageReviewF)