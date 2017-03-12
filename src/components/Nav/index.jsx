
import React, { Component } from 'react'
import { Navbar } from 'reactstrap'
import styles from './nav.pcss'

export default class Nav extends Component {
	render() {
		return (
			<Navbar className={styles.nav} >
				<Navbar.Header>
					<Navbar.Brand className={styles.brand}>
						<a href="#">Aapeli Haanpuu</a>
					</Navbar.Brand>
				</Navbar.Header>
			</Navbar>
		)
	}
}