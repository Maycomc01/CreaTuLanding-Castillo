import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import styles from "./CartWidget.module.css";

function CartWidget() {
  const { totalCount } = useCart();

  return (
    <Link to="/carrito" className={styles.cart}>
      <span className={styles.icon}>🛒</span>

      {totalCount > 0 && <span className={styles.badge}>{totalCount}</span>}
    </Link>
  );
}
export default CartWidget;
