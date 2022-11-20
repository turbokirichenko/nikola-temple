import TrebForm from "@/features/treb-form";
import styles from "./styles.module.scss";
export default function OrderModal({
  type = 0,
  size = 0,
  isActive = false,
  setActive = (f) => f,
}) {
  console.log(isActive);
  return isActive ? (
    <div className={styles["modal-place"]}>
      <div
        className={styles["order-modal"]}
        onClick={(e) => {
          setActive(false);
        }}>
        <div
          className={styles["order-modal__form"]}
          onClick={(e) => {
            e.stopPropagation();
          }}>
          <TrebForm type={type} size={size} />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
