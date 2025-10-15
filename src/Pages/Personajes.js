
// import de los hooks de react
import { useState, useEffect } from 'react';

// import de axios: para uso de API REST o peticiones HTTP
import axios from 'axios';

// componente hijo al que le pasaremos los datos y nos devolverá la card
import PersonajeCard from '../Componentes/PersonajeCard';



const Personajes = () => {

    // estado para guardar los personajes
    const [personajes, setPersonajes] = useState([]);

    // useEffect para cargar los personajes al montar el componente
    useEffect(() => {
        // llamada a la API de Rick and Morty con axios
        axios.get('https://rickandmortyapi.com/api/character')
            .then(res => {
                console.log(res.data.results);
            }
    , [])}
);


    return (
        <div>

        </div>
    )
}

export default Personajes
