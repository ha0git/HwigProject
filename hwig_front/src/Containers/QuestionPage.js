import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import axios from 'axios'
import Question from '../CustomerServiceComponents/Question'
import { host } from './ServerAddress'

export default function QuestionPage({ location, history }) {
    const [qnaList, setQnaList] = useState(null)
    const query = queryString.parse(location.search);
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(10)
    console.log(query)
    console.log(history)
    console.log(host)

    const getAxiosData = (uri)=>{
        axios.get(host+ uri)
        .then(res => { 
            console.log(res.data)
            setQnaList(res.data)
            })
    }
    useEffect(() => {
        
        if (query.page === undefined) {
            history.push(`/customer/qna?page=${page}`)
        }
        if (parseInt(query.page) !== page) {
            setPage(parseInt(query.page));
            console.log(page)
            // getAxiosData('/qna')
        }
        if (!qnaList) {
            // getAxiosData('/qna')
            setQnaList([
                {
                    qna_id: 1,
                    qna_category: "[기타문의]",
                    qna_subject: "기타문의 테스트",
                    qna_content: "왜안돼요",
                    mem_id: "bread",
                    qna_regdate: "2020-03-18",
                    reply_content: "우선 서비스이용에 불편을 드려 대단히 죄송합니다. \r 고객님께서 문의하신 내용 정확하지 않아 문의 확인에 어려움을 겪고있습니다."
                },
                {
                    qna_id: 2,
                    qna_category: "[기타문의]",
                    qna_subject: "기타문의 테스트",
                    mem_id: "bread",
                    qna_regdate: "2020-03-18",
                    reply_content: ""
                },
                {
                    qna_id: 3,
                    qna_category: "[기타문의]",
                    qna_subject: "기타문의 테스트",
                    qna_content: "왜안돼요",
                    mem_id: "bread",
                    qna_regdate: "2020-03-18",
                    reply_content: ""
                },
                {
                    qna_id: 4,
                    qna_category: "[기타문의]",
                    qna_subject: "기타문의 테스트",
                    qna_content: "왜안돼요",
                    mem_id: "bread",
                    qna_regdate: "2020-03-18",
                    reply_content: ""
                },
                {
                    qna_id: 5,
                    qna_category: "[배송문의]",
                    qna_subject: "배송문의 테스트",
                    qna_content: "왜안돼요",
                    mem_id: "bread",
                    qna_regdate: "2020-03-18",
                    reply_content: "ㅇㅇㅇㅇㅇ"
                },
                {
                    qna_id: 6,
                    qna_category: "[기타문의]",
                    qna_subject: "기타문의 테스트",
                    qna_content: "왜안돼요",
                    mem_id: "bread",
                    qna_regdate: "2020-03-18",
                    reply_content: "ㅇㅇㅇㅇ"
                },
                {
                    qna_id: 7,
                    qna_category: "[기타문의]",
                    qna_subject: "기타문의 테스트",
                    qna_content: "왜안돼요",
                    mem_id: "bread",
                    qna_regdate: "2020-03-18",
                    reply_content: "ㄹㄹㄹㄹ"
                },
                {
                    qna_id: 8,
                    qna_category: "[배송문의]",
                    qna_subject: "기타문의 테스트",
                    qna_content: "왜안돼요",
                    mem_id: "bread",
                    qna_regdate: "2020-03-18",
                    reply_content: ""
                },
                {
                    qna_id: 9,
                    qna_category: "[배송문의]",
                    qna_subject: "기타문의 테스트",
                    qna_content: "왜안돼요",
                    mem_id: "bread",
                    qna_regdate: "2020-03-18",
                    reply_content: ""
                },
                {
                    qna_id: 10,
                    qna_category: "[배송문의]",
                    qna_subject: "기타문의 테스트",
                    qna_content: "왜안돼요",
                    mem_id: "bread",
                    qna_regdate: "2020-03-18",
                    reply_content: ""
                },
                {
                    qna_id: 11,
                    qna_category: "[배송문의]",
                    qna_subject: "기타문의 테스트",
                    qna_content: "왜안돼요",
                    mem_id: "bread",
                    qna_regdate: "2020-03-18",
                    reply_content: ""
                },
                {
                    qna_id: 12,
                    qna_category: "[배송문의]",
                    qna_subject: "기타문의 테스트",
                    qna_content: "왜안돼요",
                    mem_id: "bread",
                    qna_regdate: "2020-03-18",
                    reply_content: ""
                },
                {
                    qna_id: 13,
                    qna_category: "[배송문의]",
                    qna_subject: "기타문의 테스트",
                    qna_content: "왜안돼요",
                    mem_id: "bread",
                    qna_regdate: "2020-03-18",
                    reply_content: ""
                },
                {
                    qna_id: 14,
                    qna_category: "[배송문의]",
                    qna_subject: "기타문의 테스트",
                    qna_content: "왜안돼요",
                    mem_id: "bread",
                    qna_regdate: "2020-03-18",
                    reply_content: ""
                },
                {
                    qna_id: 15,
                    qna_category: "[배송문의]",
                    qna_subject: "기타문의 테스트",
                    mem_id: "bread",
                    qna_regdate: "2020-03-18",
                    reply_content: ""
                },
                {
                    qna_id: 16,
                    qna_category: "[배송문의]",
                    qna_subject: "기타문의 테스트",
                    qna_content: "왜안돼요",
                    mem_id: "bread",
                    qna_regdate: "2020-03-18",
                    reply_content: ""
                },
            ])
        }
    }, [query.page, page, qnaList, history])
    return (
        <>
            {qnaList && <Question qnaList={qnaList} page={page} size={size} history={history} />}
        </>
    )
}
