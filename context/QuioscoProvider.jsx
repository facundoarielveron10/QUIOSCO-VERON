import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
    // ESTADOS
    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({});

    // FUNCIONES
    const obtenerCategorias = async () => {
        const { data } = await axios('/api/categorias');
        setCategorias(data);
    };

    const handleClickCategoria = (id) => {
        const categoria = categorias.filter((c) => c.id === id);
        setCategoriaActual(categoria[0]);
    };

    // EFECTO
    useEffect(() => {
        obtenerCategorias();
    }, []);

    return (
        <QuioscoContext.Provider
            value={{ categorias, categoriaActual, handleClickCategoria }}
        >
            {children}
        </QuioscoContext.Provider>
    );
};

export { QuioscoProvider };

export default QuioscoContext;
