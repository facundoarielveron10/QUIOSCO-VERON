import { useEffect, useState } from 'react';
import { formatearDinero } from 'helpers';
import useQuiosco from 'hooks/useQuiosco';
import Image from 'next/image';

export default function ModalProducto() {
    // --- CONTEXTs --- //
    const { producto, handleChangeModal, handleAgregarPedido, pedido } =
        useQuiosco();
    // --- --- --- --- --- //

    // --- ESTADOS --- //
    const [cantidad, setCantidad] = useState(1);
    const [edicion, setEdicion] = useState(false);
    // --- --- --- --- --- //

    // --- FUNCIONES --- //
    const cantidadProductoSeleccionado = () => {
        const productoSeleccionado = pedido.find(
            (pedidoState) => pedidoState.id === producto.id
        );
        return productoSeleccionado.cantidad;
    };
    // --- --- --- --- --- //

    // --- EFECTOS --- //
    useEffect(() => {
        if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
            setEdicion(true);
            setCantidad(cantidadProductoSeleccionado());
        }
    }, [producto, pedido]);
    // --- --- --- --- --- //

    return (
        <div className="flex flex-col justify-center items-center md:flex-row gap-10">
            {/* Imagen del Producto */}
            <div className="mt-8 md:mt-0 md:w-1/3">
                {/* Imagen */}
                <Image
                    className="h-auto w-72"
                    src={`/assets/img/${producto.imagen}.jpg`}
                    width={300}
                    height={400}
                    alt={`${producto.nombre}`}
                />
            </div>
            {/* Informacion del Producto */}
            <div className="md:w-2/3">
                {/* Cerrar Modal */}
                <div className="absolute top-0 right-0 p-2 md:flex md:justify-end">
                    {/* X */}
                    <button onClick={() => handleChangeModal()}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                {/* Nombre */}
                <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>
                {/* Precio */}
                <p className="mt-5 font-black text-5xl text-amber-500">
                    {formatearDinero(producto.precio)}
                </p>
                {/* Seleccionar Cantidad */}
                <div className="flex gap-4 mt-5 justify-start items-center">
                    {/* Quitar Cantidad (-) */}
                    <button
                        type="button"
                        onClick={() => {
                            if (cantidad <= 1) return;
                            setCantidad(cantidad - 1);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-7 h-7"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>

                    {/* Cantidad */}
                    <p className="text-3xl">{cantidad}</p>

                    {/* Sumar Cantidad (+) */}
                    <button
                        type="button"
                        onClick={() => {
                            if (cantidad >= 5) return;
                            setCantidad(cantidad + 1);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-7 h-7"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>
                </div>
                {/* Añadir al Pedido */}
                <button
                    className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
                    type="button"
                    onClick={() =>
                        handleAgregarPedido({ ...producto, cantidad })
                    }
                >
                    {edicion ? 'Guardar Cambios' : 'Agregar Pedido'}
                </button>
                {edicion && (
                    <p className="mt-2 text-center text-green-400 bg-slate-100 p-2 rounded shadow uppercase">
                        Ya hay {cantidadProductoSeleccionado()} en el pedido
                    </p>
                )}
            </div>
        </div>
    );
}
