
// import de los hooks de react
import { useState, useEffect } from 'react';

// import de axios: para uso de API REST o peticiones HTTP
import axios from 'axios';

// componente hijo al que le pasaremos los datos y nos devolverá la card
import PersonajeCard from '../Componentes/PersonajeCard';
import data from '../data/data.json';


const Personajes = () => {

    // estado para guardar los personajes
    const [personajes, setPersonajes] = useState([]);


    /*     let personajes = []; //js nativo
        personajes.push({nombre: 'Morty'});
        personajes.push({nombre: 'Rick'}); */

    // useEffect para cargar los personajes al montar el componente
    useEffect(() => {
        // llamada a la API de Rick and Morty con axios
        axios.get('https://rickandmortyapi.com/api/character')
            .then(res => {
                /* imprimo en consola la variable que contiene los personajes */
                console.log(res.data.results);
                setPersonajes(res.data.results); 

            });
    }, []);

    /* estilos como objetos */
    const estilos = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        flexWrap: 'wrap',
        gap: '20px'
    }



    return (
        <div>
            <h1 className='text-center mt-5'>{data.titulo}</h1>
            {/* <h2>{personajes}</h2> */} {/* no funciona porque es un array de objetos */}

            {/* Llamamos al componente PersonajeCard */}
            <div style={estilos}>
                {personajes.map(personajes => (
                    <div key={personajes.id}>
                        <PersonajeCard personajes={personajes} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Personajes
