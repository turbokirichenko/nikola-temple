import HeaderMenu from "../../widgets/header-menu";
import styles from "./styles.module.scss";
import PresentBlock from "@/widgets/main-page/present-block";
import AlertBlock from "@/widgets/main-page/alert-block";
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
        schedule-item
      </section>
      <section className={styles["main-page__about-item"]}>about-item</section>
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
    </main>
  );
}
