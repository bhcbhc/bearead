import React from 'react'
import { Route, IndexRoute } from 'react-router'

import {
  App,
  Home,
  Detail,
  Section
} from './containers'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
      <Route path="detail" >
          <IndexRoute component={Detail} />
          <Route path=":id" component={Section}/>
      </Route>
  </Route>
)