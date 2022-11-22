import styles from "./styles.module.scss";
import { PHOTO_GALLERY } from "@/shared/constants/gallery";

export default function GalleryBlock({ setModalGallery = (f) => f }) {
  return (
    <div className={styles["gallery-block"]}>
      <h1 className={styles["gallery-block__title"]}>ФОТО</h1>
      <div className={styles["gallery-block__content"]}>
        <div className={styles["gallery"]}>
          {PHOTO_GALLERY.map((src, index) => (
            <img
              className={`${styles["gallery__item"]} ${
                styles["gallery__item-" + index]
              }`}
              key={index}
              src={src}
              alt="photo"
              onClick={(e) => {
                setModalGallery(index + 1);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
