import { formatearDinero } from 'helpers';
import useQuiosco from 'hooks/useQuiosco';
import Image from 'next/image';

export default function Producto({ producto }) {
    // --- CONTEXTs --- //
    const { handleSetProducto, handleChangeModal } = useQuiosco();
    // --- --- --- --- --- //

    // --- API --- //
    const { nombre, imagen, precio } = producto;
    // --- --- --- --- --- //

    return (
        <div className="flex flex-col justify-center items-center border p-3">
            {/* Imagen del Producto */}
            <Image
                className="h-auto w-auto"
                src={`/assets/img/${imagen}.jpg`}
                priority={true}
                width={400}
                height={500}
                alt={`Platillo ${nombre}`}
            />
            {/* Nombre y Precio del Producto */}
            <div className="p-5">
                {/* Nombre */}
                <h3 className="text-2xl font-bold">{nombre}</h3>
                {/* Precio */}
                <p className="mt-5 font-black text-4xl text-amber-500">
                    {formatearDinero(precio)}
                </p>
                {/* Agregar Producto */}
                <button
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold rounded"
                    type="button"
                    onClick={() => {
                        handleChangeModal();
                        handleSetProducto(producto);
                    }}
                >
                    Agregar
                </button>
            </div>
        </div>
    );
}
