
import React, { Component } from 'react'
import { Col } from 'reactstrap'
import styles from './what.pcss'
import Masonry from 'react-masonry-component'

export default class What extends Component {
	render() {
		return (
			<section id="what">
				<Col xs={12} md={8} lg={6}>
					<h2>Code and stuff</h2>
				</Col>
				<Masonry className={styles.masonry}>
					<Col xs={{
						size: 6,
						offset: 3
					}} md={3} className="offset-md-0">
						<img src="assets/img/RollsRoyce.jpg" alt="A screenshot of app made for Rolls-Royce"/>
					</Col>
					<Col xs={12} md={9}>
						<p>
							Top words for me at the moment are Node.js, React.js, HTML5 and CSS3. As you may notice,
							I'm mostly into front-end development nowadays, but don't mind doing good old back-end either.
						</p>
						<p>
							Some of these projects I've done either for myself or for my computer science studies (In <a href="https://www.helsinki.fi/en">University of Helsinki</a>).
							Those can be found on my <a href="https://www.github.com/Aapzu" target="_blank">Github page</a>.
							However, most of my coding I've done for my current employer, <a href="http://www.streamr.com"><img className={styles.streamrLogo} src="assets/img/streamr_logo.png" alt="Streamr"/></a>.
							If you have any questions considering any of these projects, please don't be afraid to ask!
						</p>
						<p>
							Also, on my free time I've done many origami projects, and like to draw and do other kinds of handicrafts too.
						</p>
					</Col>
					<Col xs={{
						size: 6,
						offset: 3
					}} md={3} className="offset-md-0">
						<img src="assets/img/Foller.jpg" alt="A screenshot of Foller"/>
					</Col>
					<Col xs={12} md={6}>
						<img src="assets/img/Streamr_dashboard_editor.jpg" alt="A screenshot of Streamr's dashboard editor"/>
					</Col>
				</Masonry>
			</section>
		)
	}
}