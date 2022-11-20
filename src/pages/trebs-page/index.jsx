import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import Heading from "@/features/heading";
import TopicBlock from "@/widgets/page-content/topic-block";
import InternalBlock from "@/features/internal-block";
import OrderModal from "@/widgets/order-modal";
import {
  HEALTH_TREBS_ARR,
  HEALTH_PRAY_ARR,
  RIP_TREBS_ARR,
  ADDITIONAL_TREBS_ARR,
} from "./constants";

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const [type, setType] = useState(0);
  const onOpenModal = (type) => {
    setType(type);
    setOpenModal(true);
  };

  return (
    <main className={styles["trebs-page"]}>
      <OrderModal
        type={type}
        size={10}
        isActive={openModal}
        setActive={setOpenModal}
      />
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
              {HEALTH_TREBS_ARR.map(({ name, price }, index) => (
                <div
                  key={index}
                  className={styles["trebs-block__health-trebs"]}
                  onClick={(e) => {
                    console.log("yes");
                    onOpenModal(0);
                  }}>
                  <Note
                    key={index}
                    index={index + 1}
                    name={name}
                    price={price}
                  />
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
              {HEALTH_PRAY_ARR.map(({ name, price }, index) => (
                <div
                  key={index}
                  className={styles["trebs-block__health-pray"]}
                  onClick={(e) => {
                    onOpenModal(1);
                  }}>
                  <Note
                    key={index}
                    index={index + 1}
                    name={name}
                    price={price}
                  />
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
              {RIP_TREBS_ARR.map(({ name, price }, index) => (
                <div
                  key={index}
                  className={styles["trebs-block__rip-trebs"]}
                  onClick={(e) => {
                    onOpenModal(2);
                  }}>
                  <Note
                    key={index}
                    index={index + 1}
                    name={name}
                    price={price}
                  />
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
              {ADDITIONAL_TREBS_ARR.map(({ name, price }, index) => (
                <div
                  key={index}
                  className={styles["trebs-block__additional-trebs"]}>
                  <Note
                    key={index}
                    index={index + 1}
                    name={name}
                    price={price}
                  />
                </div>
              ))}
            </div>
          </InternalBlock>
        </TopicBlock>
      </section>
    </main>
  );
}
