import { useState } from "react";
import { Link } from "react-router-dom";

function ReactEjercicio8() {
  const [texto, setTexto] = useState("");
  const [caracteres, setCaracteres] = useState(0);
  const [palabras, setPalabras] = useState(0);

  const contarCaracteresYPalabras = (e) => {
    const nuevoTexto = e.target.value;

    setTexto(nuevoTexto);
    setCaracteres(nuevoTexto.length);
    setPalabras(
      nuevoTexto.trim() === "" ? 0 : nuevoTexto.trim().split(/\s+/).length,
    );
  };

  return (
    <>
      <h1>Ejercicio 8</h1>

      <Link to="/">Volver al menú</Link>
      <hr />

      <input
        type="text"
        placeholder="Escribe un texto..."
        value={texto}
        onChange={contarCaracteresYPalabras}
      />

      <p>Caracteres: {caracteres}</p>
      <p>Palabras: {palabras}</p>
    </>
  );
}

export default ReactEjercicio8;
