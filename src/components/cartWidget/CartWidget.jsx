import styles from "./cartWidget.module.css";
const cartWidget = () => {
  return (
    <div className={styles.cart}>
      🛒<span>0</span>
    </div>
  );
};

export default cartWidget;
