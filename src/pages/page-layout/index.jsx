import styles from "./styles.module.scss";
import { useRef } from "react";
import { Outlet } from "react-router-dom";
import HeaderMenu from "@/widgets/header-menu";
import GoTopButton from "@/features/go-top-button";

export default function PageLayout({}) {
  const topRef = useRef(null);
  return (
    <div className={styles["page-layout"]}>
      <div className={styles["page-layout__heading"]} ref={topRef}>
        <HeaderMenu />
      </div>
      <Outlet />
      <div className={styles["page-layout__float-button"]}>
        <GoTopButton displayAfter={200} target={topRef} />
      </div>
    </div>
  );
}
