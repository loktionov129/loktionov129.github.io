import Document, { Html, Head, Main, NextScript } from 'next/document'

function MetaTags() {
    return (
        <>
            <meta charSet="utf-8"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>

            <meta property="og:title" content="Aleksandr Loktionov's CV (.NET Developer)"/>
            <meta property="og:description" content="Aleksandr Loktionov's CV (.NET Developer)"/>
            <meta name="description" content="Aleksandr Loktionov's CV (.NET Developer)"/>

            <meta property="og:url" content="/"/>
            <meta property="og:image" content="/assets/images/avatar.jpeg"/>
            <meta name="twitter:image" content="/assets/images/avatar.jpeg"/>
            <meta name="twitter:card" content="summary"/>
            <meta name="theme-color" content="#000000"/>
        </>
    );
}

function Icons() {
    return (
        <>
            <link rel="icon" type="image/png" href="/assets/images/icon-16.png" sizes="16x16" />
            <link rel="icon" type="image/png" href="/assets/images/icon-24.png" sizes="24x24" />
            <link rel="icon" type="image/png" href="/assets/images/icon-32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="/assets/images/icon-48.png" sizes="48x48" />
            <link rel="icon" type="image/png" href="/assets/images/icon-64.png" sizes="64x64" />
            <link rel="icon" type="image/png" href="/assets/images/icon-96.png" sizes="96x96" />
            <link rel="icon" type="image/png" href="/assets/images/icon-128.png" sizes="128x128" />
            <link rel="icon" type="image/png" href="/assets/images/icon-192.png" sizes="192x192" />
            <link rel="icon" type="image/png" href="/assets/images/icon-256.png" sizes="256x256" />
            <link rel="icon" type="image/png" href="/assets/images/icon-512.png" sizes="512x512" />
            <link rel="apple-touch-icon" href="/assets/images/icon-120.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/icon-180.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/assets/images/icon-152.png" />
            <link rel="apple-touch-icon" sizes="167x167" href="/assets/images/icon-167.png" />
        </>
    );
}

// remove public/index.html and use this template instead.
export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="ru" prefix="og: http://ogp.me/ns#" className="dark keyboard" id="mainhtml">
                <Head>
                    <MetaTags />
                    <Icons />
                </Head>
                <body>
                <noscript>You need to enable JavaScript to run this app.</noscript>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}