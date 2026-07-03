import { Link } from "react-router-dom";

function ReactEjercicio8() {
  const contarCaracteresYPalabras = () => {
    const texto = document.getElementById("texto").value;
    const caracteres = texto.length;
    const palabras = texto.trim() === "" ? 0 : texto.trim().split(/\s+/).length;

    document.getElementById("caracteres").textContent =
      `Caracteres: ${caracteres}`;
    document.getElementById("palabras").textContent = `Palabras: ${palabras}`;
  };

  document
    .getElementById("texto")
    ?.addEventListener("input", contarCaracteresYPalabras);

  return (
    <>
      <h1>Ejercicio 8</h1>

      <Link to="/">Volver al menú</Link>
      <hr />

      <input type="text" placeholder="Escribe un texto..." id="texto" />
      <br />
      <p id="caracteres">Caracteres: 0</p>
      <p id="palabras">Palabras: 0</p>
    </>
  );
}

export default ReactEjercicio8;
