import Image from 'next/image';
import useQuiosco from 'hooks/useQuiosco';
import Categoria from './Categoria';

export default function Sidebar() {
    const { categorias } = useQuiosco();

    return (
        <>
            {/* Logo */}
            <Image
                className="m-auto h-28 w-auto"
                priority={true}
                width={100}
                height={300}
                src="/assets/img/logo.svg"
                alt="Logo"
            />

            {/* Categorias */}
            <nav className="mt-10">
                {categorias.map((categoria) => (
                    <Categoria key={categoria.id} categoria={categoria} />
                ))}
            </nav>
        </>
    );
}
