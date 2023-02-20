import { useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { toast } from 'react-toastify';

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
    // --- ESTADOS --- //
    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({});
    const [producto, setProducto] = useState({});
    const [modal, setModal] = useState(false);
    const [pedido, setPedido] = useState([]);
    const [nombre, setNombre] = useState('');
    const [total, setTotal] = useState(0);
    // --- --- --- --- --- //

    // --- ROUTER --- //
    const router = useRouter();
    // --- --- --- --- --- //

    // --- FUNCIONES --- //
    const obtenerCategorias = async () => {
        const { data } = await axios('/api/categorias');
        setCategorias(data);
    };

    const handleClickCategoria = (id) => {
        const categoria = categorias.filter((c) => c.id === id);
        setCategoriaActual(categoria[0]);
    };

    const handleSetProducto = (producto) => {
        setProducto(producto);
    };

    const handleChangeModal = () => {
        setModal(!modal);
    };

    const handleAgregarPedido = ({ categoriaId, ...producto }) => {
        if (pedido.some((productoState) => productoState.id === producto.id)) {
            // Actualizar la Cantidad
            const pedidoActualizado = pedido.map((productoState) =>
                productoState.id === producto.id ? producto : productoState
            );
            setPedido(pedidoActualizado);
            toast.success(<span>&#127881; Guardado Correctamente</span>);
        } else {
            setPedido([...pedido, producto]);
            toast.success(<span>&#127874; Agregado al Pedido</span>);
        }

        setModal(false);
    };

    const handleEditarCantidad = (id) => {
        const productoActualizar = pedido.filter(
            (producto) => producto.id === id
        );
        setProducto(productoActualizar[0]);

        setModal(!modal);
    };

    const handleEliminarProducto = (id) => {
        const pedidoActualizado = pedido.filter(
            (producto) => producto.id !== id
        );
        setPedido(pedidoActualizado);
    };

    const colocarOrden = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/api/ordenes', {
                pedido,
                nombre,
                total,
                fecha: new Date().toLocaleDateString('es-AR', {
                    day: 'numeric',
                    month: 'long',
                }),
            });

            // --- REINICIAR APP --- //
            setCategoriaActual(categorias[0]);
            setPedido([]);
            setNombre('');
            setTotal(0);
            // --- --- --- --- --- //

            toast.success(
                <span>&#128081; Pedido Realizado Correctamente</span>
            );

            setTimeout(() => {
                router.push('/');
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    };
    // --- --- --- --- --- //

    // --- EFECTOS --- //
    useEffect(() => {
        obtenerCategorias();
    }, []);

    useEffect(() => {
        setCategoriaActual(categorias[0]);
    }, [categorias]);

    useEffect(() => {
        const nuevoTotal = pedido.reduce(
            (total, producto) => producto.precio * producto.cantidad + total,
            0
        );
        setTotal(nuevoTotal);
    }, [pedido]);
    // --- --- --- --- --- //

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                producto,
                handleSetProducto,
                modal,
                handleChangeModal,
                handleAgregarPedido,
                pedido,
                handleEditarCantidad,
                handleEliminarProducto,
                nombre,
                setNombre,
                colocarOrden,
                total,
            }}
        >
            {children}
        </QuioscoContext.Provider>
    );
};

export { QuioscoProvider };

export default QuioscoContext;
