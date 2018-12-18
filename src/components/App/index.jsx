import React from 'react'

import './app.pcss'
import './bootstrap-overrides.css'
import Hero from '../Hero'
import Contact from '../Contact'

const App = () => (
    <div className="container-fluid container">
        <Hero />
        <Contact />
    </div>
)

export default App
