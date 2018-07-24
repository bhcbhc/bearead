import React from 'react'
import { Route, IndexRoute } from 'react-router'

import {
  App,
  Home,
    Detail
} from './containers'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/detail/:id" component={Detail} />
  </Route>
);