import { useState } from "react";
import { Link } from "react-router-dom";

function ReactEjercicio3() {
  const [texto, setTexto] = useState("");
  const [lista, setLista] = useState([]);

  function agregarElemento() {
    if (texto.trim() !== "") {
      setLista([...lista, texto]);
      setTexto("");
    }
  }

  function eliminarElemento(index) {
    setLista(lista.filter((_, i) => i !== index));
  }

  return (
    <>
      <h1>Ejercicio 3</h1>

      <Link to="/">Volver al menú</Link>
      <hr />

      <input
        type="text"
        placeholder="Escribe algo..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button onClick={agregarElemento}>Agregar</button>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => eliminarElemento(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ReactEjercicio3;
