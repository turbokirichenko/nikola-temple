import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

import LinkButton from "@/shared/ui-kit/link-button";

export default function AlertBlock() {
  return (
    <div className={styles["alert-block"]}>
      <div className={styles["alert-block__title"]}>
        <div className={styles["description"]}>
          <span className={styles["description__text"]}>
            Актуальную информацию о службах, новостях и жизни храма вы можете
            отследить вконтакте
          </span>
        </div>
      </div>
      <div className={styles["alert-block__redirects"]}>
        <div className={styles["redirect-block"]}>
          <div className={styles["redirect-block__item"]}>
            <LinkButton href="#">
              <span className={styles["link-button-text"]}>
                группа вконтакте
              </span>
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}
