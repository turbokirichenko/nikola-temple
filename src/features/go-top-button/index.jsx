import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import Button from "@/shared/ui-kit/button";

export default function GoTopButton({ displayAfter = 200, target }) {
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
