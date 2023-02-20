import useQuiosco from 'hooks/useQuiosco';
import Layout from '@/layout/Layout';
import ResumenProducto from '@/components/ResumenProducto';

export default function Resumen() {
    // --- CONTEXTs --- //
    const { pedido } = useQuiosco();
    // --- --- --- --- --- //

    return (
        <Layout title="Resumen">
            {/* Titulo */}
            <h1 className="text-4xl font-black">Resumen</h1>
            {/* Descripcion */}
            <p className="text-2xl my-10">Revisa tu Pedido</p>

            {/* Pedidos */}
            {pedido.length === 0 ? (
                <p className="text-center text-2xl uppercase">
                    No Hay Productos En Tu Pedido
                </p>
            ) : (
                pedido.map((producto) => (
                    <ResumenProducto key={producto.id} producto={producto} />
                ))
            )}
        </Layout>
    );
}
