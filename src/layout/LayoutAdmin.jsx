import Head from 'next/head';
import Image from 'next/image';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminLayout({ children, title }) {
    return (
        <>
            {/* Head */}
            <Head>
                <title>Café - {title}</title>
                <meta name="description" content="Quosco Cafetería" />
            </Head>
            {/* Layout */}
            <div className="flex flex-col justify-center items-center md:flex-row">
                {/* SideBar */}
                <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
                    <Image
                        width={300}
                        height={100}
                        src="/assets/img/logo.svg"
                        alt="imagen logotipo"
                    />
                </aside>
                {/* Cuerpo */}
                <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen md:overflow-y-scroll">
                    <div className="p-10">{children}</div>
                </main>
            </div>
            <ToastContainer />
        </>
    );
}
