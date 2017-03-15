
import React, {Component} from 'react'
import {Row, Col} from 'reactstrap'
import styles from './title.pcss'
import {Parallax, scrollScreen} from 'rc-scroll-anim'

export default class Title extends Component {
	render() {
		return (
			<section id="title" className={styles.titleSection}>
				<Row className={styles.titleRow}>
					<Col xs={12} md={6}>
						<h1 className={styles.title}>
							<Parallax
								animation={{
									playScale: [0.65, 1.0],
									translateX: '-150%'
								}}
								style={{
									transform: 'translateX(0)'
								}}
							    component="span"
							>
								Aapeli
							</Parallax>
							<Parallax
								animation={{
									playScale: [0.6, 1.0],
									translateX: '-250%'
								}}
								style={{
									transform: 'translateX(0)'
								}}
								component="span"
							>
								Haanpuu
							</Parallax>
						</h1>
					</Col>
					<Col xs={12} md={6} className={styles.description}>
						<Parallax
							animation={{
								playScale: [0.65, 1.0],
								translateX: '200%'
							}}
							style={{
								transform: 'translateX(0)'
							}}
						    component="p"
						>
							Who am I? Glad you asked. I am a young open-minded coder who loves intellectual challenges, all kinds of sports and some artsy stuff, like handicrafts.
						</Parallax>
						<Parallax
							animation={{
								playScale: [0.55, 1.0],
								translateX: '250%'
							}}
							style={{
								transform: 'translateX(0)'
							}}
							component="p"
						>
							Want to find out more? Please take a look at this site or <a className="animate" href="#where">contact me!</a>
						</Parallax>
					</Col>
				</Row>
			</section>
		)
	}
}