import styles from "./NavBar.module.css";
import CartWidget from "../cartWidget/CartWidget";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <header className={styles.presentacion}>
        <img className={styles.img} src="../src/img/logo.png" alt="logo" />
        <h1 className={styles.nombre}>Juanita de las Nieves</h1>
      </header>
      <ul className={styles.navLinks}>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/libreria">Librería</NavLink>
        <NavLink to="/marroquinería">Marrroquinería</NavLink>
        <NavLink to="/Oficina">Oficina</NavLink>
        <NavLink to="/Promociones">Promociones</NavLink>
      </ul>
      <CartWidget />
    </nav>
  );
};
export default NavBar;
