import React, { Component } from 'react'
import Square from '../../Square'
import styles from './fp-box.pcss'

export default class FpBox extends Component {
    render() {
        return (
            this.props.type !== 'image' ?
                <Square className={styles.fpBox} divRef={this.props.divRef}>
                    <div className={styles.fpBoxTitle}>
                        <p>
                            {this.props.title}
                        </p>
                    </div>
                    <div className={styles.fpBoxContent}>
                        {this.props.description}
                    </div>
                </Square>
                :
                <Square className={[styles.fpBox, styles.imageContainer].join(' ')} divRef={this.props.divRef}>
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
    ]),
    divRef: React.PropTypes.func
}