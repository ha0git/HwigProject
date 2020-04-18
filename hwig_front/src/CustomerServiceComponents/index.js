import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CSNavi from './CSNavi'
import {connect} from 'react-redux'
import NoticePage from '../Containers/NoticePage'
import QuestionPage from '../Containers/QuestionPage'
import TemplatePage from '../Containers/TemplatePage'
import BoardPage from '../Containers/BoardPage'
import QnaWriteFormPage from '../Containers/QnaWriteFormPage'

function Index(props) {
    console.log(props)
    return (
        <>
                <CSNavi/>
                <Switch>
                    <Route exact path="/customer/notice" component={NoticePage} />
                    <Route path="/customer/notice/board" component={BoardPage}/>
                    <Route exact path="/customer/qna" render={(props) => <QuestionPage isLogged={props.isLogged} history={props.history} location={props.location}/>} />
                    <Route path="/customer/qna/board" component={QnaWriteFormPage}/>
                    <Route path="/customer/temp" component={TemplatePage} />
                    <Route component={NoticePage} />
                </Switch>
        </>
    )
}


const mapStateToProps = (state, ownProps) => {
    return {
        isLogged: state.reducer.isLogged
    }
}

Index = connect(mapStateToProps)(Index)

export default Index