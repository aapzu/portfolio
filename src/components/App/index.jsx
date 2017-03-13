
import React, { Component } from 'react'

import './app.pcss'
import What from '../What'
import Who from '../Who'
import Where from '../Where'

export default class App extends Component {
	render() {
		return (
			<div className="container-fluid container">
				<Who />
				<What />
				<Where />
			</div>
		)
	}
}