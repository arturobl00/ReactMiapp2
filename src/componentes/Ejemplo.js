import React, {useState, Fragment} from 'react';

const Miejemplo = () => {
    //Variable se construye asi primero el nombre que es numero
    //despues setNumero que es la asignacion del valor inicial o valor
    // por ultimo = useState(0) que es el que asigana el valor que ahora es 0
    const [numero, setNumero] = useState(0);

    //Voy a declarar una funcion que sera llamada mediante un boton
    //asi declaramos una funcion modelo flecha
    //Como ven setNumero es la asignación que esta tomando la variable numero
    const aumentar = () => {
        setNumero(numero + 1)
    }

    return ( 
        //aqui hago un cambio y pongo o un div o en nuestro caso
        //un Fragment por que va a ser mas de una etiqueta
        <Fragment>
            <h2>Hola soy el ejemplo {numero}</h2>
            <button onClick={aumentar}>Aumentar Valor</button>
        </Fragment>
     );
}
 
export default Miejemplo;