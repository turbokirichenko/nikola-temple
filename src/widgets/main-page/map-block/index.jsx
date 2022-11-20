import styles from "./styles.module.scss";
import { YMaps, Map, Placemark } from "react-yandex-maps";

export default function MapBlock() {
  return (
    <div className={styles["map-block"]}>
      <h1 className={styles["map-block__title"]}>КАРТЫ</h1>
      <div className={styles["map-block__map"]}>
        <YMaps>
          <Map
            defaultState={{
              center: [57.193255, 39.419683],
              zoom: 16,
            }}
            width="100%"
            height="100%">
            <Placemark defaultGeometry={[57.193255, 39.419683]} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
}
