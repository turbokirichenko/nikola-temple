import styles from "./styles.module.scss";
import { useRef } from "react";
import { Outlet } from "react-router-dom";
import HeaderMenu from "@/widgets/header-menu";
import GoTopButton from "@/features/go-top-button";
import AuthorBlock from "@/widgets/author-block";

export default function PageLayout({}) {
  const topRef = useRef(null);
  return (
    <div className={styles["page-layout"]}>
      <div className={styles["page-layout__heading"]} ref={topRef}>
        <HeaderMenu />
      </div>
      <Outlet />
      <footer className={styles["page-layout__about-author"]}>
        <AuthorBlock />
      </footer>
      <div className={styles["page-layout__float-button"]}>
        <GoTopButton displayAfter={200} target={topRef} />
      </div>
    </div>
  );
}
