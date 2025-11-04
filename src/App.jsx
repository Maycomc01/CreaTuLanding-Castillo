import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Librería from "./components/pages/Libreria";
import Marrroquinería from "./components/pages/Marroquineria";
import Oficina from "./components/pages/Oficina";
import Promociones from "./components/pages/Promociones";
import NotFound from "./components/pages/NotFound";
import DetalleProductos from "./components/pages/DetalleProductos";
function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a Juanita!" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Libreria" element={<Librería />} />
        <Route path="/Detalle/:id" element={<DetalleProductos />} />
        <Route path="/Marroquinería" element={<Marrroquinería />} />
        <Route path="/Oficina" element={<Oficina />} />
        <Route path="/Promociones" element={<Promociones />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
