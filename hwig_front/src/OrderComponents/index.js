import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OrderPage from '../Containers/OrderPage';


export default function () {
    return (
        <>
            <Switch>
                <Route exact path="/order" component={OrderPage} />
                <Route component={OrderPage} />
            </Switch>
        </>
    )
}