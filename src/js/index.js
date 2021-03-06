/**
 * Created by ninghai on 2018/7/7.
 *
 */
import React from 'react'
// import 'react-fastclick'  // 这个需要放到react下方才行
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Home from './containers/Home'

import Redbox from 'redbox-react'
const rootEl = document.getElementById('app');

render(
    <AppContainer errorReporter={Redbox}>
        <Home />
    </AppContainer>,
    rootEl
)

if (module.hot) {
    /**
     * Warning from React Router, caused by react-hot-loader.
     * The warning can be safely ignored, so filter it from the console.
     * Otherwise you'll see it every time something changes.
     * See https://github.com/gaearon/react-hot-loader/issues/298
     */
    const orgError = console.error; // eslint-disable-line no-console
    console.error = (message) => { // eslint-disable-line no-console
        if (message && message.indexOf('You cannot change <Home />;') === -1) {
            // Log the error as normally
            orgError.apply(console, [message]);
        }
    };

    module.hot.accept('./containers/Home', () => {
        // If you use Webpack 2 in ES modules mode, you can
        // use <App /> here rather than require() a <NextApp />.
        const NextApp = require('./containers/Home').default;
        render(
            <AppContainer errorReporter={Redbox}>
                <NextApp />
            </AppContainer>,
            rootEl
        )
    });
}