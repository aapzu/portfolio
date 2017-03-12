
import React, { Component } from 'react'
import MultiResImage from './MultiResImage'
import Square from '../Square'
import { Row, Col } from 'reactstrap'
import styles from './who.pcss'

export default class Who extends Component {
	render() {
		return (
			<section id="who" className={styles.whoSection}>
				<Row className={styles.titleRow}>
					<Col xs={12} md={6}>
						<h1 className={styles.title}>Aapeli Haanpuu</h1>
					</Col>
					<Col xs={12} md={6} className={styles.description}>
						<p>Who am I? Glad you asked. I am a young open-minded coder who loves intellectual challenges, all kinds of sports and some artsy stuff, like handicrafts.</p>
						<p>Want to find out more? Please take a look at this site or <a className="animate" href="#where">contact me!</a></p>
					</Col>
				</Row>
				<Row className={styles.fpBoxRow}>
					<Col xs={6} lg={4} className={styles.fpBoxContainer}>
						<Square className={styles.fpBox}>
							<p className={styles.fpBoxTitle}>
								<a href="#learnerDescription" className="hidden-sm-up">Learner</a>
								<span className="hidden-xs-down">Learner</span>
							</p>
							<div className={styles.fpBoxContent}>
								For me, every day is an opportunity to learn something new.
								Even if it's biking backwards or learning a new coding language
								I never miss the chance.
							</div>
						</Square>
					</Col>
					<Col xs={6} lg={4} className={styles.fpBoxContainer}>
						<Square className={[styles.fpBox, styles.imageContainer].join(' ')}>
							<MultiResImage
								smallSrc="assets/img/Siluetti_150x150.jpg"
								mediumSrc="assets/img/Siluetti_337x337.jpg"
								largeSrc="assets/img/Siluetti_1000x1000.jpg"
								alt="A silhouette picture of Aapeli."/>
						</Square>
					</Col>
					<Col xs={6} lg={4} className={styles.fpBoxContainer}>
						<Square className={styles.fpBox}>
							<p className={styles.fpBoxTitle}>
								<a href="#thinkerDescription" className="hidden-sm-up">Thinker</a>
								<span className="hidden-xs-down">Thinker</span>
							</p>
							<div className={styles.fpBoxContent}>
								Problem-solving and thinking outside the box is my thing.
								I like to take my time to ponder things thoroughly,
								but don't hesitate to make decisions.
							</div>
						</Square>
					</Col>
					<Col xs={6} lg={4} className={styles.fpBoxContainer}>
						<Square className={[styles.fpBox, styles.imageContainer].join(' ')}>
							<MultiResImage
								smallSrc="assets/img/Kasvokuva1_150x150.jpg"
								mediumSrc="assets/img/Kasvokuva1_337x337.jpg"
								largeSrc="assets/img/Kasvokuva1_1000x1000.jpg"
								alt="A headshot picture of Aapeli."/>
						</Square>
					</Col>
					<Col xs={6} lg={4} className={styles.fpBoxContainer}>
						<Square className={styles.fpBox}>
							<p className={styles.fpBoxTitle}>
								<a href="#achieverDescription" className="hidden-sm-up">Achiever</a>
								<span className="hidden-xs-down">Achiever</span>
							</p>
							<div className={styles.fpBoxContent}>
								I like to get things done.
								I enjoy doing handicrafts because, just as coding,
								it rewards with instant results.
							</div>
						</Square>
					</Col>
					<Col xs={6} lg={4} className={styles.fpBoxContainer}>
						<Square className={[styles.fpBox, styles.imageContainer].join(' ')}>
							<MultiResImage
								smallSrc="assets/img/Kasvokuva2_150x150.jpg"
								mediumSrc="assets/img/Kasvokuva2_337x337.jpg"
								largeSrc="assets/img/Kasvokuva2_1000x1000.jpg"
								alt="Another headshot picture of Aapeli."/>
						</Square>
					</Col>
				</Row>
				<div className={['hidden-sm-up', styles.descriptionBox].join(' ')}>
					<Col xs={12}>
						<div id="learnerDescription" className={styles.descriptionContainer}>
							<h3>Learner</h3>
							<p>
								For me, every day is an opportunity to learn something new.
								Even if it's biking backwards or learning a new coding language
								I never miss the chance.
							</p>
						</div>
						<div id="thinkerDescription" className={styles.descriptionContainer}>
							<h3>Thinker</h3>
							<p>
								Problem-solving and thinking outside the box is my thing.
								I like to take a time to ponder things thoroughly,
								but I don't hesitate to make decisions.
							</p>
						</div>
						<div id="achieverDescription" className={styles.descriptionContainer}>
							<h3>Achiever</h3>
							<p>
								I like to get things done.
								I enjoy doing handicrafts because, just as coding,
								it rewards with instant results.
							</p>
						</div>
					</Col>
				</div>
			</section>
		)
	}
}
