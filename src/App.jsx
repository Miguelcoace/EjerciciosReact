import { Link, Route, Routes } from "react-router-dom";

import ReactEjercicio1 from "./react_ejercicio1";
import ReactEjercicio2 from "./react_ejercicio2";
import ReactEjercicio3 from "./react_ejercicio3";
import ReactEjercicio4 from "./react_ejercicio4";
import ReactEjercicio5 from "./react_ejercicio5";
import ReactEjercicio6 from "./react_ejercicio6";
import ReactEjercicio7 from "./react_ejercicio7";
import ReactEjercicio8 from "./react_ejercicio8";
import ReactEjercicio9 from "./react_ejercicio9";

function Inicio() {
  return (
    <>
      <h1>Introducción</h1>

      <ul>
        <li>
          <Link to="/ejercicio1">Ejercicio 1</Link>
        </li>
        <li>
          <Link to="/ejercicio2">Ejercicio 2</Link>
        </li>
        <li>
          <Link to="/ejercicio3">Ejercicio 3</Link>
        </li>
        <li>
          <Link to="/ejercicio4">Ejercicio 4</Link>
        </li>
        <li>
          <Link to="/ejercicio5">Ejercicio 5</Link>
        </li>
        <li>
          <Link to="/ejercicio6">Ejercicio 6</Link>
        </li>
        <li>
          <Link to="/ejercicio7">Ejercicio 7</Link>
        </li>
        <li>
          <Link to="/ejercicio8">Ejercicio 8</Link>
        </li>
        <li>
          <Link to="/ejercicio9">Ejercicio 9</Link>
        </li>
      </ul>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/ejercicio1" element={<ReactEjercicio1 />} />
      <Route path="/ejercicio2" element={<ReactEjercicio2 />} />
      <Route path="/ejercicio3" element={<ReactEjercicio3 />} />
      <Route path="/ejercicio4" element={<ReactEjercicio4 />} />
      <Route path="/ejercicio5" element={<ReactEjercicio5 />} />
      <Route path="/ejercicio6" element={<ReactEjercicio6 />} />
      <Route path="/ejercicio7" element={<ReactEjercicio7 />} />
      <Route path="/ejercicio8" element={<ReactEjercicio8 />} />
      <Route path="/ejercicio9" element={<ReactEjercicio9 />} />
    </Routes>
  );
}
