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
              center: [55.75, 37.57],
              zoom: 9,
              controls: ["zoomControl", "fullscreenControl"],
            }}
            width="100%"
            height="100%"
            modules={["control.ZoomControl", "control.FullscreenControl"]}>
            <Placemark defaultGeometry={[55.75, 37.57]} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
}
