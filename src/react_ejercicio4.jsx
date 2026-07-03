import { Link } from "react-router-dom";

function ReactEjercicio4() {
  const filtrarLista = (event) => {
    const filtro = event.target.value.toLowerCase();
    const elementos = document.querySelectorAll("ul li");
    elementos.forEach((elemento) => {
      const texto = elemento.textContent.toLowerCase();
      if (texto.startsWith(filtro)) {
        elemento.style.display = "";
      } else {
        elemento.style.display = "none";
      }
    });
  };

  return (
    <>
      <h1>Ejercicio 4</h1>

      <Link to="/">Volver al menú</Link>
      <hr />

      <input type="text" placeholder="Buscar..." onChange={filtrarLista} />
      <ul>
        <li>Perro</li>
        <li>Gato</li>
        <li>Hamster</li>
        <li>Loro</li>
        <li>Conejo</li>
        <li>Urón</li>
        <li>Periquito</li>
        <li>Caballo</li>
        <li>Potro</li>
        <li>Tortuga</li>
      </ul>
    </>
  );
}

export default ReactEjercicio4;
