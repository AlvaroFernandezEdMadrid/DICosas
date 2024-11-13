import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CrearPedido from "./pages/CrearPedido";
import HistorialPedido from "./pages/Historialpedido";
import RegistroProducto from "./pages/RegistroProducto.jsx";
import VerificarArticulo from "./pages/VerificarArticulo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/crearPedido" element={<CrearPedido />} />
        <Route path="/historialAlumno" element={<HistorialPedido />} />
        <Route path="/crearArticulo" element={<RegistroProducto />} />
        <Route path="/checkArticulo" element={<VerificarArticulo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
