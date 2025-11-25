import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

export default function Carrito() {
  const { cart, addToCart, decrease, removeItem, totalPrice } = useCart();

  if (!cart || cart.length === 0) {
    return (
      <div className={styles.container}>
        <h2>El carrito está vacío</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Mi Carrito</h2>

      <div className={styles.list}>
        {cart.map((item) => (
          <div key={item.id} className={styles.item}>
            {item.imagen && (
              <img
                src={item.imagen}
                alt={item.nombre}
                className={styles.thumb}
              />
            )}

            <div className={styles.info}>
              <h3 className={styles.name}>{item.nombre}</h3>

              <p className={styles.price}>
                Precio: ${item.precio?.toLocaleString("es-AR")}
              </p>

              <div className={styles.controls}>
                <button
                  className={styles.smallBtn}
                  onClick={() => decrease(item.id)}
                >
                  -
                </button>

                <span className={styles.qty}>{item.cantidad}</span>

                <button
                  className={styles.smallBtn}
                  onClick={() => addToCart(item)}
                >
                  +
                </button>

                <button
                  className={styles.removeBtn}
                  onClick={() => removeItem(item.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.summary}>
        <h3>Total: ${totalPrice.toLocaleString("es-AR")}</h3>

        <div className={styles.actions}>
          <Link to="/">
            <button className={styles.clearBtn}>Seguir comprando</button>
          </Link>

          <button className={styles.checkoutBtn}>Finalizar compra</button>
        </div>
      </div>
    </div>
  );
}
