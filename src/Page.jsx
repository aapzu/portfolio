import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

import App from './components/App'
import DefaultHeadMeta from './components/DefaultHeadMeta'

const Page = () => (
    <div id="page-content-wrapper">
        <DefaultHeadMeta />
        <App />
        <script dangerouslySetInnerHTML={{
            __html: 'ga(\'create\', \'UA-90311392-1\', \'auto\');ga(\'send\', \'pageview\');'
        }} />
    </div>
)

export default Page
