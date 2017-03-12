
import React, {Component} from 'react'

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
				<script>
					{"(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-90311392-1', 'auto');ga('send', 'pageview');"}
				</script>
			</div>
		)
	}
}