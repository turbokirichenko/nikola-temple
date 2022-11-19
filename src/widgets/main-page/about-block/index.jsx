import styles from "./styles.module.scss";
import OpenMoreButton from "@/features/open-more-button";

export default function AboutBlock() {
  return (
    <div className={styles["about-block"]}>
      <div className={styles["about-block__title"]}>
        <h1 className={styles["heading-title"]}>О ХРАМЕ</h1>
      </div>
      <div className={styles["about-block__text"]}>
        <span className={styles["temple-info"]}>
          Храм Святителя Николая Чудотворца на Всполье освящен 1813 году (начало
          строительства — 1803 год), стоит на месте утраченных деревянных
          храмов, Никольского и Сретенского (сейчас приделы освящены так же).
          Первое упоминание о Никольской церкви как о храме, относится к 16
          веку. При создании живописной декорации храма, художник следовал
          традициям классицизма. Участки стен с фигурными композициями были
          выделены и обособлены орнаментом, выполненным в технике гризайли,
          имитирующей лепнину. Иконостас Сретенского придела привлекает к себе
          внимание изобилием резного орнамента, выполненного в барочном стиле.
          В 2022 году все внутренние росписи храма были отреставрированы,
          но ремонтно-восстановительный работы продолжаются.
        </span>
      </div>
      <div className={styles["about-block__link-button"]}>
        <OpenMoreButton />
      </div>
    </div>
  );
}
