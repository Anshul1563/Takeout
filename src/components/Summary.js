import React from "react";
import styles from "./styles.module.css";

export default function Summary(props) {
  console.log(props.items);
  const total =
    props.items.Pizza * 120 +
    props.items.Burger * 150 +
    props.items.Sandwich * 80;
  var current = new Date();

  return (
    <div className={styles.summary}>
      <p className={styles.order}>Order Summary</p>
      <div className={styles.items}>
        <p>
          Pizzas :{" "}
          <span className={styles.bolded}>{props.items.Pizza} * 120 Rs. </span>
        </p>
        <p>
          Burgers :{" "}
          <span className={styles.bolded}>{props.items.Burger} * 150 Rs. </span>
        </p>
        <p>
          Sandwiches :{" "}
          <span className={styles.bolded}>
            {props.items.Sandwich} * 80 Rs.{" "}
          </span>
        </p>
        <p>
          Total : <span className={styles.bolded}>{total} Rs.</span>
        </p>
      </div>
      <div className={styles.time}>
        <p>Current Time : {current.toLocaleTimeString()}</p>
        <p>
          Expected Delivery Time :{" "}
          {parseInt(current.toLocaleTimeString()[0]) + 1}
          {current.toLocaleTimeString().slice(1)}
        </p>
      </div>
    </div>
  );
}
