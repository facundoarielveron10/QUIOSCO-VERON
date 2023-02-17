import { useEffect, useState } from 'react';
import '@/styles/globals.css';
import { QuioscoProvider } from 'context/QuioscoProvider';

export default function App({ Component, pageProps }) {
    // --- ESTADOS --- //
    const [paginaLista, setPaginaLista] = useState(false);
    // --- --- --- --- --- //

    // --- EFECTOS --- //
    useEffect(() => {
        setPaginaLista(true);
    }, []);
    // --- --- --- --- --- //

    return paginaLista ? (
        <QuioscoProvider>
            <Component {...pageProps} />
        </QuioscoProvider>
    ) : null;
}
