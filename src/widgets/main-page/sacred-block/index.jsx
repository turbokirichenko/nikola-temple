import OpenMoreButton from "@/features/open-more-button";
import styles from "./styles.module.scss";
import IconImg from "@/shared/assets/icon.png";
import IconImgBlurMin from "@/shared/assets/icon-blur-min.png";
import LazyImage from "@/features/lazy-image";

export default function SacredBlock() {
  return (
    <div className={styles["sacred-block"]}>
      <div className={styles["sacred-block__title"]}>
        <h1 className={styles["heading-title"]}>ЧУДОТВОРНАЯ ИКОНА</h1>
      </div>
      <div className={styles["sacred-block__information"]}>
        <span className={styles["sacred-text"]}>
          <p>
            Уникальной святыней храма является чудотворная икона Божией Матери "
            Умиление - Ростовская" (память 1 апреля, 16 августа). Изначально
            находилась в Благовещенском храме, где 19 марта 1911 года при
            громадном скоплении народа Архиепископ Ярославский и Ростовский
            Высокопреосвященнейший Тихон на основании многих произошедших чудес
            благословил прославить новоявленную чудотворную икону, получившую
            именование – «Умиление-Ростовская».
          </p>
          <p>
            В 1913-м году в год празднования 300-летия дома Романовых Ростов
            посетила семья святых страстотерпцев Царя-мученика Николая
            Александровича. Государь вместе со своей семьей поднялся в церковь
            Благовещения пресвятой Богородицы, где находилась икона и долго
            молился перед этим образом.
          </p>
          <p>
            В 1930-м году ростовский Благовещенский храм был разрушен, а икона
            была сохранена в Храме Святителя Николая Чудотворца на Всполье.
          </p>
          <p>
            С 1910 года этот образ прославился обильными исцелениями. По
            свидетельствам происшедших от иконы Божией Матери чудес была
            составлена и выпущена отдельным изданием книга, которая помогла
            сохранить память об этой святыне.
          </p>
        </span>
      </div>
      <div className={styles["sacred-block__icon"]}>
        <div className={styles["sacred-icon"]}>
          <LazyImage src={IconImgBlurMin} loadSrc={IconImg} alt="sacred icon" />
        </div>
      </div>
      <div className={styles["sacred-block__more-button"]}>
        <OpenMoreButton to="/sacred" />
      </div>
    </div>
  );
}
