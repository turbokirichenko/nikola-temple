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
  return (
    <main className={styles["main-page"]}>
      <header className={styles["main-page__header"]}></header>
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
      <section className={styles["main-page__gallery-item"]}>
        <GalleryBlock />
      </section>
      <section className={styles["main-page__orders-item"]}>
        <OrderBlock />
      </section>
      <section className={styles["main-page__map-item"]}>
        <MapBlock />
      </section>
      <footer className={styles["main-page__contact-item"]}>
        <ContactBlock />
      </footer>
      <div className={styles["main-page__float-button"]}>
        <Button />
      </div>
    </main>
  );
}
