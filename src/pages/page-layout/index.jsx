import styles from "./styles.module.scss";
import { useRef, useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import HeaderMenu from "@/widgets/header-menu";
import Button from "@/shared/ui-kit/button";

function GoTopButton({ displayAfter = 200, target }) {
  const [showButton, setShowButton] = useState(false);
  const handleShowButton = (displayAfter) => () => {
    if (!showButton && window.scrollY > displayAfter) {
      setShowButton(true);
      return;
    }
    if (!showButton && window.scrollY <= displayAfter) {
      setShowButton(false);
      return;
    }
  };

  window.addEventListener("scroll", handleShowButton(displayAfter));
  useEffect(() => {
    return window.removeEventListener("scroll", handleShowButton(displayAfter));
  });

  const scrollToRef = (target) => {
    window.scrollTo({
      top: target.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${styles["float-button"]} ${
        !showButton && styles["float-button-disable"]
      }`}>
      <Button onclick={() => scrollToRef(target)} />
    </div>
  );
}
export default function PageLayout({}) {
  const topRef = useRef(null);
  return (
    <div className={styles["page-layout"]}>
      <div className={styles["page-layout__heading"]} ref={topRef}>
        <HeaderMenu />
      </div>
      <Outlet />
      <div className={styles["page-layout__float-button"]}>
        <GoTopButton displayAfter={200} target={topRef} />
      </div>
    </div>
  );
}
