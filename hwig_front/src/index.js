import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk'
import reducers from './Reducers/index'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router} from 'react-router-dom'

const store = createStore(reducers, applyMiddleware(ReduxThunk))

ReactDOM.render(
    
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    
    , document.getElementById('root'));

serviceWorker.unregister();
