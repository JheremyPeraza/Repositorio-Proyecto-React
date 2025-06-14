/**
 * Ejemplo Hooks:
 * - useSatte()
 * - useContext()
 */

import React, { useState, useContext } from 'react';

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor que recive desde el padre
 */

const miContexto = React.createContext(null)

const Componente1 = () => {

    // Inicializamos un estado vacio que va rellenarse con los datos del contexto del padre
     const state = useContext(miContexto);

    return (
        <div>

            <h1>
                El token es: { state.token }
            </h1>

            {/* Componente 2 */}
            <Componente2></Componente2>
            
        </div>
    );
}



const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>

            <h2>
                La sesion es: {state.sesion}
            </h2>
            
        </div>
    );
}


export default function MiComponenteConContexto () {

    const estadoInicial = {
        token: '12345',
        sesion: 1
    }

    //Creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion() {

        setSessionData(
            {
                token: 'JPB0126',
                sesion: sessionData.sesion + 1
            }
        );
        
    }


  return (
    <miContexto.Provider value = { sessionData }>
        {/* Todo lo que este aqui dentro puede leer los datos de sessionData, si actualizan los componentes, este tambien se actualiza */}
        <h1>*** Ejemplo de useSatte(), useContext() ***</h1>
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actualisar Sesion</button>

    </miContexto.Provider>
  )
}



