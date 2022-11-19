import styles from "./styles.module.scss";
import Button from "@/shared/ui-kit/button";
import trebsImg from "@/shared/assets/trebs.svg";
import donationImg from "@/shared/assets/donation.svg";

function ButtonLink({ title = "" }) {
  return (
    <div className={styles["button-wrapper"]}>
      <div className={styles["button-wrapper__content"]}>
        <Button>
          <span className={styles["button-text"]}>{title}</span>
        </Button>
      </div>
    </div>
  );
}

export default function OrderBlock() {
  return (
    <div className={styles["order-block"]}>
      <div className={styles["order-block__item"]}>
        <div className={styles["link-block"]}>
          <img
            className={styles["link-block__image"]}
            src={trebsImg}
            alt="trebs"
          />
          <ButtonLink title={"заказать требы"} />
        </div>
      </div>
      <div className={styles["order-block__item"]}>
        <div className={styles["link-block"]}>
          <img
            className={styles["link-block__image"]}
            src={donationImg}
            alt="donation"
          />
          <ButtonLink title={"пожертвования"} />
        </div>
      </div>
    </div>
  );
}
