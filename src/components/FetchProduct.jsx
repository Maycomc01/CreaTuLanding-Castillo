import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FetchProduct() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/productos.json")
      .then((res) => res.json())
      .then((data) => setProductos(data.productos))
      .catch((error) => console.error("Error", error));
  }, []);

  return (
    <>
      <h2>Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <Link to={`/Detalle/${producto.id}`}>{producto.nombre}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FetchProduct;
