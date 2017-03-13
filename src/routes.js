import React from 'react'
import { Router, Route, Redirect } from 'react-router'

import Page from './Page'

export default (
	<Router>
        <Route path="/" component={ Page } />
		<Redirect from="*" to="/"/>
	</Router>
)
