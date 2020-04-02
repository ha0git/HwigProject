import React from 'react'
import {Image, Pagination} from 'react-bootstrap'
// import jQuery from "jquery";
import {Link} from 'react-router-dom'
import './ProductList.css'

export default function ProductList(props) {
    const productList = props.productItems.product
    const categories = props.productItems.category

    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }
    
    const paginationBasic = (
        <Pagination size="sm">
  <Pagination.First />
  <Pagination.Prev />
            {items}
            <Pagination.Next />
  <Pagination.Last />
        </Pagination>
    );

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
                        <hr/>
                    </nav>    
                    <div>
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
                        {paginationBasic}
                    </div>
                </div>
        </>
    )
}