import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ReactEjercicio9() {
  const [texto, setTexto] = useState("");
  const [tareas, setTareas] = useState([]);

  // Cargar las tareas al iniciar
  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
    setTareas(tareasGuardadas);
  }, []);

  // Guardar cada vez que cambien las tareas
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = () => {
    if (texto.trim() === "") return;

    setTareas([
      ...tareas,
      {
        texto: texto,
        completada: false,
      },
    ]);

    setTexto("");
  };

  const cambiarEstado = (indice) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[indice].completada = !nuevasTareas[indice].completada;
    setTareas(nuevasTareas);
  };

  const eliminarTareasCompletadas = () => {
    setTareas(tareas.filter((tarea) => !tarea.completada));
  };

  return (
    <>
      <h1>Ejercicio 9</h1>

      <Link to="/">Volver al menú</Link>
      <hr />

      <input
        type="text"
        placeholder="Introduce una tarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <button onClick={agregarTarea}>Agregar</button>

      <ul>
        {tareas.map((tarea, indice) => (
          <li
            key={indice}
            style={{
              textDecoration: tarea.completada ? "line-through" : "none",
            }}
          >
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => cambiarEstado(indice)}
            />
            {tarea.texto}
          </li>
        ))}
      </ul>

      <br />

      <button onClick={eliminarTareasCompletadas}>
        Eliminar tareas completadas
      </button>
    </>
  );
}

export default ReactEjercicio9;
