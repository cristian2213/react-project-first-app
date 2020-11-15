import './App.css';

// importacion de componente
import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Mensaje from './components/Mensaje';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

function App() {
  // haciendo uso del useState (hook)
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState(0);
  // creacion de un nuevo estado para guardar el total a cotizar
  const [total, guardarTotal] = useState(0);

  // nuevo estado para spinner 
  const [cargando, guardarCargando] = useState(false);

  // carga condicional de componentes, en este caso se usaron tres
  let componente;
  // carga el spinner
  if (cargando) {
    componente = <Spinner />
  } else if (total === 0) {
    componente = <Mensaje />;
  } else {
    componente = <Resultado
      total={total}
      plazo={plazo}
      cantidad={cantidad}
    />;
  }

  return (
    <div className="App">
      {/* uso del componente y pasando props al componente hijo*/}
      <Header titulo="Cortizador de prestamos" />

      <div className="container">
        {/* Pasando props del componente padre al componente hijo */}
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          total={total}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
        />
        <div className="mensajes">
          {/* implementacion de la carga condicional de componentes */}
          {componente}
        </div>
      </div>
    </div>
  );
}

export default App;
