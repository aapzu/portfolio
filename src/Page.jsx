
import React, {Component} from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

import App from './components/App'
import DefaultHeadMeta from './components/DefaultHeadMeta'
import Footer from './components/Footer'

export default class Page extends Component {
	render() {
		return (
			<div id="page-content-wrapper">
				<DefaultHeadMeta />
				<App />
				<Footer />
				<script dangerouslySetInnerHTML={{
					__html: 'ga(\'create\', \'UA-90311392-1\', \'auto\');ga(\'send\', \'pageview\');'
				}}></script>
			</div>
		)
	}
}