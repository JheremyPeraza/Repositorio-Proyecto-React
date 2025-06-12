import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingFuncion = (props) => {

    // Breve introducciona useState
    const [age, setage] = useState(23);

    const birthday = () =>{
        // aqui actualizamos el state
        setage(age+1);
    }


    return (
        <div>
            <h1>
                    ¡Hola,{ props.name } desde el componente Funcional!
                </h1>
                <h2>
                    Tu edad es: { age }
                </h2>
                <div>
                    <button onClick={birthday}>
                        Cumplir años
                    </button>
                </div>
        </div>
    );
};


GreetingFuncion.propTypes = {
    name: PropTypes.string
};


export default GreetingFuncion;
