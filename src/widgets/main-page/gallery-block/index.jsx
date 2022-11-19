import styles from "./styles.module.scss";

import R1Img from "@/shared/assets/gallery/R1.png";
import R2Img from "@/shared/assets/gallery/R2.png";
import R3Img from "@/shared/assets/gallery/R3.png";
import R4Img from "@/shared/assets/gallery/R4.png";
import R5Img from "@/shared/assets/gallery/R5.png";
import R6Img from "@/shared/assets/gallery/R6.png";
import R7Img from "@/shared/assets/gallery/R7.png";
import R8Img from "@/shared/assets/gallery/R8.png";
import R9Img from "@/shared/assets/gallery/R9.png";
import R10Img from "@/shared/assets/gallery/R10.png";
import R11Img from "@/shared/assets/gallery/R11.png";
import R12Img from "@/shared/assets/gallery/R12.png";

const photo = [
  R1Img,
  R2Img,
  R3Img,
  R4Img,
  R5Img,
  R6Img,
  R7Img,
  R8Img,
  R9Img,
  R10Img,
  R11Img,
  R12Img,
];

export default function GalleryBlock() {
  return (
    <div className={styles["gallery-block"]}>
      <h1 className={styles["gallery-block__title"]}>ФОТО</h1>
      <div className={styles["gallery-block__content"]}>
        <div className={styles["gallery"]}>
          {photo.map((src, index) => (
            <img
              className={`${styles["gallery__item"]} ${
                styles["gallery__item-" + index]
              }`}
              src={src}
              alt="photo"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
