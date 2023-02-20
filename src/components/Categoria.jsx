import { useRouter } from 'next/router';
import Image from 'next/image';
import useQuiosco from 'hooks/useQuiosco';

export default function Categoria({ categoria }) {
    // --- CONTEXTs --- //
    const { categoriaActual, handleClickCategoria } = useQuiosco();
    // --- --- --- --- --- //

    // --- API --- //
    const { nombre, icono, id } = categoria;
    // --- --- --- --- --- //

    // --- ROUTER --- //
    const router = useRouter();
    // --- --- --- --- --- //

    return (
        <div
            className={`${
                (categoriaActual?.id === id) & (router.pathname === '/')
                    ? 'bg-amber-400'
                    : ''
            } ${
                router.pathname === '/'
                    ? 'cursor-pointer hover:bg-amber-400 transition-colors duration-300'
                    : 'bg-gray-100 cursor-not-allowed'
            } flex items-center gap-4 w-full border p-5`}
            onClick={() => handleClickCategoria(id)}
        >
            {/* Icono */}
            <Image
                className="h-14 w-auto"
                src={`/assets/img/icono_${icono}.svg`}
                width={70}
                height={70}
                alt="Icono"
            />
            {/* Boton de Categoria */}
            <button
                className={`${
                    router.pathname === '/' ? '' : 'cursor-not-allowed'
                } text-2xl font-bold`}
                type="button"
            >
                {nombre}
            </button>
        </div>
    );
}
