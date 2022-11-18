import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
export default function LinkButton({ children, href = "#" }) {
  return (
    <Link to={href}>
      <div className={styles["link-button"]}>{children}</div>
    </Link>
  );
}
