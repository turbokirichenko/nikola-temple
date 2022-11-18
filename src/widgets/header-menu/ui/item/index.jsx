import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export default function Item({ children, href }) {
  return (
    <div className={styles.item}>
      <Link to={href}>
        <span className={styles.item__content}>{children}</span>
      </Link>
    </div>
  );
}
