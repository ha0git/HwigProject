import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { host } from './ServerAddress'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'
import Product from '../ProductComponents/Product'
import vienna from '../images/product/vienna.png';
import img from '../images/product/prd_image.png';


function ProductPage(props) {
    const [prdList, setPrdList] = useState(null);
    const [prdReview, setPrdReview] = useState(null);
    const [isLogged, setIsLogged] = useState(false);
    const query = queryString.parse(props.location.search)
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(1)
    const [list, setList] = useState(1)



    console.log(query)
    // const getAxiosData = (uri, uri2) => {
    //     axios.all([
    //         axios.get(host + uri),
    //         axios.get(host + uri2)
    //     ])
    //         .then(axios.spread((res1, res2) => {
    //             console.log(res1.data)
    //             setPrdList(res1.data)
    //             console.log(res2.data)
    //             setPrdReview(res2.data)
    //         }))
    // }
    const getAxiosData = (uri) => {
        axios.get(host + uri)
            .then(res => {
                console.log(res.data)
                setPrdList(res.data)
            })
    }
    const sendJoinData = (uri, data) => {
        axios.post(host + uri, data)
            .then(res => {
                console.log(res.data)
                if (res.data.success === 1) {
                    props.history.push(`/shop/cart?goodsCart`)
                }
            })
    }
    const handleData = (data) => {
        console.log(data)
        if (isLogged === false) {
            props.history.push(`/login`)
        }
        sendJoinData('api/cart/cartinsert', data)
    }

    useEffect(() => {
        if (!query.goodsno) {
            props.history.push(`/shop/product?goodsno=${query.goodsno}`)
            getAxiosData(`api/product/productdetail?prd_id=${query.goodsno}`)
        }
        if ((parseInt(query.goodsno) !== list) || (parseInt(query.page) !== page)) {
            setList(parseInt(query.goodsno))
            setPage(parseInt(query.page))
            getAxiosData(`api/product/productdetail?prd_id=${query.goodsno}`)
            setPrdReview([
                {
                    review_id: 1,
                    review_subject: '맛있어요1',
                    mem_id: '난나나',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfafsd'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                }
            ])
        }
        if (!prdList && !prdReview) {
            getAxiosData(`api/product/productdetail?prd_id=${query.goodsno}`)
            setPrdReview([
                {
                    review_id: 1,
                    review_subject: '맛있어요1',
                    mem_id: '난나나',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfafsd'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                },
                {
                    review_id: 2,
                    review_subject: '맛있어요2',
                    mem_id: '난나나2',
                    review_regdate: '0203',
                    review_img: vienna,
                    review_content: 'qwerqwerqwerqwerqwerqwerqewrqerqwerqwerqwerqwer'
                }
            ])
            // setPrdList([
            //     {
            //         category_id: 1,
            //         prd_id: 1,
            //         prd_thumb: vienna,
            //         prd_name: '고소한 비엔나 소세지',
            //         prd_kg: '225g',
            //         prd_comment: '들기름을 넣어 고소한 비엔나 소세지',
            //         prd_price: 30000,
            //         prd_ea: '1봉',
            //         prd_from: '상품별 별도표기',
            //         prd_wrap: '냉장 / 종이포장',
            //         prd_info: '상품 특성상 3%내외의 중량차이가 발생할 수 있습니다.',
            //         prd_img: img
            //     },
            //     {
            //         category_id: 1,
            //         prd_id: 2,
            //         prd_thumb: vienna,
            //         prd_name: '이유식 재료 친환경 양송이 버섯',
            //         prd_kg: '80g',
            //         prd_comment: '풍미를 더해주는 이유식용 양송이버섯',
            //         prd_price: 40000,
            //         prd_ea: '1팩',
            //         prd_from: '상품별 별도표기',
            //         prd_wrap: '냉장 / 종이포장',
            //         prd_info: '상품 특성상 3%내외의 중량차이가 발생할 수 있습니다.'
            //     },
            //     {
            //         category_id: 1,
            //         prd_id: 3,
            //         prd_thumb: vienna,
            //         prd_name: '이유식 재료 친환경 브로콜리',
            //         prd_kg: '100g',
            //         prd_comment: '간편한 이유식용 브로콜리',
            //         prd_price: 500000,
            //         prd_ea: '1팩',
            //         prd_from: '상품별 별도표기',
            //         prd_wrap: '냉장 / 종이포장',
            //         prd_info: '상품 특성상 3%내외의 중량차이가 발생할 수 있습니다.'
            //     },
            //     {
            //         category_id: 1,
            //         prd_id: 4,
            //         prd_thumb: vienna,
            //         prd_name: '흙당근',
            //         prd_kg: '800g',
            //         prd_comment: '갈아먹고 볶아먹고 향 좋은 흙당근',
            //         prd_price: 500000,
            //         prd_ea: '1팩',
            //         prd_from: '상품별 별도표기',
            //         prd_wrap: '냉장 / 종이포장',
            //         prd_info: '상품 특성상 3%내외의 중량차이가 발생할 수 있습니다.'
            //     },
            //     {
            //         category_id: 1,
            //         prd_id: 5,
            //         prd_thumb: vienna,
            //         prd_name: '칼집 군밤용 처음밤',
            //         prd_kg: '400g',
            //         prd_comment: '그대로 구워 즐기는 금빛 달콤함',
            //         prd_price: 500000,
            //         prd_ea: '1팩',
            //         prd_from: '상품별 별도표기',
            //         prd_wrap: '냉장 / 종이포장',
            //         prd_info: '상품 특성상 3%내외의 중량차이가 발생할 수 있습니다.'
            //     },
            //     {
            //         category_id: 1,
            //         prd_id: 6,
            //         prd_thumb: vienna,
            //         prd_name: '영얌 무농약 꿀 고구마',
            //         prd_kg: '2kg',
            //         prd_comment: '포실포실 달콤한 꿀고구마를 무농약으로 즐기세요',
            //         prd_price: 500000,
            //         prd_ea: '1팩',
            //         prd_from: '상품별 별도표기',
            //         prd_wrap: '냉장 / 종이포장',
            //         prd_info: '상품 특성상 3%내외의 중량차이가 발생할 수 있습니다.'
            //     },
            //     {
            //         category_id: 1,
            //         prd_id: 7,
            //         prd_thumb: vienna,
            //         prd_name: '새싹 모둠 채소',
            //         prd_kg: '100g',
            //         prd_comment: '간편한 이유식용 브로콜리',
            //         prd_price: 500000,
            //         prd_ea: '1팩',
            //         prd_from: '상품별 별도표기',
            //         prd_wrap: '냉장 / 종이포장',
            //         prd_info: '상품 특성상 3%내외의 중량차이가 발생할 수 있습니다.'
            //     },
            //     {
            //         category_id: 1,
            //         prd_id: 8,
            //         prd_thumb: vienna,
            //         prd_name: '당귀잎',
            //         prd_kg: '35g',
            //         prd_comment: '향기가 남다른 건강 식재료',
            //         prd_price: 500000,
            //         prd_ea: '1팩',
            //         prd_from: '상품별 별도표기',
            //         prd_wrap: '냉장 / 종이포장',
            //         prd_info: '상품 특성상 3%내외의 중량차이가 발생할 수 있습니다.'
            //     },
            //     {
            //         category_id: 1,
            //         prd_id: 9,
            //         prd_thumb: vienna,
            //         prd_name: '엿구마 바삭침',
            //         prd_kg: '50g',
            //         prd_comment: '바삭바삭 달콤한 건강 간식',
            //         prd_price: 500000,
            //         prd_ea: '1팩',
            //         prd_from: '상품별 별도표기',
            //         prd_wrap: '냉장 / 종이포장',
            //         prd_info: '상품 특성상 3%내외의 중량차이가 발생할 수 있습니다.'
            //     },
            //     {
            //         category_id: 1,
            //         prd_id: 10,
            //         prd_thumb: vienna,
            //         prd_name: '스위트 치즈 고구마',
            //         prd_kg: '200g',
            //         prd_comment: '간편하게 즐기는 달콤한 치즈 고구마',
            //         prd_price: 500000,
            //         prd_ea: '1팩',
            //         prd_from: '상품별 별도표기',
            //         prd_wrap: '냉장 / 종이포장',
            //         prd_info: '상품 특성상 3%내외의 중량차이가 발생할 수 있습니다.'
            //     },
            //     {
            //         category_id: 1,
            //         prd_id: 11,
            //         prd_thumb: vienna,
            //         prd_name: '커팅 부추',
            //         prd_kg: '100g',
            //         prd_comment: '먹기 쉽게 컷팅된 소용량 부추',
            //         prd_price: 500000,
            //         prd_ea: '1팩',
            //         prd_from: '상품별 별도표기',
            //         prd_wrap: '냉장 / 종이포장',
            //         prd_info: '상품 특성상 3%내외의 중량차이가 발생할 수 있습니다.'
            //     }
            // ])
        }
    },[prdList, prdReview])
    return (
        <>
            {prdList && <Product
                prdList={prdList}
                prdReview={prdReview}
                size={size}
                page={page}
                history={props.history}
                onSubmit={handleData}
                userInfo={props.userInfo}
            />}

        </>
    )
}
const mapStateToProps = (state) => {
    return {
        userInfo: state.reducer.userInfo
    }
}
export default withRouter(connect(mapStateToProps)(ProductPage))