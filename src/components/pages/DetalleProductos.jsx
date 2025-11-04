import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetalleProductos = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch("/productos.json")
      .then((res) => res.json())
      .then((data) => {
        const productoEncontrado = data.productos.find(
          (item) => item.id.toString() === id
        );
        setProducto(productoEncontrado);
      })
      .catch((error) => console.error("Error al cargar productos", error));
  }, [id]);

  if (!producto) {
    return <p>Cargando producto...</p>;
  }

  return (
    <>
      <h1>Detalle del Producto</h1>
      <h2>{producto.nombre}</h2>
      <img
        src={producto.img}
        alt={producto.nombre}
        style={{ width: "300px" }}
      />
      <p>
        <strong>Precio:</strong> ${producto.precio}
      </p>
      <p>
        <strong>Descripción:</strong> {producto.detalle}
      </p>
      <button onClick={() => navigate(-1)}>Volver</button>
    </>
  );
};

export default DetalleProductos;
