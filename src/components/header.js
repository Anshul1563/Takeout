import React from "react";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <p>Takeout Page</p>
      <a className={styles.link} href="https://google.com" target="_blank">
        Home
      </a>
    </div>
  );
}
