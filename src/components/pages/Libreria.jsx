import FetchProduct from "../FetchProduct";
import styles from "./pages.module.css";

const Librería = () => {
  return (
    <>
      <h1 className={styles.title}>Productos de Librería</h1>
      <FetchProduct categoria="libreria" />
    </>
  );
};

export default Librería;
