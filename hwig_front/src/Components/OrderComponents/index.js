import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import OrderPage from '../Containers/OrderPage';
import OrderOkPage from '../Containers/OrderOkPage'
import { connect } from 'react-redux';


function OrderIndex(props) {
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
                <Route exact path="/order" render={(props) => {
                    if (isCheck) {
                        if (!isLogged) {
                            props.history.push('/login')
                        } else {
                            return <OrderPage />
                        }
                    }
                }} />
                <Route path="/order/orderOk" component={OrderOkPage} />
                <Route component={OrderPage} />
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
OrderIndex = withRouter(connect(mapStateToProps)(OrderIndex))
export default OrderIndex