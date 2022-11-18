import Item from "./ui/item";
import styles from "./styles.module.scss";

import logo from "@/shared/assets/logo1.png";

export default function HeaderMenu({}) {
  return (
    <div className={styles["header-menu"]}>
      <div className={styles["header-menu__ring"]}>
        <Item>о храме</Item>
        <Item>чудотворная икона</Item>
        <Item>заказать требы</Item>
      </div>
      <div className={styles["header-menu__logo"]}>
        <img className={styles["logo"]} src={logo} alt="log" />
      </div>
      <div className={styles["header-menu__ring"]}>
        <Item>галерея</Item>
        <Item>благотворительность</Item>
        <Item>контакты</Item>
      </div>
    </div>
  );
}
