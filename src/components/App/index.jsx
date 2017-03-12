
import React, { Component } from 'react'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

import './app.pcss'
import What from '../What'
import Who from '../Who'
import Where from '../Where'
import Footer from '../Footer'

import DefaultHeadMeta from '../DefaultHeadMeta'

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