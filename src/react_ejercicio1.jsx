import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ReactEjercicio1() {
  const [color, setColor] = useState("#ffffff");

  function handleClick() {
    const nuevoColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    setColor(nuevoColor);
  }

  useEffect(() => {
    document.body.style.backgroundColor = color;

    return () => {
      document.body.style.backgroundColor = "#ffffff";
    };
  }, [color]);
  return (
    <>
      <h1>Ejercicio 1</h1>

      <Link to="/">Volver al menú</Link>
      <hr />

      <button onClick={handleClick}>Cambiar color de fondo</button>
    </>
  );
}

export default ReactEjercicio1;
