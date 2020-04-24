import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OrderPage from '../Containers/OrderPage';
import OrderOkPage from '../Containers/OrderOkPage'


export default function () {
    return (
        <>
            <Switch>
                <Route exact path="/order" component={OrderPage} />
                <Route path="/order/orderOk" component={OrderOkPage}/>
                <Route component={OrderPage} />
            </Switch>
        </>
    )
}