import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta
                    name="description"
                    content="Quiosco Online, donde poder ordenar comida y bebidas deliciosas"
                />
                <link rel="icon" type="image/png" href="/quiosco.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
