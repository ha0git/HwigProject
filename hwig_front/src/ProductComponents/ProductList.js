import React, { useState, Children } from 'react'
import { Link } from 'react-router-dom'
import Pagination from "react-js-pagination";
import ImageMapper from 'react-image-mapper';
// import jQuery from "jquery";
import './ProductList.css'

export default function ProductList(props) {
    const categories = props.productItems.category
    const productList = props.productItems.product

    const categoryList = categories.map(category => (
        <li key={category.prd_id}><Link to="/">{category.category_name}</Link></li>))

    const productGoods = productList.map((product) => (
        <li key={product.prd_id}>
            <Link to={`shop/product?goodsno=${product.prd_id}`}><ImageMapper src={product.prd_img}></ImageMapper>
                <div className="product_list_goods_info">
                    <span className="product_list_goods_name">{product.prd_name}&nbsp;{product.prd_kg}</span>
                    <span className="product_list_goods_price">{product.prd_price}</span>
                    <span className="product_list_goods_desc">{product.prd_comment}</span>
                </div>
            </Link>
        </li>

    ))

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
        console.log(list)
        return list
    }

    const [activePage, setactivePage] = useState(15);

    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setactivePage(pageNumber)
        props.history.push(`/shop?page=${pageNumber}`)
    }

    return (
        <>
            <div className="product_list">
                <div className="product_list_content">
                    <div className="product_list_header">
                        <div className="product_list_tit">
                            <span>채소&nbsp;·&nbsp;과일</span>
                        </div>
                        <ul className="product_list_category">
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