import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/favicon/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon/favicon-16x16.png"
            />
            <link rel="shortcut icon" href="/favicon/favicon.ico" />
            <link
                rel="stylesheet"
                type="text/css"
                href="//fonts.googleapis.com/css?family=Architects+Daughter"
            />
            <meta name="msapplication-TileColor" content="#000000" />
            <meta name="theme-color" content="#000" />
            <title>Twitch search media</title>
        </Head>
    );
}
