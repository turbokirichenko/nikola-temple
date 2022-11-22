import Item from "./ui/item";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

import logo from "@/shared/assets/logo1.png";

export default function HeaderMenu({}) {
  const [isClosing, setIsClosing] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);

  const onClose = () => {
    if (isClosing) return;
    const timeoutPoint = setTimeout(() => {
      setDisplayMenu(false);
      setIsClosing(false);
    }, 1600);
    setIsClosing(timeoutPoint);
  };

  const onOpen = () => {
    setDisplayMenu(true);
  };

  return (
    <div
      className={styles["header-menu"]}
      onClick={(e) => {
        onClose();
      }}>
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
      <div
        className={styles["header-menu__open-menu"]}
        onClick={(e) => {
          displayMenu ? onClose() : onOpen();
          e.stopPropagation();
        }}>
        {displayMenu ? "закрыть" : "меню"}
      </div>
      {displayMenu && (
        <div className={styles["header-menu__float-menu"]}>
          <div className={styles["float-menu"]}>
            <section
              className={`${styles["float-menu__item"]} ${
                styles["float-menu__item-1"]
              } ${styles[`float-menu__item-${isClosing && "closing"}`]}`}>
              <Item href="history">история</Item>
            </section>
            <section
              className={`${styles["float-menu__item"]} ${
                styles["float-menu__item-2"]
              } ${styles[`float-menu__item-${isClosing && "closing"}`]}`}>
              <Item href="sacred">чудотворная икона</Item>
            </section>
            <section
              className={`${styles["float-menu__item"]} ${
                styles["float-menu__item-3"]
              } ${styles[`float-menu__item-${isClosing && "closing"}`]}`}>
              <Item href="trebs">заказать требы</Item>
            </section>
            <section
              className={`${styles["float-menu__item"]} ${
                styles["float-menu__item-4"]
              } ${styles[`float-menu__item-${isClosing && "closing"}`]}`}>
              <Item href="/#gallery">галерея</Item>
            </section>
            <section
              className={`${styles["float-menu__item"]} ${
                styles["float-menu__item-5"]
              } ${styles[`float-menu__item-${isClosing && "closing"}`]}`}>
              <Item href="contacts">благотворительность</Item>
            </section>
            <section
              className={`${styles["float-menu__item"]} ${
                styles["float-menu__item-6"]
              } ${styles[`float-menu__item-${isClosing && "closing"}`]}`}>
              <Item href="/#contact">контакты</Item>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
