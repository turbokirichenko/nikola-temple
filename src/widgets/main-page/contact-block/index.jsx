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

function Contact({ children, icon = "", href = "" }) {
  return (
    <a target="_blank" href={href}>
      <div className={styles["contact"]}>
        <div className={styles["contact__content"]}>{children}</div>
        {icon && (
          <img className={styles["contact__image"]} src={icon} alt="contact" />
        )}
      </div>
    </a>
  );
}

export default function ContactBlock() {
  return (
    <div>
      <div className={styles["contact-block"]}>
        <div className={styles["contact-block__column"]}>
          <ContactColumn title="КОНТАКТЫ">
            <Contact
              icon={mapIcon}
              href="https://yandex.ru/maps/10838/rostov/?from=api-maps&ll=39.419683%2C57.193255&mode=routes&origin=jsapi_2_1_79&rtext=~57.193255%2C39.419683&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozNTEyMjExOTM1EmDQoNC%2B0YHRgdC40Y8sINCv0YDQvtGB0LvQsNCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCg0L7RgdGC0L7Qsiwg0YPQu9C40YbQsCDQk9C%2B0LPQvtC70Y8sIDEz0JAiCg3CrR1CFeXFZEI%3D&z=16">
              <span>
                <p>Ростов Великий</p>
                <p>ул. Гоголя 13а</p>
              </span>
            </Contact>
            <Contact icon={phoneIcon} href="tel:+79807052588">
              <span>+7 (980) 705 25 88</span>
            </Contact>
          </ContactColumn>
        </div>
        <div className={styles["contact-block__column"]}>
          <ContactColumn title="ЧАСЫ РАБОТЫ">
            <Contact href="#">
              <span>
                <p>ежедневно</p>
                <p>с 9:00 до 13:00</p>
              </span>
            </Contact>
          </ContactColumn>
        </div>
        <div className={styles["contact-block__column"]}>
          <ContactColumn title="СОЦ СЕТИ">
            <Contact
              icon={youtubeIcon}
              href="https://www.youtube.com/channel/UC4R0nYfYdUnnXpvDw9b6ScQ">
              <span>Youtube</span>
            </Contact>
            <Contact
              icon={vkIcon}
              href="https://vk.com/st.nicholaschurchonvspolye">
              <span>Вконтакте</span>
            </Contact>
            <Contact>
              <span>Телеграм</span>
            </Contact>
          </ContactColumn>
        </div>
      </div>
      <div className={styles["contact-block-credentials"]}></div>
    </div>
  );
}
