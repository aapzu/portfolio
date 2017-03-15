import React, { Component } from 'react'
import MultiResImage from './MultiResImage'
import { Row, Col } from 'reactstrap'
import FpBox from './FpBox'
import styles from './who.pcss'

export default class Who extends Component {
	render() {
		return (
			<section id="who" className={styles.whoSection}>
				<Row className={styles.fpBoxRow}>
					<Col xs={6} lg={4} className={styles.fpBoxContainer}>
						<FpBox
							title="Learner"
							description="For me, every day is an opportunity to learn something new. Even if it's biking backwards or learning a new coding language  never miss the chance."
						/>
					</Col>
					<Col xs={6} lg={4} className={styles.fpBoxContainer}>
						<FpBox type="image">
							<MultiResImage
								smallSrc="assets/img/Siluetti_150x150.jpg"
								mediumSrc="assets/img/Siluetti_337x337.jpg"
								largeSrc="assets/img/Siluetti_1000x1000.jpg"
								alt="A silhouette picture of Aapeli."/>
						</FpBox>
					</Col>
					<Col xs={6} lg={4} className={styles.fpBoxContainer}>
						<FpBox
							title="Thinker"
							description="Problem-solving and thinking outside the box is my thing.
								I like to take my time to ponder things thoroughly,
								but don't hesitate to make decisions."/>
					</Col>
					<Col xs={6} lg={4} className={styles.fpBoxContainer}>
						<FpBox type="image">
							<MultiResImage
								smallSrc="assets/img/Kasvokuva1_150x150.jpg"
								mediumSrc="assets/img/Kasvokuva1_337x337.jpg"
								largeSrc="assets/img/Kasvokuva1_1000x1000.jpg"
								alt="A headshot picture of Aapeli."/>
						</FpBox>
					</Col>
					<Col xs={6} lg={4} className={styles.fpBoxContainer}>
						<FpBox
							title="Achiever"
							description="I like to get things done.
								I enjoy doing handicrafts because, just as coding,
								it rewards with instant results."
						/>
					</Col>
					<Col xs={6} lg={4} className={styles.fpBoxContainer}>
						<FpBox type="image">
							<MultiResImage
								smallSrc="assets/img/Kasvokuva2_150x150.jpg"
								mediumSrc="assets/img/Kasvokuva2_337x337.jpg"
								largeSrc="assets/img/Kasvokuva2_1000x1000.jpg"
								alt="Another headshot picture of Aapeli."
							/>
						</FpBox>
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
