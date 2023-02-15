import Image from 'next/image';
import useQuiosco from 'hooks/useQuiosco';

export default function Categoria({ categoria }) {
    // CONTEXT
    const { categoriaActual, handleClickCategoria } = useQuiosco();
    // API
    const { nombre, icono, id } = categoria;

    return (
        // CATEGORIA
        <div
            className={`${
                categoriaActual?.id === id ? 'bg-amber-400' : ''
            } flex items-center gap-4 cursor-pointer w-full border p-5 hover:bg-amber-400 transition-colors duration-300`}
            onClick={() => handleClickCategoria(id)}
        >
            {/* Icono */}
            <Image
                src={`/assets/img/icono_${icono}.svg`}
                width={70}
                height={70}
                alt="Icono"
            />
            {/* Boton de Categoria */}
            <button className="text-2xl font-bold" type="button">
                {nombre}
            </button>
        </div>
    );
}
