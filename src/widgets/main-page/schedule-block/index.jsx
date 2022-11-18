import styles from "./styles.module.scss";
import frescoImg from "@/shared/assets/fresco.png";

function BlurBlock({ children }) {
  return (
    <div className={styles["blur-block"]}>
      <div className={styles["blur-block__content"]}>{children}</div>
    </div>
  );
}

export default function ScheduleBlock() {
  return (
    <div className={styles["schedule-block"]}>
      <img
        className={styles["schedule-block__background"]}
        src={frescoImg}
        alt="fresco"
      />
      <div className={styles["schedule-block__title"]}>
        <h1 className={styles["heading-title"]}>РАСПИСАНИЕ</h1>
      </div>
      <div className={styles["schedule-block__information-item"]}>
        <BlurBlock>
          <span className={styles["about-temple-info"]}>
            Богослужения совершаются по субботним и воскресным дням,
            в праздничные и предпразничные дни, утренние богослужения начинаются
            в 8:00, вечерние в 17:00
          </span>
        </BlurBlock>
      </div>
      <div className={styles["schedule-block__opening-hour-item"]}>
        <BlurBlock>
          <h3 className={styles["opening-hour-info"]}>
            ХРАМ ОТКРЫТ ЕЖЕДНЕВНО С 9:00 ДО 13:00
          </h3>
        </BlurBlock>
      </div>
    </div>
  );
}
