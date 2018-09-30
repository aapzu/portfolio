import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import classnames from 'classnames'
import styles from './hero.pcss'

export default class Hero extends Component {
    render() {
        return (
            <section id="title" className={styles.titleSection}>
                <Row className={styles.titleRow}>
                    <Col xs={12} md={6}>
                        <div className={styles.title}>
							<p className={classnames(styles.fadeAnim, styles.fadeAnim1)}>
								Aapeli
							</p>
                            <p className={classnames(styles.fadeAnim, styles.fadeAnim2)}>
								Haanpuu
							</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className={styles.description}>
                        <Row>
                            <Col xs={12} md={6} className={classnames(styles.descriptionTitle, styles.fadeAnim, styles.fadeAnim3)}>
                                Fullstack web developer
                            </Col>
                            <Col xs={12} md={6} className={classnames(styles.techStack, styles.fadeAnim, styles.fadeAnim4)}>
                                <p className={styles.fadeAnimA}>JS</p>
                                <p className={styles.fadeAnimA}>CSS3</p>
                                <p className={styles.fadeAnimA}>HTML5</p>
                                <p pclassName={styles.fadeAnimA}>Node.js</p>
                                <p className={styles.fadeAnimA}>Java</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>
        )
    }
}