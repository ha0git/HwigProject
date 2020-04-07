import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
// import jQuery from "jquery";
import { Link } from 'react-router-dom'
import Pagination from "react-js-pagination";
import './ProductList.css'

export default function ProductList(props) {
    const productList = props.productItems.product
    const categories = props.productItems.category
    const [activePage, setactivePage] = useState(15);

    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setactivePage(pageNumber)
    }


    return (
        <>
            <div className="product-list-body">
                <div>
                    <p className="product-title">신상품</p>
                </div>
                <nav className="product-category-container">
                    <span>
                        <Link className="product-category" to="/category">
                            <span className="product-category-button">{categories[0].name}</span>
                        </Link>
                    </span>
                    <span>
                        <Link className="product-category" to="/category">
                            <span className="product-category-button">{categories[1].name}</span>
                        </Link>
                    </span>
                    <span>
                        <Link className="product-category" to="/category">
                            <span className="product-category-button">{categories[2].name}</span>
                        </Link>
                    </span>
                    <hr />
                </nav>
                <div className="product-list-content">
                    <div className="product">
                        <Link className="product-list-img" to="/">
                            <Image className="product-list-img" src={productList[0].img} rounded />
                        </Link>
                        <div className="product-text-title">
                            <Link className="producet-text-link" to="/">{productList[0].title}</Link>
                        </div>
                        <div className="product-text-price">{productList[0].price}</div>
                    </div>
                    <div className="product">
                        <Link className="product-list-img" to="/">
                            <Image className="product-list-img" src={productList[0].img} rounded />
                        </Link>
                        <div className="product-text-title">
                            <Link className="producet-text-link" to="/">{productList[0].title}</Link>
                        </div>
                        <div className="product-text-price">{productList[0].price}</div>
                    </div>
                    <div className="product">
                        <Link className="product-list-img" to="/">
                            <Image className="product-list-img" src={productList[0].img} rounded />
                        </Link>
                        <div className="product-text-title">
                            <Link className="producet-text-link" to="/">{productList[0].title}</Link>
                        </div>
                        <div className="product-text-price">{productList[0].price}</div>
                    </div>
                    <div className="product">
                        <Link className="product-list-img" to="/">
                            <Image className="product-list-img" src={productList[0].img} rounded />
                        </Link>
                        <div className="product-text-title">
                            <Link className="producet-text-link" to="/">{productList[0].title}</Link>
                        </div>
                        <div className="product-text-price">{productList[0].price}</div>
                    </div>
                    <div className="product">
                        <Link className="product-list-img" to="/">
                            <Image className="product-list-img" src={productList[0].img} rounded />
                        </Link>
                        <div className="product-text-title">
                            <Link className="producet-text-link" to="/">{productList[0].title}</Link>
                        </div>
                        <div className="product-text-price">{productList[0].price}</div>
                    </div>
                    <div className="product">
                        <Link className="product-list-img" to="/">
                            <Image className="product-list-img" src={productList[0].img} rounded />
                        </Link>
                        <div className="product-text-title">
                            <Link className="producet-text-link" to="/">{productList[0].title}</Link>
                        </div>
                        <div className="product-text-price">{productList[0].price}</div>
                    </div>
                    <div className="product">
                        <Link className="product-list-img" to="/">
                            <Image className="product-list-img" src={productList[0].img} rounded />
                        </Link>
                        <div className="product-text-title">
                            <Link className="producet-text-link" to="/">{productList[0].title}</Link>
                        </div>
                        <div className="product-text-price">{productList[0].price}</div>
                    </div>
                    <div className="product">
                        <Link className="product-list-img" to="/">
                            <Image className="product-list-img" src={productList[0].img} rounded />
                        </Link>
                        <div className="product-text-title">
                            <Link className="producet-text-link" to="/">{productList[0].title}</Link>
                        </div>
                        <div className="product-text-price">{productList[0].price}</div>
                    </div>
                    <div className="product">
                        <Link className="product-list-img" to="/">
                            <Image className="product-list-img" src={productList[0].img} rounded />
                        </Link>
                        <div className="product-text-title">
                            <Link className="producet-text-link" to="/">{productList[0].title}</Link>
                        </div>
                        <div className="product-text-price">{productList[0].price}</div>
                    </div>
                </div>
                <div className="product-pagenation-container">
                    <Pagination
                        activePage={activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={100}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}
                    />
                </div>
            </div>
        </>
    )
}