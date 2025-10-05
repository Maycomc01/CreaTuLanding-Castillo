import "./NavBar.css";
import CartWidget from "../cartWidget/CartWidget";
const NavBar = () => {
  return (
    <nav className="navbar">
      <header className="presentacion">
        <img className="img" src="../src/img/logo.png" alt="logo" />
        <h1 className="nombre">Juanita de las nieves</h1>
      </header>
      <ul className="nav-links">
        <li>inicio</li>
        <li>Librería</li>
        <li>Marroquinería</li>
        <li>Oficina</li>
        <li>Combos</li>
        <CartWidget />
      </ul>
    </nav>
  );
};
export default NavBar;
