import styles from "./NavBar.module.css";
import CartWidget from "../cartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <header className={styles.presentacion}>
        <img className={styles.img} src={logo} alt="logo" />
        <h1 className={styles.nombre}>Juanita de las Nieves</h1>
      </header>

      <ul className={styles.navLinks}>
        <li>
          <NavLink className={styles.link} to="/">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/libreria">
            Librería
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/marroquinería">
            Marroquinería
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/Oficina">
            Oficina
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/Promociones">
            Promociones
          </NavLink>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
