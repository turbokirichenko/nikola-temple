import styles from "./styles.module.scss";
import Topic from "@/features/topic";
import SubTopic from "@/features/sub-topic";

export default function TopicBlock({ children, title = "", description = "" }) {
  return (
    <div className={styles["topic-block"]}>
      <div className={styles["topic-block__name"]}>
        <Topic title={title} />
        {description && <SubTopic title={description} />}
      </div>
      <div className={styles["topic-block__content"]}>{children}</div>
    </div>
  );
}
