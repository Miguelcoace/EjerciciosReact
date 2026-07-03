import { useState } from "react";
import { Link } from "react-router-dom";

function ReactEjercicio2() {
  const [clics, setClics] = useState(0);
  function handleClick() {
    setClics(clics + 1);
  }

  return (
    <>
      <h1>Ejercicio 2</h1>

      <Link to="/">Volver al menú</Link>
      <hr />

      <button onClick={handleClick}>Contar Clics</button>
      <p>Clics: {clics}</p>
    </>
  );
}

export default ReactEjercicio2;
