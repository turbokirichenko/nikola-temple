import { useState } from "react";
import AppRouter from "./router";
import styles from "./App.module.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.app}>
      <AppRouter />
    </div>
  );
}

export default App;
