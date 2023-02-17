import useQuiosco from 'hooks/useQuiosco';
import Layout from '@/layout/Layout';
import Producto from '@/components/Producto';

export default function Home() {
    // --- CONTEXTs --- //
    const { categoriaActual } = useQuiosco();
    // --- --- --- --- --- //

    return (
        <Layout title={`Menu ${categoriaActual?.nombre}`}>
            {/* Nombre de la Categoria */}
            <h1 className="font-black text-4xl">{categoriaActual?.nombre}</h1>
            {/* Texto de Ayuda */}
            <p className="text-2xl my-10">
                Elige y personaliza tu pedido a continuacion
            </p>
            {/* Productos */}
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {categoriaActual?.productos?.map((producto) => (
                    <Producto key={producto.id} producto={producto} />
                ))}
            </div>
        </Layout>
    );
}
