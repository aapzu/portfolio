import React, { Component } from 'react'

import './app.pcss'
import './bootstrap-overrides.css'
import Title from '../Title'
import What from '../What'
import Who from '../Who'
import Where from '../Where'

export default class App extends Component {
    render() {
        return (
            <div className="container-fluid container">
                <Title />
                <Who />
                <What />
                <Where />
            </div>
        )
    }
}