import HeaderMenu from "../../widgets/header-menu";
import styles from "./styles.module.scss";
import PresentBlock from "@/widgets/main-page/present-block";
import AlertBlock from "@/widgets/main-page/alert-block";
import ScheduleBlock from "@/widgets/main-page/schedule-block";
import AboutBlock from "@/widgets/main-page/about-block";
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
        sacred-item
      </section>
      <section className={styles["main-page__superior-item"]}>
        superior-item
      </section>
      <section className={styles["main-page__gallery-item"]}>
        gallery-item
      </section>
      <section className={styles["main-page__orders-item"]}>
        orders-item
      </section>
      <section className={styles["main-page__map-item"]}>map-item</section>
      <footer className={styles["main-page__contact-item"]}>
        contact-item
      </footer>
      <div className={styles["main-page__float-button"]}>
        <Button />
      </div>
    </main>
  );
}
