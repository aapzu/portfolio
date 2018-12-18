import React from 'react'
import { Navbar } from 'reactstrap'
import styles from './nav.pcss'

const Nav = () => (
    <Navbar className={styles.nav}>
        <Navbar.Header>
            <Navbar.Brand className={styles.brand}>
                <a href="#">Aapeli Haanpuu</a>
            </Navbar.Brand>
        </Navbar.Header>
    </Navbar>
)

export default Nav
