/**
 * Created by ninghai on 2018/7/7.
 *
 */
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import {
    App,
    Home
} from './containers';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
    </Route>
);