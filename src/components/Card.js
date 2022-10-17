import React from "react";
import styles from "./styles.module.css";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <img src={props.image} className={styles.cover} />
      <p className={styles.heading}>{props.item}</p>
      <p className={styles.price}>Price : {props.price} Rs.</p>
      <div className={styles.quantity}>
        <p> Quantity : </p>
        <input
          type="number"
          min="0"
          onChange={props.handleChange}
          name={props.item}
          className={styles.inp}
        />
      </div>
    </div>
  );
}
