import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import ProductListPage from '../Containers/ProductListPage';
import ProductPage from '../Containers/ProductPage';
import CartPage from '../Containers/CartPage';
import SearchPage from '../Containers/SearchPage'
import { connect } from 'react-redux';


function ShopIndex(props) {
    const [isLogged, setIsLogged] = useState(false);
    const [isCheck, setIsCheck] = useState(false)

    if (isCheck !== props.isCheck) {
        setIsCheck(props.isCheck)
    }
    if (isLogged !== props.isLogged) {
        setIsLogged(props.isLogged)
    }
    return (
        <>
            <Switch>
                <Route exact path="/shop" component={ProductListPage} />
                <Route path="/shop/product" component={ProductPage} />
                <Route exact path="/shop/cart" render={(props) => {
                    if (isCheck) {
                        if (!isLogged) {
                            props.history.push('/login')
                        } else {
                            return <CartPage />
                        }
                    }
                }
                } />
                <Route exact path="/shop/search" component={SearchPage} />
                <Route component={ProductListPage} />
            </Switch>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        isLogged: state.reducer.isLogged,
        isCheck: state.reducer.isCheck
    }
}

ShopIndex = withRouter(connect(mapStateToProps)(ShopIndex))
export default ShopIndex