import React, { useState, Children } from 'react'
import { Link } from 'react-router-dom'
import Pagination from "react-js-pagination";
import ImageMapper from 'react-image-mapper';
// import jQuery from "jquery";
import './ProductList.css'
import save10 from '../images/sales/10.png';
import save30 from '../images/sales/30.png';
import save50 from '../images/sales/50.png';
import product1 from '../images/product1.png'

export default function ProductList(props) {
    console.log(props)
    const pcategoryItem = props.productItems.pcategory
    const categoryItem = props.productItems.category
    const productList = props.productItems.productlist
    const allItems = props.productItems.category[0]

    const categorytit = pcategoryItem.map(pcategory => (
        <span>{pcategory.category_name}</span>
    ))

    const categoryList = categoryItem.map(category => (
        <li key={category.category_id}><Link to={`/shop?category_id=${category.category_id}&page=${props.page}`}>{category.category_name}</Link></li>
    ))


    const productGoods = productList.map(product => (
        <li key={product.prd_id}>
            <Link to={`shop/product?goodsno=${product.prd_id}&page=${props.page}`}>
                <div className="prd_img">
                    <img className="imgscale3" src={"http://13.209.202.242:8080/" + product.prd_thumb} />
                    {(product.prd_sale === 0.1) && <img className="product_sale_icon" src={save10} />}
                    {(product.prd_sale === 0.3) && <img className="product_sale_icon" src={save30} />}
                    {(product.prd_sale === 0.5) && <img className="product_sale_icon" src={save50} />}
                    {(!product.prd_sale) && <p></p>}
                </div>
                <div className="product_list_goods_info">
                    <span className="product_list_goods_name">{product.prd_name}&nbsp;{product.prd_kg}</span>
                    <span className="product_list_goods_price">{product.prd_price}원</span>
                    <span className="product_list_goods_desc">{product.prd_comment}</span>
                </div>
            </Link>
        </li>

    )

    )

    const showPrdList = () => {
        let list = [];
        let begin = (props.page - 1) * props.size;
        let end;
        if (productList.length < props.page * 9) {
            end = productList.length
        } else {
            end = props.page * 9;
        }
        console.log(begin, end)

        for (let i = begin; i < end; i++) {
            list.push(productGoods[i])
        }
        return list
    }

    const [activePage, setactivePage] = useState(1);

    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setactivePage(pageNumber)
        props.history.push(`/shop?category_id=${productList.category_id}&page=${pageNumber}`)
    }

    return (
        <>
            <div className="product_list">
                <div className="product_list_content">
                    <div className="product_list_header">
                        <div className="product_list_tit">
                            {categorytit}
                        </div>
                        <ul className="product_list_category">
                            <li><Link to={`/shop?catogory_id=1&page=${props.page}`}>전체 보기</Link></li>
                            {categoryList}
                        </ul>
                    </div>
                    <div className="product_list_body">
                        <ul className="product_list_goods">
                            {showPrdList()}
                        </ul>

                    </div>
                </div>
                <div className="product-pagenation-container">
                    <Pagination
                        activePage={activePage}
                        itemsCountPerPage={9}
                        totalItemsCount={productList.length}
                        pageRangeDisplayed={9}
                        onChange={handlePageChange}
                    />
                </div>
            </div>
        </>
    )
}