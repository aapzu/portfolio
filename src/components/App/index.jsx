import React, { Component } from 'react'

import './app.pcss'
import './bootstrap-overrides.css'
import Hero from '../Hero'
import Contact from '../Where'

export default class App extends Component {
    render() {
        return (
            <div className="container-fluid container">
                <Hero />
                <Contact />
            </div>
        )
    }
}