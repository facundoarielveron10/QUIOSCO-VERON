import { useRouter } from 'next/router';

// --- ENLACES --- //
const pasos = [
    { id: 1, nombre: 'Menu', url: '/' },
    { id: 2, nombre: 'Resumen', url: '/resumen' },
    { id: 3, nombre: 'Datos y Total', url: '/total' },
];
// --- --- --- --- --- //

export default function Pasos() {
    // --- ROUTER --- //
    const router = useRouter();
    // --- --- --- --- --- //

    // --- FUNCIONES --- //
    const calcularProgreso = () => {
        let valor;
        if (router.pathname === '/') {
            valor = 2;
        } else if (router.pathname === '/resumen') {
            valor = 50;
        } else {
            valor = 100;
        }
        return valor;
    };
    // --- --- --- --- --- //

    return (
        <>
            {/* Pasos */}
            <div className="flex flex-col md:flex-row md:justify-between gap-3 mb-5">
                {/* Iteracion del arreglo de objetos */}
                {pasos.map((paso) => (
                    // --- ENLACE --- //
                    <button
                        className="text-amber-400 text-2xl font-bold md:text-black md:border-b-2 md:border-b-amber-200"
                        key={paso.id}
                        onClick={() => {
                            router.push(paso.url);
                        }}
                    >
                        {paso.nombre}
                    </button>
                    // --- --- --- --- --- //
                ))}
            </div>
            {/* Contenedor de Barra de Progreso */}
            <div className="bg-gray-200 mb-10">
                {/* Barra de Progreso */}
                <div
                    className="rounded-full bg-amber-300 text-xs leading-none h-2 text-center text-white"
                    style={{ width: `${calcularProgreso()}%` }}
                ></div>
            </div>
        </>
    );
}
