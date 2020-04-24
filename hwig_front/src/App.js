import React, {useState, useEffect} from 'react';
import Router from './Router/index'
import GlobalStyles from "./GlobalStyles";
import {withRouter} from 'react-router-dom'
import {check_session} from './Actions/index'
import {connect} from 'react-redux'

function App(props) {
  const [firstPageLoad, setFirstPageLoad] = useState(null)
  console.log(props)

  useEffect(() => {
    if(!firstPageLoad){
      console.log("firstPageLoad 실행")
      setFirstPageLoad(1)
      // props.check_session("cds/session")
      props.check_session("api/mlogin/session")
    }
  })
  props.history.listen((location, action) => {
    console.log("라우트 체인지 실행", location, action);
    // props.check_session("cds/session")
    props.check_session("api/mlogin/session")
});
  return (
    <>
      <Router />
      <GlobalStyles />
    </>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
      isLogged: state.reducer.isLogged
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    check_session: (uri) =>  dispatch(check_session(uri))
  }
}

App = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

export default App

