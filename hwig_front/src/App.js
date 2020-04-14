import React from 'react';
import Router from './Router/index'
import GlobalStyles from "./GlobalStyles";
import {withRouter} from 'react-router-dom'

function App(props) {
  console.log(props)
  props.history.listen((location, action) => {
    console.log("on route change");
});
  return (
    <>
      <Router />
      <GlobalStyles />
    </>
  );
}

export default withRouter(App);
