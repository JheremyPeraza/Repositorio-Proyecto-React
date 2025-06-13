/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef()
 * - useEffect()
 */

import { useState, useRef, useEffect } from "react";

const Ejemplo2 = () => {

    /**
     * Vamos a crear dos contadores distintos, cada uno en un estado diferente
     */
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    /**
     * Vamso a crear una referencia con useRef() para asociar una variable con un elemento de DOM del componente (vista HTML)
     */
    const miRef = useRef();

    function incrementar1() {
         setContador1(contador1 +1);
    }

    function incrementar2() {
         setContador2(contador2 +1);
    }

    /**
     * Trabajando con useEffect
     */

    /**
     * ? Caso1: Ejecuatr SIEMPRE un snippet de codigo
     * Cada vez que haya un cambio en el estado del componente, se ejecuta aquello que este dentro del useEffetc()
     */

    /*useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
        console.log('MOSTRANDO REFERENCIA A ELEMENTO DEL DOM');
        console.log(miRef);
    });*/


    /**
     * ? Caso2: Ejecuatr cuando cambie contador 1
     * Cada vez que haya un cambio en el contador 1, se ejecuta lo que diga el useEffetc()
     * en el cado que se ejecute contador2, no habrá ejecucion
     */

    /*useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR1');
        console.log('MOSTRANDO REFERENCIA A ELEMENTO DEL DOM');
        console.log(miRef);
    },[contador1]);*/

    /**
     * ? Caso3: Ejecuatr cuando cambie contador 2
     * Cada vez que haya un cambio en el contador 1, se ejecuta lo que diga el useEffetc()
     * en el cado que se ejecute contador2, no habrá ejecucion
     */

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR2');
        console.log('MOSTRANDO REFERENCIA A ELEMENTO DEL DOM');
        console.log(miRef);
    },[contador2]);


    return (
        <div>
            
            <h1>**Ejemplo de useState(), useRef, useEffect**</h1>
            <h2>CONTADOR 1:{ contador1 } </h2>
            <h2>CONTADOR 2:{ contador2 } </h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                EJEMPLO DE ELEMENTO REFERENCIADO
            </h4>
            {/* Botones para cambiar los contadores */}

            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>

        </div>
    );
}

export default Ejemplo2;
