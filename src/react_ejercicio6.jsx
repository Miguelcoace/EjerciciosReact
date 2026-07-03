import { Link } from "react-router-dom";

function ReactEjercicio6() {
  let temporizador;
  let tiempo = 0;

  const actualizarTemporizador = () => {
    const horas = Math.floor(tiempo / 3600)
      .toString()
      .padStart(2, "0");
    const minutos = Math.floor((tiempo % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const segundos = (tiempo % 60).toString().padStart(2, "0");
    document.getElementById("temporizador").textContent =
      `${horas}:${minutos}:${segundos}`;
  };

  const iniciarTemporizador = () => {
    if (!temporizador) {
      temporizador = setInterval(() => {
        tiempo++;
        actualizarTemporizador();
      }, 1000);
    }
  };

  const pausarTemporizador = () => {
    clearInterval(temporizador);
    temporizador = null;
  };

  const reiniciarTemporizador = () => {
    clearInterval(temporizador);
    temporizador = null;
    tiempo = 0;
    actualizarTemporizador();
  };

  document
    .getElementById("iniciar")
    ?.addEventListener("click", iniciarTemporizador);
  document
    .getElementById("pausar")
    ?.addEventListener("click", pausarTemporizador);
  document
    .getElementById("reiniciar")
    ?.addEventListener("click", reiniciarTemporizador);
  return (
    <>
      <h1>Ejercicio 6</h1>

      <Link to="/">Volver al menú</Link>
      <hr />

      <p id="temporizador">00:00:00</p>
      <button id="iniciar">Iniciar</button>
      <button id="pausar">Pausar</button>
      <button id="reiniciar">Reiniciar</button>
    </>
  );
}

export default ReactEjercicio6;
