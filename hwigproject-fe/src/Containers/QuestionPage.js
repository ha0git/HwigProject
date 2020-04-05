import React, {useState, useEffect} from 'react'
import queryString from 'query-string'
import Question from '../CustomerServiceComponents/Question'

export default function QuestionPage({location, history}) {
    const [qnaList, setQnaList] = useState(null)
    const query = queryString.parse(location.search);
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(10)
    console.log(query)
    console.log(history)

    useEffect(() => {
        if(query.page === undefined){
            history.push(`/customer/qna?page=${page}`)
        }
        if(query.page !== page){
            setPage(parseInt(query.page));
            console.log(page)
        }
        if(!qnaList){
        setQnaList([
            {
                qna_id:1,
                qna_category: "[기타문의]",
                qna_subject: "기타문의 테스트",
                mem_id:"bread",
                qna_regdate: "2020-03-18",
                reply_content: ""
            },
            {
                qna_id:2,
                qna_category: "[기타문의]",
                qna_subject: "기타문의 테스트",
                mem_id:"bread",
                qna_regdate: "2020-03-18",
                reply_content: ""
            },
            {
                qna_id:3,
                qna_category: "[기타문의]",
                qna_subject: "기타문의 테스트",
                mem_id:"bread",
                qna_regdate: "2020-03-18",
                reply_content: ""
            },
            {
                qna_id:4,
                qna_category: "[기타문의]",
                qna_subject: "기타문의 테스트",
                mem_id:"bread",
                qna_regdate: "2020-03-18",
                reply_content: ""
            },
            {
                qna_id:5,
                qna_category: "[배송문의]",
                qna_subject: "배송문의 테스트",
                mem_id:"bread",
                qna_regdate: "2020-03-18",
                reply_content: "ㅇㅇㅇㅇㅇ"
            },
            {
                qna_id:6,
                qna_category: "[기타문의]",
                qna_subject: "기타문의 테스트",
                mem_id:"bread",
                qna_regdate: "2020-03-18",
                reply_content: "ㅇㅇㅇㅇ"
            },
            {
                qna_id:7,
                qna_category: "[기타문의]",
                qna_subject: "기타문의 테스트",
                mem_id:"bread",
                qna_regdate: "2020-03-18",
                reply_content: "ㄹㄹㄹㄹ"
            },
            {
                qna_id:8,
                qna_category: "[배송문의]",
                qna_subject: "기타문의 테스트",
                mem_id:"bread",
                qna_regdate: "2020-03-18",
                reply_content: ""
            },
            {
                qna_id:9,
                qna_category: "[배송문의]",
                qna_subject: "기타문의 테스트",
                mem_id:"bread",
                qna_regdate: "2020-03-18",
                reply_content: ""
            },
            {
                qna_id:10,
                qna_category: "[배송문의]",
                qna_subject: "기타문의 테스트",
                mem_id:"bread",
                qna_regdate: "2020-03-18",
                reply_content: ""
            },
            {
                qna_id:11,
                qna_category: "[배송문의]",
                qna_subject: "기타문의 테스트",
                mem_id:"bread",
                qna_regdate: "2020-03-18",
                reply_content: ""
            },
            {
                qna_id:12,
                qna_category: "[배송문의]",
                qna_subject: "기타문의 테스트",
                mem_id:"bread",
                qna_regdate: "2020-03-18",
                reply_content: ""
            },
            {
                qna_id:13,
                qna_category: "[배송문의]",
                qna_subject: "기타문의 테스트",
                mem_id:"bread",
                qna_regdate: "2020-03-18",
                reply_content: ""
            },
            {
                qna_id:14,
                qna_category: "[배송문의]",
                qna_subject: "기타문의 테스트",
                mem_id:"bread",
                qna_regdate: "2020-03-18",
                reply_content: ""
            },
            {
                qna_id:15,
                qna_category: "[배송문의]",
                qna_subject: "기타문의 테스트",
                mem_id:"bread",
                qna_regdate: "2020-03-18",
                reply_content: ""
            },
            {
                qna_id:16,
                qna_category: "[배송문의]",
                qna_subject: "기타문의 테스트",
                mem_id:"bread",
                qna_regdate: "2020-03-18",
                reply_content: ""
            },
        ])}
    })
    return (
        <>
           {qnaList && <Question qnaList={qnaList} page={page} size={size} history={history} />}
        </>
    )
}
