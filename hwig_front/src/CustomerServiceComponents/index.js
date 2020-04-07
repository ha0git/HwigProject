import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CSNavi from './CSNavi'
import NoticePage from '../Containers/NoticePage'
import QuestionPage from '../Containers/QuestionPage'
import TemplatePage from '../Containers/TemplatePage'
import BoardPage from '../Containers/BoardPage'
import QnaWriteFormPage from '../Containers/QnaWriteFormPage'

export default function () {
    return (
        <>
            <Router>
                <CSNavi/>
                <Switch>
                    <Route exact path="/customer/notice" component={NoticePage} />
                    <Route path="/customer/notice/board" component={BoardPage}/>
                    <Route exact path="/customer/qna" component={QuestionPage} />
                    <Route path="/customer/qna/board" component={QnaWriteFormPage}/>
                    <Route path="/customer/temp" component={TemplatePage} />
                    <Route component={NoticePage} />
                </Switch>
            </Router>
        </>
    )
}
