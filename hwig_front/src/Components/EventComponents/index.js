import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EventListPage from '../Containers/EventListPage'
import EventPage from '../Containers/EventPage';

export default function () {
    return (
        <>
                <Switch>
                    <Route exact path="/eventlist" component={EventListPage} />
                    <Route path="/eventlist/event" component={EventPage} />
                    <Route component={EventListPage} ></Route>
                </Switch>
        </>
    )
}