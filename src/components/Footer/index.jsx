import React, { Component } from 'react'
import styles from './footer.pcss'
import FontAwesome from 'react-fontawesome'

export default class Footer extends Component {
    render() {
        return (
            <footer className={styles.footer}>
                <div className={[styles.footerContainer, 'container'].join(' ')}>
					<span className="float-left">
						<FontAwesome name="copyright"/>&nbsp;Aapeli Haanpuu
					</span>
                    <span className="float-right">{new Date().getFullYear()}</span>
                </div>
            </footer>
        )
    }
}