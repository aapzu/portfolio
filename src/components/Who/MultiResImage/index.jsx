import React, { Component } from 'react'
import styles from './multi-res-image.pcss'
import axios from 'axios'

export default class MultiResImage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			src: props.largeSrc
			,
			alt: props.alt
		}
		
		let largeLoaded = false
		axios.get(props.mediumSrc).then(() => {
			if (!largeLoaded) {
				this.setState({
					src: props.mediumSrc
				})
			}
		})
		axios.get(props.largeSrc).then(() => {
			largeLoaded = true
			this.setState({
				src: props.largeSrc
			})
		})
	}
	render() {
		return (
			<img className={styles.multiResImage}
				src={this.state.src}
				alt={this.state.alt}/>
		)
	}
	
}

MultiResImage.propTypes = {
	smallSrc: React.PropTypes.string.isRequired,
	mediumSrc: React.PropTypes.string.isRequired,
	largeSrc: React.PropTypes.string.isRequired,
	alt: React.PropTypes.string
}