import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import './index.css';
import reducer from './reducers'

import thunkMiddleware from 'redux-thunk'

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

// export default function configureStore(){
//     return createStore(
//         reducer, applyMiddleware(thunkMiddleware)
//     )
// }

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
