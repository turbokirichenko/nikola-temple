import styles from "./styles.module.scss";
import Button from "@/shared/ui-kit/button";
import superiorImg from "@/shared/assets/superior.png";

export default function SuperiorBlock() {
  return (
    <div className={styles["superior-block"]}>
      <div className={styles["superior-block__info"]}>
        <div className={styles["information"]}>
          <h1 className={styles["information__heading"]}>НАСТОЯТЕЛЬ</h1>
          <span className={styles["information__text"]}>
            С момента постройки Никольской церкви, в храме служило не один
            десяток священнослужителей. Со слов прошлого настоятеля митрофорного
            протоиерея Владимира Сачивко, он являлся 43 служителем алтаря, а его
            сын, нынешний настоятель храма протоиерей Александр Сачивко 44.м
          </span>
          <div className={styles["information__button"]}>
            <div className={styles["button-wrapper"]}>
              <div className={styles["button-wrapper__content"]}>
                <Button enableArrow />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["superior-block__image"]}>
        <img
          className={styles["image-block"]}
          src={superiorImg}
          alt="superior"
        />
      </div>
    </div>
  );
}
