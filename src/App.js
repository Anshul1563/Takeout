import Header from "./components/header";
import Main from "./components/main";
import styles from "./components/styles.module.css";
import React from "react";

export default function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
    </div>
  );
}
