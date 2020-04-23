import React, {useState, useEffect} from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import CSNavi from './CSNavi'
import {connect} from 'react-redux'
import NoticePage from '../Containers/NoticePage'
import QuestionPage from '../Containers/QuestionPage'
import TemplatePage from '../Containers/TemplatePage'
import BoardPage from '../Containers/BoardPage'
import QnaWriteFormPage from '../Containers/QnaWriteFormPage'

function Index(props) {
    console.log(props)
    const [isCheck, setIsCheck] = useState(false)
    const [isLogged, setisLogged] = useState(false)
        if(isCheck !== props.isCheck){
            setIsCheck(props.isCheck)
        }
        if(isLogged !== props.isLogged){
            setisLogged(props.isLogged)
        }

    return (
        <>
                <CSNavi/>
                <Switch>
                    <Route exact path="/customer/notice" component={NoticePage} />
                    <Route path="/customer/notice/board" component={BoardPage}/>
                    <Route exact path="/customer/qna" render={(props) => {
                        if(isCheck){
                            return <QuestionPage isLogged={isLogged} history={props.history} location={props.location}/>
                        }else{
                            props.history.push('/login')
                        }
                        }
                    }/>
                    <Route path="/customer/qna/board" render={(props) => {
                        if(isCheck){
                            return <QnaWriteFormPage/>
                        }else{
                            props.history.push('/login')
                        }
                        }
                        }/>
                    <Route path="/customer/temp" component={TemplatePage} />
                    <Route component={NoticePage} />
                </Switch>
        </>
    )
}


const mapStateToProps = (state, ownProps) => {
    return {
        isLogged: state.reducer.isLogged,
        isCheck: state.reducer.isCheck
    }
}

Index = withRouter(connect(mapStateToProps)(Index))

export default Index