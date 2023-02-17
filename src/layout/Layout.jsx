import useQuiosco from 'hooks/useQuiosco';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import Sidebar from '@/components/Sidebar';
import Modal from 'react-modal';
import ModalProducto from '@/components/ModalProducto';

import 'react-toastify/dist/ReactToastify.css';

// --- React Modal --- //
const styles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#__next');
// --- --- --- --- --- //

export default function Layout({ children, title }) {
    // --- CONTEXTs ---//
    const { modal } = useQuiosco();
    // --- --- --- --- --- //
    return (
        <>
            {/* Head */}
            <Head>
                <title>Cafe - {title}</title>
                <meta name="description" content="Quiosco Cafeteria" />
            </Head>

            {/* Layout */}
            <div className="md:flex">
                {/* Sidebar */}
                <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
                    <Sidebar />
                </aside>
                {/* Cuerpo */}
                <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen md:overflow-y-scroll">
                    <div className="p-10">{children}</div>
                </main>
            </div>

            {/* Modal */}
            {modal ? (
                <Modal isOpen={modal} style={styles}>
                    <ModalProducto />
                </Modal>
            ) : null}

            {/* Notificacion */}
            <ToastContainer />
        </>
    );
}
