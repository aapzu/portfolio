
import styles from './animatedName.pcss'

import React, { Component } from 'react'

export default class AnimatedName extends Component {
	render() {
		return (
			<div className={styles.background}>
				<div className={styles.animatedNameContainer}>
					<div className={[styles.namePartContainer, styles.left].join(' ')}>
						<span className={styles.openingText}>AAPELI</span>
						<div className={styles.animatedLine} />
					</div>
					<div className={[styles.namePartContainer, styles.right].join(' ')}>
						<span className={styles.openingText}>HAANPUU</span>
						<div className={styles.animatedLine} />
					</div>
				</div>
			</div>
		)
	}
}