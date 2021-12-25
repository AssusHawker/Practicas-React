// Tarea 2:

// crear 3 botones que tomen el valor de props
// por defecto:
// el primero tiene que incrementarlo en 1
// el segundo decrementarlo en 1
// el tercero resetear el valor por defecto al valor de value
// probar que funciones xD



import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10})=>{

  //UseState
  const [ counter , setCounter ] = useState( value ); //useState retorna un arreglo
   
  //handleAdd
  const handleAdd = ()=>{
      setCounter( counter + 1 );
  }
   //handlesub
   const handleSubs = ()=>{
    setCounter( counter - 1 );
}
 //handlereset
 const handleReset = ()=>{
  setCounter( value );

}
return(
        <>
          <h1> CounterApp</h1>
          <h2> {counter} </h2>
          <button onClick={ handleAdd } >+1</button> 
          <button onClick={ handleReset }>Reset</button> 
          <button onClick={ handleSubs }>-1</button> 

        </>
)
}
CounterApp.propTypes = {
    value : PropTypes.number.isRequired

}
export default CounterApp;
