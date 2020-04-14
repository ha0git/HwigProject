import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductListPage from '../Containers/ProductListPage';
import ProductPage from '../Containers/ProductPage';
import CartPage from '../Containers/CartPage';
import SearchPage from '../Containers/SearchPage'


export default function () {
    return (
        <>
                <Switch>
                    <Route exact path="/shop" component={ProductListPage} />
                    <Route path="/shop/product" component={ProductPage} />
                    <Route exact path="/shop/cart" component={CartPage} />
                    <Route exact path="/shop/search" component={SearchPage} />
                    <Route component={ProductListPage} />
                </Switch>
        </>
    )
}