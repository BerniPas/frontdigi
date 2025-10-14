import React from 'react';


/*  ejemplo de un custom hook personalizado */

const useDatos = () => {
    const [datos, setDatos] = React.useState({
        email: '',
        password: ''
    });
    React.useEffect(() => {
        console.log('El estado ha cambiado');
    }, [datos]);
    return [datos, setDatos];
};
export default useDatos;


