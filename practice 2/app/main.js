import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import calculateReducer from './reducers/reducers';
import App from './components/app';
import '../style/calculate.scss';

function main() {
    const store = createStore(calculateReducer);
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('content'),
    );
}
main();
