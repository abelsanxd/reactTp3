import ProTypes from 'prop-types'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { useState } from 'react';

function App() {
// eslint-disable-next-line
  const [msj, setMsj] = useState("(from changed state)");

  const handleClick = () => {
    alert(msj);
  };

  return (
    <>
      <main className="container my-5">
        <MensajeSaludo mensaje={msj} />
        <BotonMostrarMensaje onClick={handleClick} />
      </main>
    </>
  );
}

function MensajeSaludo(props) {
  return <h1>Hola {props.mensaje}</h1>;
}
function BotonMostrarMensaje(props) {
  return <button onClick={props.onClick}>Mostrar Mensaje</button>;
}

BotonMostrarMensaje.propTypes = {
  onClick: ProTypes.func.isRequired
};
MensajeSaludo.propTypes= {
  mensaje: ProTypes.string.isRequired
}

export default App
