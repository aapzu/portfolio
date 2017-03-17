
import React, { Component } from 'react'
import styles from './square.pcss'

export default class Square extends Component {
	render() {
		return (
			<div className={[styles.square, this.props.className].join(' ')} ref={this.props.divRef}>
				<div className={styles.content}>
					{this.props.children}
				</div>
			</div>
		)
	}
}

Square.propTypes = {
	children: React.PropTypes.oneOfType([
		React.PropTypes.array,
		React.PropTypes.element
	]),
	className: React.PropTypes.string,
	divRef: React.PropTypes.func
}