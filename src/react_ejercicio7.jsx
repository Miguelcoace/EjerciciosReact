import { Link } from "react-router-dom";

function ReactEjercicio7() {
  const generarContraseña = () => {
    const longitud = parseInt(document.getElementById("longitud").value);
    if (longitud < 4) {
      alert("La longitud mínima de la contraseña es 4.");
      return;
    }

    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let contraseña = "";
    for (let i = 0; i < longitud; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      contraseña += caracteres.charAt(indice);
    }
    alert(`Contraseña generada: ${contraseña}`);
  };

  return (
    <>
      <h1>Ejercicio 7</h1>

      <Link to="/">Volver al menú</Link>
      <hr />

      <input
        type="number"
        placeholder="Longitud de la contraseña"
        id="longitud"
      />
      <button id="generar" onClick={generarContraseña}>
        Generar Contraseña
      </button>
    </>
  );
}

export default ReactEjercicio7;
