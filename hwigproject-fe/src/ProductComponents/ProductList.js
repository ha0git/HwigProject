import React from 'react'
import {Container, Row, Col, Image, Button} from 'react-bootstrap'
import jQuery from "jquery";
import {Link} from 'react-router-dom'
import './ProductList.css'

export default function ProductList(props) {
    window.$ = window.jQuery = jQuery;
    window.$(document).ready(function(){
        window.$(".product-category").hover(function(){
            window.$(".product-category").slideDown(3000)
        })
    })

    const productList = props.productItems.product
    const getProducts = productList.map((product,index)=>
      <div className="product" key={index}>
          <Link className="product-list-img" to="/">
              <Image className="product-list-img" src={product.img} rounded />
          </Link>
          <Link className="producet-text-link" to="/">
                <div className="product-text-margin">{product.title}</div>
          </Link>
          <div className="product-text-price">{product.price}</div> 
      </div>
    )

    const categories = props.productItems.category
    const getCategories = categories.map((category, index)=>
        <Link className="product-category" to="/category" key={index}>
            <Link className="product-category-button">{category.name}</Link>
        </Link>
    )
    return (
        <>
                <div className="product-list-body">
                    <div>
                        <p className="product-title">신상품</p>
                    </div>
                    <nav className="product-category-container">
                        {getCategories}
                        <hr/>
                    </nav>                       
                    <div>
                        <div>
                            {getProducts}
                        </div>
                    </div>
                </div>
        </>
    )
}
