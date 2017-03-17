import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import Square from '../Square'
import FontAwesome from 'react-fontawesome'
import styles from './where.pcss'
import appStyles from '../App/app.pcss'

export default class Where extends Component {
	render() {
		return (
			<section id="where" className={styles.whereSection}>
				<Row className={[styles.whereContainer, styles.contacts].join(' ')}>
					<Col xs={12}>
						<h2>How to get in touch?</h2>
						<p>Please don't hesitate to contact me!</p>
					</Col>
					<Col md={4} xs={12} className={styles.contactBlock}>
						<Square>
							<a
								href="mailto:aapelisomeaddedstuffforbotshaanpuu@ikimorestufffi"
								className={appStyles.centeredY}
								ref={a => this.mailLink = a}
								onClick={() => this.mailLink.href = this.mailLink.href.replace(/someaddedstuffforbots/, '.').replace(/morestuff/, '.')}
							>
								<FontAwesome name="envelope-square" className={styles.icon}/>
								<p>Email</p>
							</a>
						</Square>
					</Col>
					<Col md={4} xs={12} className={styles.contactBlock}>
						<Square>
							<a href="https://www.github.com/Aapzu" className={appStyles.centeredY}>
								<FontAwesome name="github-square" className={styles.icon}/>
								<p>Github</p>
							</a>
						</Square>
					</Col>
					<Col md={4} xs={12} className={styles.contactBlock}>
						<Square>
							<a href="https://www.linkedin.com/in/aapeli-haanpuu" className={appStyles.centeredY}>
								<FontAwesome name="linkedin-square" className={styles.icon}/>
								<p>LinkedIn</p>
							</a>
						</Square>
					</Col>
				</Row>
			</section>
		)
	}
}
