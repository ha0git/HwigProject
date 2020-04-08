import React, {useState ,useEffect} from 'react'
import queryString from 'query-string'
import axios from 'axios'
import {host} from './ServerAddress'
import Board from '../CustomerServiceComponents/Board'

export default function BoardPage({location, history}) {
    const [article, setArticle] = useState(null)
    const query = queryString.parse(location.search);
    const [page, setPage] = useState(1)
    const [num, setNum] = useState(parseInt(query.no))
    console.log(query)
    
    const getAxiosData = (uri)=>{
        axios.get(host+uri)
        .then(res=>{
            console.log(res.data)
        })
    }
    useEffect(() => {
        // getAxiosData('/notice_board')
        if(query.no === undefined){
            history.push(`/customer/notice?page=${page}`)
        }
        if(num !== query.no){
            setNum(parseInt(query.no))
        }

        if(!article){
        setArticle([
            {
                notice_id:1,
                notice_subject: "[가격인하공지][카나슈] 티, 커피 슈가 7종(2020.3.13~)",
                notice_content: "내용이다.",
                notice_regdate:"2020-03-27",
                notice_hit:3,
            },
            {
                notice_id:2,
                notice_subject: "[가격인하공지]돼지국밥",
                notice_content: "내용이다.",
                notice_regdate:"2020-03-26",
                notice_hit:22,
            },
            {
                notice_id:3,
                notice_subject: "[가격인하공지]선지국밥",
                notice_content: "내용이다.",
                notice_regdate:"2020-03-25",
                notice_hit:33,
            },
            {
                notice_id:4,
                notice_subject: "[가격인하공지]냉채 족발",
                notice_content: "내용이다.",
                notice_regdate:"2020-03-24",
                notice_hit:44,
            },
            {
                notice_id:5,
                notice_subject: "[가격인하공지]스타벅스 커피",
                notice_content: "내용이다.",
                notice_regdate:"2020-03-23",
                notice_hit:55,
            },
            {
                notice_id:6,
                notice_subject: "[가격인하공지] 엽떡",
                notice_content: "내용이다.",
                notice_regdate:"2020-03-22",
                notice_hit:66,
            },
            {
                notice_id:7,
                notice_subject: "[가격인하공지] 순대 곱창",
                notice_content: "내용이다.",
                notice_regdate:"2020-03-21",
                notice_hit:83,
            },
            {
                notice_id:8,
                notice_subject: "[가격인하공지]장충동 족발",
                notice_content: "내용이다.",
                notice_regdate:"2020-03-20",
                notice_hit:99,
            },
            {
                notice_id:9,
                notice_subject: "[가격인하공지]광장시장 녹두전",
                notice_content: "내용이다.",
                notice_regdate:"2020-03-19",
                notice_hit:123,
            },
            {
                notice_id:10,
                notice_subject: "[가격인하공지]공주 밤 막걸리",
                notice_content: "내용이다.",
                notice_regdate:"2020-03-18",
                notice_hit:234,
            },
            {
                notice_id:11,
                notice_subject: "[가격인하공지]샐러리",
                notice_content: "내용이다.",
                notice_regdate:"2020-03-17",
                notice_hit:3,
            },
            {
                notice_id:12,
                notice_subject: "[가격인하공지]사과",
                notice_content: "내용이다.",
                notice_regdate:"2020-03-16",
                notice_hit:334,
            },
        ])}
    })
    return (
        <div>
            {article && <Board article={article} num={num}/>}
        </div>
    )
}
