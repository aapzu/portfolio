import React from 'react'
import { oneOfType, array, element, string, func } from 'prop-types'
import classnames from 'classnames'
import styles from './square.pcss'

const Square = ({ className, divRef, children }) => (
    <div className={classnames(styles.square, className)} ref={divRef}>
        <div className={styles.content}>
            {children}
        </div>
    </div>
)

Square.propTypes = {
    children: oneOfType([array, element]),
    className: string,
    divRef: func
}

export default Square
