import React from 'react'
import { object, arrayOf } from 'prop-types'
import Helmet from 'react-helmet'

const DefaultHeadMeta = ({ meta, scripts }, { metadata: { pkg } }) => (
    <div hidden>
        <Helmet
            title="Aapeli Haanpuu"
            meta={ [
                {
                    name: 'keywords',
                    content: 'Aapeli, Haanpuu, Portfolio, Developer'
                },
                {
                    name: 'author',
                    content: 'Aapeli Haanpuu'
                },
                {
                    property: 'og:title',
                    content: pkg.description
                },
                {
                    property: 'og:description',
                    content: 'A portfolio on the works and job history of Aapeli Haanpuu.'
                },
                {
                    property: 'og:image',
                    content: `${pkg.homepage}/assets/img/Kasvokuva1_337x337.jpg`
                },
                {
                    property: 'google-site-verification',
                    content: 'FPqs_XFLgs8HJLtHgcGAz95ATDOKUOZFv2KGCFfYXTQ'
                },
                ...(meta || []),
            ] }
            script={[
                {
                    src: 'https://cdn.polyfill.io/v2/polyfill.min.js'
                },
                ...(scripts || []),
            ]}
        />
        
        <Helmet
            meta={ [{
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            }] }
        />
        <style>{ '@-ms-viewport { width: device-width; } ' }</style>
        <link rel='icon' href='img/favicon.ico'/>
        <script async src='https://www.google-analytics.com/analytics.js' />
    </div>
)

DefaultHeadMeta.propTypes = {
    meta: arrayOf(object),
    scripts: arrayOf(object),
}

DefaultHeadMeta.contextTypes = {
    metadata: object.isRequired,
}

export default DefaultHeadMeta
