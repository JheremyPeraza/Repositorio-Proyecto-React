/*
Ejemplo de uso del Hook useState

Crear un componente de tipo funcion y acceder a su estado privado a traves de un hook y ademas poder modificarlo
*/

import { use, useState } from "react";

const Ejemplo1 = () => {

    /**
     * Valor inicial par aun contador
     */
    const valorInicial = 0;

    /**
     * Valor inicial para una persona
     */
    const personaInicial = {
        nombre: 'Michel',
        email: 'michel@gmail,com'
    }

    /**
     * Queremos que el valor inicial y personInicial sean parte del estado del componente, para asi gestionar el cambio y este se vea reflejado en la vista
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);


    /**
     * Funcion para actualizar el estado que contiene el contador 
     */
    function incrementarContador(){
        //funcion
        setContador(contador + 1);
    }


    /**
     * 
     * Funcion para actualizar el estado de persona en el componente
     */
    function actualizarPersona(nombre) {
        setPersona(
            {
                nombre: 'Jheremy',
                email: 'jheremy@gmail.com'
            }
        )
    }

    return (
        <div>  

        <h1>**Ejemplo de useState()**</h1>
        <h2>CONTADOR:{ contador } </h2>
        <h2>DATOS DE LA PERSONA</h2>
        <h3>NOMBRE: { persona.nombre }</h3>
        <h4>EMAIL: { persona.email }</h4>

        {/* Bloque de botones */}
        <button onClick={incrementarContador}>INCREMENTAR CONTADOR</button>
        <button onClick={actualizarPersona}>ACTUALIAZAR PERSONA</button>

        </div>
    );
}

export default Ejemplo1;

