import { formatearDinero } from 'helpers';
import axios from 'axios';
import { toast } from 'react-toastify';
import Image from 'next/image';

export default function Orden({ orden }) {
    // --- DATOS --- //
    const { id, nombre, total, pedido } = orden;
    // --- --- --- --- --- //

    // --- FUNCIONES --- //
    const completarOrden = async () => {
        try {
            await axios.post(`/api/ordenes/${id}`);
            toast.success(<span>&#127881; Orden Lista</span>);
        } catch (error) {
            toast.error('Hubo un error');
        }
    };
    // --- --- --- --- --- //

    return (
        <div className="border p-10 space-y-5">
            {/* Titulo */}
            <h3 className="text-2xl font-bold">Orden: {id}</h3>
            {/* Descripcion */}
            <p className="text-lg font-bold">Cliente: {nombre}</p>
            {/* Orden */}
            <div>
                {pedido.map((platillo) => (
                    <div
                        className="py-3 flex border-b last-of-type:border-0 items-center"
                        key={platillo.id}
                    >
                        {/* Imagen del Platillo */}
                        <div className="w-32">
                            <Image
                                src={`/assets/img/${platillo.imagen}.jpg`}
                                width={400}
                                height={500}
                                alt={platillo.nombre}
                            />
                        </div>
                        {/* Informacion del Platillo */}
                        <div className="p-5 space-y-2">
                            {/* Nombre */}
                            <h4 className="text-xl font-bold text-amber-500">
                                {platillo.nombre}
                            </h4>
                            {/* Cantidad */}
                            <p className="text-lg font-bold">
                                Cantidad: {platillo.cantidad}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Aciones del Orden */}
            <div className="md:flex md:items-center md:justify-between my-10">
                {/* Total a Pagar */}
                <p className="mt-5 font-black text-4xl text-amber-500">
                    Total a pagar: {formatearDinero(total)}
                </p>

                {/* Completar Orden */}
                <button
                    className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-lg"
                    type="button"
                    onClick={completarOrden}
                >
                    Completar Orden
                </button>
            </div>
        </div>
    );
}
