import useQuiosco from 'hooks/useQuiosco';
import { formatearDinero } from 'helpers';
import Layout from '@/layout/Layout';

export default function Total() {
    // --- CONTEXTs --- //
    const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco();
    // --- --- --- --- --- //

    return (
        <Layout title="Total y Confirmar Pedido">
            {/* Titulo */}
            <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
            {/* Descripcion */}
            <p className="text-2xl my-10">Confirma tu Pedido a Continuación</p>

            {/* Formulario */}
            <form onSubmit={colocarOrden}>
                {/* Nombre */}
                <div>
                    <label
                        className="block uppercase text-slate-800 font-bold text-xl"
                        htmlFor="nombre"
                    >
                        Nombre Completo
                    </label>
                    <input
                        className="bg-gray-200 w-full lg:w-1/2 mt-3 p-2 rounded-md"
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                {/* Pago */}
                <div className="mt-10">
                    <p className="text-2xl">
                        Total a pagar: {''}{' '}
                        <span className="font-bold text-amber-500">
                            {formatearDinero(total)}
                        </span>
                    </p>
                </div>
                {/* Enviar Formulario */}
                <div className="mt-5">
                    {pedido.length === 0 ||
                    nombre === '' ||
                    nombre.length < 3 ? (
                        <>
                            {pedido.length === 0 ? (
                                <p className="bg-red-600 rounded text-white uppercase text-center font-bold mb-4 p-1 w-full lg:w-1/2">
                                    Debe tener al menos 1 producto en su pedido
                                </p>
                            ) : (
                                ''
                            )}
                            {nombre.length === 0 ? (
                                <p className="bg-red-600 rounded text-white uppercase text-center font-bold mb-4 p-1 w-full lg:w-1/2">
                                    Debe colocar su nombre completo
                                </p>
                            ) : (
                                ''
                            )}
                            <input
                                className="bg-gray-400 cursor-not-allowed text-center px-5 py-2 rounded uppercase font-bold text-white w-full lg:w-1/2"
                                value="Confirmar Pedido"
                                disabled
                            />
                        </>
                    ) : (
                        <input
                            className="bg-indigo-600 cursor-pointer text-center px-5 py-2 rounded uppercase font-bold text-white w-full lg:w-1/2"
                            value="Confirmar Pedido"
                            type="submit"
                        />
                    )}
                </div>
            </form>
        </Layout>
    );
}
