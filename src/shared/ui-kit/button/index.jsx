import { classLister } from "@/shared/utils/class-lister";
import styles from "./styles.module.scss";
import arrowRight from "@/shared/assets/arrow-right.svg";

export default function Button({
  children,
  onclick = (f) => f,
  enableArrow = false,
}) {
  const classes = classLister(styles);
  const shortMode = children === undefined;
  return (
    <button
      onClick={onclick}
      className={classes(
        "button-wrapper",
        shortMode && "button-wrapper-minimize"
      )}>
      <div className={styles["button-wrapper__content"]}>{children}</div>
      {(enableArrow || shortMode) && (
        <div
          className={classes(
            "button-wrapper__arrow",
            shortMode && "button-wrapper__arrow-minimize"
          )}>
          <img className={styles["arrow-img"]} src={arrowRight} alt="arrow" />
        </div>
      )}
    </button>
  );
}
