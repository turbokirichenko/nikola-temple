import styles from "./styles.module.scss";
import Heading from "@/features/heading";
import TopicBlock from "@/widgets/page-content/topic-block";
import InternalBlock from "@/features/internal-block";
import SubTopic from "@/features/sub-topic";

function Note({ index, name, price }) {
  return (
    <div className={styles["note"]}>
      <div className={styles["note__content"]}>
        <span style={{ marginRight: "7px" }}>{index}.</span>
        <span>{name}</span>
      </div>
      {price && <div className={styles["note__price"]}>{price} рублей</div>}
    </div>
  );
}

export default function TrebsPage() {
  const healthTrebsArr = [
    { name: "Простая записка о здравии 10 имён", price: 30 },
    { name: "Заказная записка о здравии 1 имя", price: 10 },
    { name: "Благодарственная записка о здравии 1 имя", price: 10 },
    { name: "Записка о путешествующих 1 имя", price: 10 },
    { name: "Записка о болящих 1 имя", price: 10 },
    { name: "Записка об в узах заключенных 1 имя", price: 10 },
    { name: "Сорокоуст 1 имя (поминовение в течение 40 служб)", price: 10 },
    { name: "Годовое поминовение 1 имя", price: 2000 },
  ];
  const healthPrayArr = [
    {
      name: "Молебен Пресвятой Богородице «Умиление-Ростовская»",
      price: 100,
    },
    { name: "Молебен Святителю Николаю Чудотворцу", price: 100 },
    { name: "Молебен Святому", price: 100 },
    { name: "Молебен водосвятный", price: 200 },
    { name: "Молебен Благодарственный", price: 200 },
  ];
  const RipTrebsArr = [
    { name: "Заказная записка об упок оении  1 имя", price: 10 },
    { name: "Простая записка об упокоении 10 имён", price: 30 },
    {
      name: "Сорокоуст об упокоении 1 имя (поминовение в течение 40 служб)",
      price: 300,
    },
    { name: "Годовое поминовение 1 имя", price: 2000 },
    {
      name: "Панихида 10 имён (заупокойная служба, не путать с отпеванием)",
      price: 250,
    },
    { name: "Лития 10 имён (краткая заупокойная служба)", price: 200 },
  ];

  const additionalTrebsArr = [
    { name: "Крещения", price: "" },
    { name: "Венчания", price: "" },
    { name: "Отпевания", price: "" },
    { name: "Таинство Соборования (Елеосвящения)", price: "" },
    { name: "Освящение жилищ, транспорта и прочего", price: "" },
  ];
  return (
    <main className={styles["trebs-page"]}>
      <section className={styles["trebs-page__heading"]}>
        <Heading title="Записки и требы" />
      </section>
      <section className={styles["trebs-page__topic"]}>
        <InternalBlock>
          <span>
            Для поминовения о здравии и упокоении православных христиан выберете
            тип поминовения и напишите в онлайн записке имена православных
            христиан, данные при Святом Крещении, указывая их в родительном
            падеже.
          </span>
        </InternalBlock>
      </section>
      <section className={styles["trebs-page__topic"]}>
        <TopicBlock title="О здравии:" description="(нажмите на нужную требу)">
          <InternalBlock>
            <div className={styles["trebs-block"]}>
              {healthTrebsArr.map(({ name, price }, index) => (
                <div className={styles["trebs-block__health-trebs"]}>
                  <Note index={index + 1} name={name} price={price} />
                </div>
              ))}
            </div>
          </InternalBlock>
        </TopicBlock>
      </section>
      <section className={styles["trebs-page__topic"]}>
        <TopicBlock
          title="молебны о здравии:"
          description="до 10 имен в каждом молебне!">
          <InternalBlock>
            <div className={styles["trebs-block"]}>
              {healthPrayArr.map(({ name, price }, index) => (
                <div className={styles["trebs-block__health-pray"]}>
                  <Note index={index + 1} name={name} price={price} />
                </div>
              ))}
            </div>
          </InternalBlock>
        </TopicBlock>
      </section>
      <section className={styles["trebs-page__topic"]}>
        <TopicBlock title="об упокоении:">
          <InternalBlock>
            <div className={styles["trebs-block"]}>
              {RipTrebsArr.map(({ name, price }, index) => (
                <div className={styles["trebs-block__rip-trebs"]}>
                  <Note index={index + 1} name={name} price={price} />
                </div>
              ))}
            </div>
          </InternalBlock>
        </TopicBlock>
      </section>
      <section className={styles["trebs-page__topic"]}>
        <TopicBlock title="также в храме есть:">
          <InternalBlock>
            <div className={styles["trebs-block"]}>
              {additionalTrebsArr.map(({ name, price }, index) => (
                <div className={styles["trebs-block__additional-trebs"]}>
                  <Note index={index + 1} name={name} price={price} />
                </div>
              ))}
            </div>
          </InternalBlock>
        </TopicBlock>
      </section>
    </main>
  );
}
