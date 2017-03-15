
import React, {Component} from 'react'
import {Row, Col} from 'reactstrap'
import Scrollchor from 'react-scrollchor'
import styles from './title.pcss'

export default class Title extends Component {
	render() {
		return (
			<section id="title" className={styles.titleSection}>
				<Row className={styles.titleRow}>
					<Col xs={12} md={6}>
						<h1 className={styles.title}>
							<span className={styles.fadeAnim}>
								Aapeli
							</span>
							<span className={styles.fadeAnim}>
								Haanpuu
							</span>
						</h1>
					</Col>
					<Col xs={12} md={6} className={styles.description}>
						<p className={styles.fadeAnim}>
							Who am I? Glad you asked. I am a young open-minded coder who loves intellectual challenges, all kinds of sports and some artsy stuff, like handicrafts.
						</p>
						<p className={styles.fadeAnim}>
							Want to find out more? Please take a look at this site or <Scrollchor to="#where">contact me!</Scrollchor>
						</p>
					</Col>
				</Row>
			</section>
		)
	}
}