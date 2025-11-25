import FetchProduct from "../FetchProduct";
import styles from "./pages.module.css";
const Promociones = () => {
  return (
    <>
      <h1 className={styles.title}>Combos</h1>
      <FetchProduct categoria="combos" />
    </>
  );
};
export default Promociones;
