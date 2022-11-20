import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

import templeHeaderImg from "@/shared/assets/treb-frames/temple-header.png";
import prayHeaderImg from "@/shared/assets/treb-frames/pray-title.png";
import ripHeaderImg from "@/shared/assets/treb-frames/rip-title.png";
import ripFooterImg from "@/shared/assets/treb-frames/rip-footer.png";
import templeFooterImg from "@/shared/assets/treb-frames/temple-footer.png";

export default function TrebForm({ type = 2, size = 0 }) {
  const defaultArr = new Array(size).fill(null);

  let headerSrc =
    type === 0 ? templeHeaderImg : type === 1 ? prayHeaderImg : ripHeaderImg;
  let footerSrc = type === 2 ? ripFooterImg : templeFooterImg;

  useEffect(() => {
    headerSrc =
      type === 0 ? templeHeaderImg : type === 1 ? prayHeaderImg : ripHeaderImg;
    footerSrc = type === 2 ? ripFooterImg : templeFooterImg;
  }, [type]);

  return (
    <form className={styles["treb-form"]} onSubmit={(f) => f}>
      <header className={styles["treb-form__header"]}>
        <img className={styles["header-image"]} src={headerSrc} />
      </header>
      <div className={styles["treb-form__content"]}>
        <div className={styles["inputs"]}>
          {defaultArr.map((x, index) => (
            <div className={styles["inputs__item"]} key={index}>
              <input
                className={`${styles["treb-input"]} ${
                  type === 2 && styles["treb-input-rip"]
                }`}
                key={index}
                type="text"
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles["treb-form__footer"]}>
        <img className={styles["footer-image"]} src={footerSrc} />
      </div>
      <div className={styles["treb-form__submit"]}>
        <button className={styles["treb-button"]} type="submit">
          перейти к оплате
        </button>
      </div>
    </form>
  );
}
