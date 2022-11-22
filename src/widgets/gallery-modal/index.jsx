import styles from "./styles.module.scss";
import { PHOTO_GALLERY } from "@/shared/constants/gallery";
import { useState, useEffect } from "react";

import arrowPrevImg from "@/shared/icons/arrow-left.svg";

export default function GalleryModal({
  modalGallery,
  setModalGallery = (f) => f,
}) {
  const MAX_SIZE_GALLERY = PHOTO_GALLERY.length;
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setCurrentImage(modalGallery ? modalGallery - 1 : 0);
  }, [modalGallery]);

  const onNext = () => {
    const next = (currentImage + 1) % MAX_SIZE_GALLERY;
    setCurrentImage(next);
  };

  const onPrev = () => {
    const prev = currentImage ? currentImage - 1 : MAX_SIZE_GALLERY - 1;
    setCurrentImage(prev);
  };

  return modalGallery ? (
    <div
      className={styles["modal-place"]}
      onClick={(e) => {
        setModalGallery(false);
      }}>
      <div className={styles["gallery-layout"]}>
        <div
          className={styles["gallery-layout__content"]}
          onClick={(e) => {
            e.stopPropagation();
          }}>
          <div className={styles["gallery-photo"]}>
            <img
              className={styles["gallery-photo__image"]}
              src={PHOTO_GALLERY[currentImage]}
            />
            <button
              className={`${styles["gallery-photo__button-next"]} ${styles["gallery-photo__button"]}`}
              onClick={(e) => {
                onNext();
                e.stopPropagation();
              }}>
              <img src={arrowPrevImg} className={styles["button-image"]} />
            </button>
            <button
              className={`${styles["gallery-photo__button-prev"]} ${styles["gallery-photo__button"]}`}
              onClick={(e) => {
                onPrev();
                e.stopPropagation();
              }}>
              <img src={arrowPrevImg} className={styles["button-image"]} />
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
