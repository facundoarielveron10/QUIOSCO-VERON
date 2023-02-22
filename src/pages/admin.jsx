import useSWR from 'swr';
import axios from 'axios';
import LayoutAdmin from '../layout/LayoutAdmin';
import Orden from '@/components/Orden';

export default function Admin() {
    // --- CONSULTA API --- //
    const fetcher = () => axios('/api/ordenes').then((datos) => datos.data);
    const { data } = useSWR('/api/ordenes', fetcher, {
        refreshInterval: 100,
    });
    // --- --- --- --- --- --- //

    return (
        <LayoutAdmin title="Admin">
            {/* Titulo */}
            <h1 className="text-4xl font-black">Panel de Administracion</h1>
            {/* Descripcion */}
            <p className="text-2xl my-10">Administra las ordenes</p>
            {/* Ordenes */}
            {data && data.length ? (
                data.map((orden) => <Orden key={orden.id} orden={orden} />)
            ) : (
                <p>No hay ordenes pendientes</p>
            )}
        </LayoutAdmin>
    );
}
