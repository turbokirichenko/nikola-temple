import styles from "./styles.module.scss";
import { useEffect } from "react";
import Heading from "@/features/heading";
import TopicBlock from "@/widgets/page-content/topic-block";
import InternalBlock from "@/features/internal-block";

//img
import SuperiorImg from "@/shared/assets/superior.png";
import Superior1Img from "@/shared/assets/superiors/superior1.png";
import Superior2Img from "@/shared/assets/superiors/superior2.png";
import Superior3Img from "@/shared/assets/superiors/superior3.png";

export default function SuperiorPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className={styles["superior-page"]}>
      <section className={styles["superior-page__heading"]}>
        <Heading title="Настоятель Николовспольского храма" />
        <Heading title="г.Ростова Великого" />
      </section>
      <section className={styles["superior-page__topic"]}>
        <TopicBlock title="Протоиерей Александр владимирович Сачивко">
          <InternalBlock icons={[SuperiorImg]}>
            <span className={styles["about-icon-text"]}>
              Настоятель храма протоиерей Александр Сачивко исполняет свои
              обязанности Настоятеля и Председателя приходского совета Храма
              Николая Чудотворца на Всполье г. Ростова Великого с сентября 2011
              года.
            </span>
          </InternalBlock>
        </TopicBlock>
      </section>
      <section className={styles["superior-page__topic"]}>
        <TopicBlock title="">
          <InternalBlock icons={[Superior1Img]}>
            <span className={styles["about-text"]}>
              Родился 29 апреля 1966 года (Тезоименитство — 30 апреля-Пр.
              Александра Свирского Чуд.) в городе Любим, Ярославской обл., где
              служил его отец прот. Владимир в Введенской церкви.
            </span>
            <span className={styles["about-text"]}>
              <p>
                <i>Светское образование: </i>
              </p>
              <p className={styles["about-text__par"]}>
                Ярославский Государственный Педагогический Институт им.
                К. Д. Ушинского, факультет иностранных языков.
              </p>
            </span>
            <span className={styles["about-text"]}>
              <p>
                <i>Духовное образование: </i>
              </p>
              <p className={styles["about-text__par"]}>
                Московская Духовная семинария (1990–1994 гг.)
              </p>
              <p className={styles["about-text__par"]}>
                По окончании МДС, нес церковные послушания в Отделе Внешних
                Церковных Связей и Отделе по Церковной Благотворительности
                и Социальному Служению Московского Патриархата.
              </p>
              <p className={styles["about-text__par"]}>
                Рукоположен в сан пресвитера 28 июля 1999 года, нес послушание
                штатного клирика в Крестобогородской церки г. Ярославля.
              </p>
              <p className={styles["about-text__par"]}>
                С 2002 года по 2011 год — настоятель Толгского храма г. Ростова
                Великого.
              </p>
            </span>
            <span className={styles["about-text"]}>
              <p>Светское образование: </p>
              <p className={styles["about-text__par"]}>
                2014 г. — награждение палицей
              </p>
              <p className={styles["about-text__par"]}>
                2019 г. — награждение крестом с украшениями
              </p>
            </span>
          </InternalBlock>
        </TopicBlock>
      </section>
      <section className={styles["superior-page__topic"]}>
        <TopicBlock title="">
          <div className={styles["additional-info"]}>
            <InternalBlock>
              <span>
                С момента постройки Никольской церкви, в храме служило не один
                десяток священнослужителей. Со слов прошлого настоятеля
                митрофорного протоиерея Владимира Сачивко, он являлся 43
                служителем алтаря, а его сын, нынешний настоятель храма
                протоиерей Александр Сачивко 44. Будучи благочинным
                Ростово-Борисоглебского района, о.Владимир собрал у себя копии
                документов, касающиеся служителей благочиния, а в частности
                Никольского храма г. Ростова. в этих документах встречаются
                упоминания о наградах, перемещениях, некоторые характеристики
                на лиц священного сана, которые служили в данном храме.
                Благодаря личным записям прот. Владимира, можно сказать о датах
                смерти и местах упокоения некоторых настоятелей.
              </span>
            </InternalBlock>
          </div>
        </TopicBlock>
      </section>
      <section className={styles["superior-page__topic"]}>
        <TopicBlock
          title="Протоиерей Владимир Иванович Сачивко
">
          <InternalBlock icons={[Superior2Img, Superior3Img]}>
            <span className={styles["about-block"]}>
              Родился 20 ноября 1938 года в Белоруссии. 1 июля 1956 года окончил
              среднюю школу и в сентябре этого года поступил в Духовную Минскую
              семинарию. 12 декабря 1957 года призван в армию и прослужил
              до 30 декабря 1959 года. После армии продолжил учебу в семинарии.
              21 мая 1963 года окончил учебу и получил аттестат за № 5.
              2 августа того же года зачислен на 1 курс МДА (Московская Духовная
              Академия). В 1969 году закончи МДА, а в 1972 году удостоен звания
              «кандидат богословия».
            </span>
            <span className={styles["about-text"]}>
              8/21 сентября 1965 года рукоположен в сан диакона епископом
              Дмитровским Филаретом (удостоверение от 6 октября 1965 года
              № 1429). 26 декабря того же года рукоположен в сан священника
              митрополитом Крутицким и Коломенским Пименом (Удостоверение
              от 27 декабря 1965 года № 1024). 24 января 1966 года назначен
              во Введенскую церковь города Любима, где прослужил да 14 апреля
              1967 года и был назначен 2 священником к Никольской церкви города
              Ростова. С 11 июня 1969 года указом за № 35 митрополита Иоанна
              (Вендланта) назначен настоятелен указанной церкви. Награжден:
              наперсным крестом (удостов. № 161 от 4 августа 1971 года), саном
              протоиерея (удостов. № 75 от 27 марта 1974 года), палицей
              (удостов. № 100 от 10 апреля 1979 года), наградным крестом
              с украшениями (удостов. № 74 от 10 апреля 1979 года).
              Вышеперечисленные награды были даны указами Свят. Патр. Пименом.
              Указом Свят. Патр. Алексия ǁ удостоен права ношения митры
              (удостов. № 115 от 23 апреля 1998 года). Награжден Золотой медалью
              Ярославской Епархии (указ. № 015 архиеп. Кирилла от 16 октября
              2006 года) и грамотой в память 1015-летия образования
              Ярославо-Ростовской Епархии. Дума Ростовского Муниципального
              Района Ярославской области от 21 сентября 2006 года за № 159
              решила присвоить звание «Почетный гражданин Ростовского
              муниципального района». С 1974 года до сентября 2002 года нес
              послушание благочинного Ростовского и Борисоглебского округа. О.
              Владимир почил 11 сентября 2011 года. Его могила находится
              на южной стороне алтаря Никольского храма рядом с изображением Св.
              Равноапостольного Князя Владимира. Биография и послужной список
              составлены со слов о.Владимира.
            </span>
          </InternalBlock>
        </TopicBlock>
      </section>
    </main>
  );
}
