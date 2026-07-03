import { Link } from "react-router-dom";

function ReactEjercicio5() {
  const sumar = () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    alert(`Resultado: ${num1 + num2}`);
  };

  const restar = () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    alert(`Resultado: ${num1 - num2}`);
  };

  const multiplicar = () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    alert(`Resultado: ${num1 * num2}`);
  };

  const dividir = () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (num2 === 0) {
      alert("No se puede dividir entre cero");
    } else {
      alert(`Resultado: ${num1 / num2}`);
    }
  };

  document.getElementById("sumar")?.addEventListener("click", sumar);
  document.getElementById("restar")?.addEventListener("click", restar);
  document
    .getElementById("multiplicar")
    ?.addEventListener("click", multiplicar);
  document.getElementById("dividir")?.addEventListener("click", dividir);

  return (
    <>
      <h1>Ejercicio 5</h1>

      <Link to="/">Volver al menú</Link>
      <hr />

      <input type="number" placeholder="Primer numero" id="num1" />
      <input type="number" placeholder="Segundo numero" id="num2" />
      <br />
      <br />
      <button id="sumar">Sumar</button>
      <button id="restar">Restar</button>
      <button id="multiplicar">Multiplicar</button>
      <button id="dividir">Dividir</button>
    </>
  );
}

export default ReactEjercicio5;
