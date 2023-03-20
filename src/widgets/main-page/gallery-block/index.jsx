import styles from "./styles.module.scss";
import { PHOTO_GALLERY_MIN } from "@/shared/constants/gallery-min";

export default function GalleryBlock({ setModalGallery = (f) => f }) {
  return (
    <div className={styles["gallery-block"]}>
      <h1 className={styles["gallery-block__title"]}>ФОТО</h1>
      <div className={styles["gallery-block__content"]}>
        <div className={styles["gallery"]}>
          {PHOTO_GALLERY_MIN.map((src, index) => (
            <div
              className={`${styles["gallery__item"]} ${
                styles["gallery__item-" + index]
              }`}
              key={index}
              onClick={(e) => {
                setModalGallery(index + 1);
              }}>
              <div className={styles["gallery-photo"]}>
                <img
                  className={styles["gallery-photo__image"]}
                  src={src}
                  alt="photo from gallery"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
