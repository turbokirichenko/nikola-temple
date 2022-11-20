import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderMenu from "../../widgets/header-menu";
import styles from "./styles.module.scss";
import PresentBlock from "@/widgets/main-page/present-block";
import AlertBlock from "@/widgets/main-page/alert-block";
import ScheduleBlock from "@/widgets/main-page/schedule-block";
import AboutBlock from "@/widgets/main-page/about-block";
import SacredBlock from "@/widgets/main-page/sacred-block";
import SuperiorBlock from "@/widgets/main-page/superior-block";
import OrderBlock from "@/widgets/main-page/order-block";
import GalleryBlock from "@/widgets/main-page/gallery-block";
import ContactBlock from "@/widgets/main-page/contact-block";
import MapBlock from "@/widgets/main-page/map-block";
import Button from "@/shared/ui-kit/button";

export default function MainPage() {
  const mainRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);
  const routePath = useLocation();

  const scrollToRef = (target) => {
    window.scrollTo({
      top: target.current.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const urlHash = routePath.hash;
    switch (urlHash) {
      case "#contact":
        scrollToRef(contactRef);
        break;
      case "#gallery":
        scrollToRef(galleryRef);
        break;
      default:
        scrollToRef(mainRef);
        break;
    }
  }, [routePath]);

  return (
    <main ref={mainRef} className={styles["main-page"]}>
      <section className={styles["main-page__present-item"]}>
        <PresentBlock />
      </section>
      <section className={styles["main-page__alert-item"]}>
        <AlertBlock />
      </section>
      <section className={styles["main-page__schedule-item"]}>
        <ScheduleBlock />
      </section>
      <section className={styles["main-page__about-item"]}>
        <AboutBlock />
      </section>
      <section className={styles["main-page__sacred-item"]}>
        <SacredBlock />
      </section>
      <section className={styles["main-page__superior-item"]}>
        <SuperiorBlock />
      </section>
      <section ref={galleryRef} className={styles["main-page__gallery-item"]}>
        <GalleryBlock />
      </section>
      <section className={styles["main-page__orders-item"]}>
        <OrderBlock />
      </section>
      <section className={styles["main-page__map-item"]}>
        <MapBlock />
      </section>
      <footer ref={contactRef} className={styles["main-page__contact-item"]}>
        <ContactBlock />
      </footer>
    </main>
  );
}
