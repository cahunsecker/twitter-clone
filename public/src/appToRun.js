import React from 'react';
import ReactDOM from 'react-dom';
import Twitter from './components/Twitter';
import configureStore from './store/configureStore';
import AppRouter from './router/AppRouter';
import {Provider} from 'react-redux';
import 'normalize-css/normalize.css'
import './Styles/styles.scss';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
);

ReactDOM.render(jsx, document.getElementById('app'));

