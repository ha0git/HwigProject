import MyPageReviewList from './MyPageReviewList'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { host } from '../Containers/ServerAddress'
import {connect} from 'react-redux'


export default function MyPageR(props) {
    const [data1, setData1] = useState(null);
    const [data2, setData2] = useState(null);
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(2)
    const userInfoR = props.userInfo

    const getAxiosData = (uri,uri2) => {
        axios.all([
            axios.get(host + uri),
            axios.get(host + uri2)
          ])
          .then(axios.spread((res1, res2) => {
            console.log(res1.data)
            setData1(res1.data)
            console.log(res2.data)
            setData2(res2.data)
          })
          )
    }
    useEffect(() => {
        console.log(userInfoR)
        if (!data1 && !data2) {
            getAxiosData(`api/members/${userInfoR.mem_id }/prds`,`api/review/review_mem?mem_id=${userInfoR.mem_id }`)
        }
    }, [data1], [data2]
    )
    return (
        <>
            {data1,data2 && 
                <MyPageReviewList 
                data1={data1} 
                data2={data2} 
                history={props.history} 
                size={size}
                page={page}
                /> 
            }
        </>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        isLogged: state.reducer.isLogged,
        userInfo: state.reducer.userInfo
    }
}

MyPageR = connect(mapStateToProps)(MyPageR)