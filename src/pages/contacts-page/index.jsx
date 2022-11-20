import styles from "./styles.module.scss";
import { useEffect } from "react";
import Heading from "@/features/heading";
import SubTopic from "@/features/sub-topic";
import TopicBlock from "@/widgets/page-content/topic-block";
import InternalBlock from "@/features/internal-block";

import NikolaImg from "@/shared/assets/nikola-fresco.png";
import BuildingImg from "@/shared/assets/building.png";

export default function ContactsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className={styles["contacts-page"]}>
      <section className={styles["contacts-page__heading"]}>
        <Heading title="Благотворительность" />
      </section>
      <section className={styles["contacts-page__topic"]}>
        <TopicBlock>
          <div className={styles["additional-info"]}>
            <InternalBlock>
              <span className={styles["please-text"]}>
                Благодарим всех, кто оказывал и продолжает оказывать помощь
                приходу Никольского Храма в городе Ростов Великий.
              </span>
            </InternalBlock>
          </div>
        </TopicBlock>
      </section>
      <section className={styles["contacts-page__topic"]}>
        <TopicBlock>
          <InternalBlock icons={[BuildingImg, NikolaImg]}>
            <SubTopic title="Поддержать храм можно по следующим реквизитам:" />
            <span className={styles["alert-text"]}>
              По оффициальному расчетному счету Местной Религиозной Организации
              православный Приход Никольского храма города Ростова Ярославской
              Епархии Русской Православной Церкви.
              <br />
              <p style={{ color: "red" }}>
                С обязательной пометкой: «Пожертвование на уставную
                деятельность»
              </p>
            </span>
            <span className={styles["information-text"]}>
              <p>Банк: СЕВЕРГАЗБАНК (СГБ)</p>
              <p>ОГРН: 1 027 600 006 191</p>
              <p>ИНН: 7 609 006 121 </p>
              <p>КПП: 760 901 001</p>
              <p>К/Р 70 601 810 977 032 102 030 </p>
              <p>Р/С 40 703 810 619 020 000 147</p>
            </span>
            <span>
              Другой способ, сделать пожертвование, прислать его на карту
              Сбербанка настоятеля протоиерея Александра Сачивко по привязанному
              номеру телефона или по номеру карты:
            </span>
            <span className={styles["information-text"]}>
              <p>+7 (980)705-25-88</p>
              <p>5469 4009 8223 9431</p>
            </span>
          </InternalBlock>
        </TopicBlock>
      </section>
    </main>
  );
}
