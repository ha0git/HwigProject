import React, { useState, useEffect } from 'react'
import { host } from './ServerAddress'
import axios from 'axios'
import queryString from 'query-string'
import Template from '../CustomerServiceComponents/Template'

export default function TemplatePage({ history, location }) {
    const [articleList, setArticleList] = useState(null)
    const query = queryString.parse(location.search);
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(10)
    const getAxiosData = (api) => {
        axios.get(host + api)
            .then(res => {
                console.log(res.data)
                setArticleList(res.data)
            })
    }
    useEffect(() => {
        
        if (query.page === undefined) {
            history.push(`/customer/temp?page=${page}`)
        }
        if (parseInt(query.page) !== page) {
            setPage(parseInt(query.page));
            console.log(page)
            getAxiosData('api/faq/flist')
        }
        if (!articleList) {
            getAxiosData('api/faq/flist')
            // setArticleList([
            //     {
            //         faq_id: 1,
            //         faq_category: "회원가입",
            //         faq_subject: "아이디는 어떻게 찾나요?",
            //         faq_content: "아이디 찾기 눌러서 하쇼"
            //     }, {
            //         faq_id: 2,
            //         faq_category: "회원가입",
            //         faq_subject: "아이디는 어떻게 찾나요?",
            //         faq_content: "아이디 찾기 눌러서 하쇼"
            //     },
            //     {
            //         faq_id: 3,
            //         faq_category: "회원가입",
            //         faq_subject: "아이디는 어떻게 찾나요?",
            //         faq_content: "아이디 찾기 눌러서 하쇼"
            //     },
            //     {
            //         faq_id: 4,
            //         faq_category: "비밀번호",
            //         faq_subject: "비밀번호는 어떻게 찾나요?",
            //         faq_content: "비밀번호 찾기 눌러서 하쇼"
            //     },
            //     {
            //         faq_id: 5,
            //         faq_category: "비밀번호",
            //         faq_subject: "비밀번호는 어떻게 찾나요?",
            //         faq_content: "비밀번호 찾기 눌러서 하쇼"
            //     },
            //     {
            //         faq_id: 6,
            //         faq_category: "비밀번호",
            //         faq_subject: "비밀번호는 어떻게 찾나요?",
            //         faq_content: "비밀번호 찾기 눌러서 하쇼"
            //     },
            //     {
            //         faq_id: 7,
            //         faq_category: "배송",
            //         faq_subject: "배송 어디까지 왔나요?",
            //         faq_content: "송장번호로 검색하쇼"
            //     },
            //     {
            //         faq_id: 8,
            //         faq_category: "배송",
            //         faq_subject: "배송 어디까지 왔나요?",
            //         faq_content: "송장번호로 검색하쇼"
            //     },
            //     {
            //         faq_id: 9,
            //         faq_category: "배송",
            //         faq_subject: "배송 어디까지 왔나요?",
            //         faq_content: "송장번호로 검색하쇼"
            //     },
            //     {
            //         faq_id: 10,
            //         faq_category: "배송",
            //         faq_subject: "배송 어디까지 왔나요?",
            //         faq_content: "송장번호로 검색하쇼"
            //     },
            //     {
            //         faq_id: 11,
            //         faq_category: "배송ㅇ",
            //         faq_subject: "배송ㅇㅇㅇㅇㅇ 어디까지 왔나요?",
            //         faq_content: "송장번호로 검색하쇼"
            //     },
            //     {
            //         faq_id: 12,
            //         faq_category: "배송ㄹ",
            //         faq_subject: "배송ㄹㄹㄹㄹ 어디까지 왔나요?",
            //         faq_content: "송장번호로 검색하쇼"
            //     },
            //     {
            //         faq_id: 7,
            //         faq_category: "배송",
            //         faq_subject: "배송 어디까지 왔나요?",
            //         faq_content: "송장번호로 검색하쇼"
            //     },
            //     {
            //         faq_id: 7,
            //         faq_category: "배송",
            //         faq_subject: "배송 어디까지 왔나요?",
            //         faq_content: "송장번호로 검색하쇼"
            //     },
            //     {
            //         faq_id: 7,
            //         faq_category: "배송",
            //         faq_subject: "배송 어디까지 왔나요?",
            //         faq_content: "송장번호로 검색하쇼"
            //     }

            // ])
        }

    }, [query.page, page, articleList, history])



    return (
        <>
            {articleList && <Template articleList={articleList} page={page} size={size} history={history} />}
        </>
    )
}
