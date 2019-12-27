<script>
    import { blur } from 'svelte/transition'
    import { goto } from '@sapper/app'
    import { onMount } from 'svelte'
    import Page from '../components/Page.svelte'
    import PageIndicator from '../components/PageIndicator.svelte'

    const name = 'aapeli haanpuu'

    let fp
    const pages = ['about', 'experience', 'contact']
    const descriptions = {
        about: 'fullstack web developer',
    }
    let anchor = pages[0]

    const items = [
        'javascript',
        'css',
        'react.js',
        'web-development',
        'juggling',
        'express.js',
        'typescript',
        'node.js',
        'origami',
        'html',
        'redux.js',
        'java',
        'groovy',
        'es6',
        'web3',
        'martial arts',
    ]
    const experienceLinks = [{
        title: 'gofore',
        href: 'https://www.gofore.com',
    }, {
        title: 'streamr',
        href: 'https://streamr.network',
    }]
    const contactLinks = [{
        title: 'linkedin',
        href: 'https://www.linkedin.com/in/aapeli-haanpuu',
    }, {
        title: 'github',
        href: 'https://github.com/aapzu',
    }, {
        title: 'cv',
        href: 'https://aapzu.github.io/resume/resume.pdf',
    }]

    onMount(async () => {
        const { default: fullpage } = await import('fullpage.js')
        new fullpage('#fullpage', {
            interlockedSlides: false,
            dragAndMove: false,
            anchors: pages,
            onLeave: (orig, dest) => {
                anchor = dest.anchor
            },
        })
    })

    const onPageClick = (anchor) => {
        fp.moveTo(anchor)
    }
</script>

<style>
    #fullpage,
    .section,
    .container {
        height: 100%;
    }

    .header {
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 2;
        display: flex;
        justify-content: flex-end;
    }

    .container {
        /*display: flex;*/
        /*width: 100%;*/
        /*justify-content: space-between;*/
    }

    .description {
        /*position: absolute;*/
        /*top: 0;*/
        /*right: 0;*/
        height: 120px;
        width: 500px;
        border-color: var(--secondary);
        border-style: solid;
        border-width: 2px;
        border-left-width: 0;
        border-bottom-width: 0;
        align-self: flex-end;
        text-align: center;
        margin: 48px 48px 0 0;
    }

    .description h2 {
        margin-top: 10px;
    }

    .footer {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        position: fixed;
        bottom: 0;
        z-index: 2;
        width: 100%;
    }

    .footer .left {
        width: 500px;
        height: 120px;
        border-left: 2px solid var(--secondary);
        border-bottom: 2px solid var(--secondary);
        margin: 0 0 48px 48px;
        display: flex;
        align-items: flex-end;
    }

    .footer .left h1 {
        margin-bottom: 10px;
    }

    .footer .right {
        margin: 0 48px 48px 0;
    }

    .footer h1 {
        display: inline-block;
        text-align: center;
        width: 100%;
    }

    /* mobile */
    @media (max-width: 576px) {
        .header .description,
        .footer .left {
            height: 32px;
            width: 240px;
        }
        .header .description {
            margin: 24px 24px 0 0;
        }
        .footer .left {
            margin: 0 0 24px 24px;
        }
        .footer .left h1 {
            font-size: 24px;
            text-align: left;
            margin-left: 16px;
            padding-bottom: 2px;
            margin-bottom: 4px;
        }
        .description h2 {
            font-size: 16px;
            text-align: right;
            margin-right: 8px;
            margin-top: 3px;
        }
        .footer .right {
            position: fixed;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            margin: 0 22px 0;
        }
    }

    /* small tablet */
    @media (max-width: 768px) {
    }

    /* large tablet */
    @media (max-width: 992px) {
    }
</style>

<div class="container">
    <div class="header">
        <div class="description">
            <h2 transition:blur>{descriptions[anchor] || anchor}</h2>
        </div>
    </div>
    <div class="footer">
        <div class="left">
            <h1>{name}</h1>
        </div>
        <div class="right">
            <PageIndicator {anchor} {pages} onClick={onPageClick} />
        </div>
    </div>
    <div id="fullpage">
        <div class="section">
            <Page
                    {onPageClick}
                    {items}
                    {name}
                    {pages}
                    {anchor}
            />
        </div>
        <div class="section">
            <Page
                    links={experienceLinks}
                    {onPageClick}
                    {name}
                    {pages}
                    {anchor}
            />
        </div>
        <div class="section">
            <Page
                    links={contactLinks}
                    {onPageClick}
                    {name}
                    {pages}
                    {anchor}
            />
        </div>
    </div>
</div>
