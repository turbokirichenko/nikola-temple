import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

export default function LazyImage({ src, loadSrc, alt = "" }) {
  const imageTarget = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = loadSrc;
    img.onload = () => {
      if (imageTarget) {
        imageTarget.current.src = img.src;
      }
    };
  }, []);

  return (
    <img
      ref={imageTarget}
      className={styles["lazy-image"]}
      src={src}
      onLoad={onload}
      alt={alt}
      loading="lazy"
    />
  );
}
