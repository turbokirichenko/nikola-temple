import styles from "./styles.module.scss";
import Topic from "@/features/topic";
export default function TopicBlock({ children, title = "", subTitle = "" }) {
  return (
    <div className={styles["topic-block"]}>
      <div className={styles["topic-block__name"]}>
        <Topic title={title} />
      </div>
      <div className={styles["topic-block__content"]}>{children}</div>
    </div>
  );
}
