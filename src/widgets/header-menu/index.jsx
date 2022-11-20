import Item from "./ui/item";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

import logo from "@/shared/assets/logo1.png";

export default function HeaderMenu({}) {
  return (
    <div className={styles["header-menu"]}>
      <div className={styles["header-menu__ring"]}>
        <Item href="history">история</Item>
        <Item href="sacred">чудотворная икона</Item>
        <Item href="trebs">заказать требы</Item>
      </div>
      <div className={styles["header-menu__logo"]}>
        <Link to="/">
          <img className={styles["logo"]} src={logo} alt="log" />
        </Link>
      </div>
      <div className={styles["header-menu__ring"]}>
        <Item href="/#gallery">галерея</Item>
        <Item href="contacts">благотворительность</Item>
        <Item href="/#contact">контакты</Item>
      </div>
      <div className={styles["header-menu__open-menu"]}>меню</div>
    </div>
  );
}
