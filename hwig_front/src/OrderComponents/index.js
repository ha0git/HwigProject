import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OrderPage from '../Containers/OrderPage';



export default function () {
    return (
        <>
<<<<<<< HEAD
            <Switch>
                <Route exact path="/order" component={OrderPage} />
                <Route component={OrderPage} />
            </Switch>
=======
                <Switch>
                    <Route exact path="/order" component={OrderPage} />
                    <Route component={OrderPage} />
                </Switch>
>>>>>>> 967a9798b77550fd85d0a22a9dfbffe87f5eb22d
        </>
    )
}