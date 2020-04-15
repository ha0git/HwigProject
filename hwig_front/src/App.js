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
      setFirstPageLoad(1)
      props.check_session("cds/session")
    }
  })
  props.history.listen((location, action) => {
    console.log("on route change", location, action);
    props.check_session("cds/session")
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
      data: state.reducer.data,
      isLogged: state.reducer.isLogged
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    check_session: (uri, data) =>  dispatch(check_session(uri))
  }
}

App = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

export default App

