import styles from "./NavBar.module.css";
import CartWidget from "../cartWidget/CartWidget";
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <header className={styles.presentacion}>
        <img className={styles.img} src="../src/img/logo.png" alt="logo" />
        <h1 className={styles.nombre}>Juanita de las nieves</h1>
      </header>
      <ul className={styles.navLinks}>
        <li>inicio</li>
        <li>Librería</li>
        <li>Marroquinería</li>
        <li>Oficina</li>
        <li>Combos</li>
      </ul>
      <CartWidget />
    </nav>
  );
};
export default NavBar;
