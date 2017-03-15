import React, { Component } from 'react'
import Square from '../Square'
import styles from './fp-box.pcss'

export default class FpBox extends Component {
	render() {
		return (
			this.props.type !== 'image' ?
				<Square className={styles.fpBox}>
					<p className={styles.fpBoxTitle}>
						<a href="#learnerDescription" className="hidden-sm-up">
							{this.props.title}
						</a>
						<span className="hidden-xs-down">
							{this.props.title}
						</span>
					</p>
					<div className={styles.fpBoxContent}>
						{this.props.description}
					</div>
				</Square>
				:
				<Square className={[styles.fpBox, styles.imageContainer].join(' ')}>
					{this.props.children}
				</Square>
		)
	}
}

FpBox.propTypes = {
	title: React.PropTypes.string,
	description: React.PropTypes.string,
	type: React.PropTypes.oneOf(['image']),
	children: React.PropTypes.oneOfType([
		React.PropTypes.element,
		React.PropTypes.arrayOf(React.PropTypes.element)
	])
}