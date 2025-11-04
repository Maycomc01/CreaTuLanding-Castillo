import styles from "./Banners.module.css";
const Banners = () => {
  return (
    <>
      <div className={styles.contenedor}>
        <img
          className={styles.img}
          src="../src/img/Banner.jpg"
          alt="Banner_bienvenida"
        />
        <img
          className={styles.img}
          src="../src/img/BANNER CUADERNOS A4.png"
          alt="Banner_bienvenida"
        />
        <img
          className={styles.img}
          src="../src/img/BANNER COMBO BASIC.jpg"
          alt="Banner_bienvenida"
        />
        <img
          className={styles.img}
          src="../src/img/BANNER COMBO ARTE.jpg"
          alt="Banner_bienvenida"
        />
      </div>
    </>
  );
};
export default Banners;
