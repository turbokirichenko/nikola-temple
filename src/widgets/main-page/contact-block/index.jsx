import styles from "./styles.module.scss";
import vkIcon from "@/shared/icons/vk-icon.png";
import mapIcon from "@/shared/icons/map-icon.png";
import phoneIcon from "@/shared/icons/phone-icon.png";
import youtubeIcon from "@/shared/icons/youtube-icon.png";

function ContactColumn({ children, title = "" }) {
  return (
    <div className={styles["contact-column"]}>
      <h1 className={styles["contact-column__heading"]}>{title}</h1>
      <div className={styles["contact-column__items"]}>{children}</div>
    </div>
  );
}

function Contact({ children, icon = "" }) {
  return (
    <div className={styles["contact"]}>
      <div className={styles["contact__content"]}>{children}</div>
      {icon && (
        <img className={styles["contact__image"]} src={icon} alt="contact" />
      )}
    </div>
  );
}

export default function ContactBlock() {
  return (
    <div className={styles["contact-block"]}>
      <div className={styles["contact-block__column"]}>
        <ContactColumn title="КОНТАКТЫ">
          <Contact icon={mapIcon}>
            <span>
              <p>Ростов Великий</p>
              <p>ул. Гоголя 13а</p>
            </span>
          </Contact>
          <Contact icon={phoneIcon}>
            <span>+7 (980) 705 25 88</span>
          </Contact>
        </ContactColumn>
      </div>
      <div className={styles["contact-block__column"]}>
        <ContactColumn title="ЧАСЫ РАБОТЫ">
          <Contact>
            <span>
              <p>ежедневно</p>
              <p>с 9:00 до 13:00</p>
            </span>
          </Contact>
        </ContactColumn>
      </div>
      <div className={styles["contact-block__column"]}>
        <ContactColumn title="СОЦ СЕТИ">
          <Contact icon={youtubeIcon}>
            <span>Youtube</span>
          </Contact>
          <Contact icon={vkIcon}>
            <span>Вконтакте</span>
          </Contact>
          <Contact>
            <span>Телеграм</span>
          </Contact>
        </ContactColumn>
      </div>
    </div>
  );
}