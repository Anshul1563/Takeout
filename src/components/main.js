import React from "react";
import Card from "./Card";
import Summary from "./Summary";
import Data from "./data";
import styles from "./styles.module.css";

export default function Main() {
  const [quantities, setQuantities] = React.useState({
    Pizza: 0,
    Burger: 0,
    Sandwich: 0,
  });
  const foodArray = Data;
  var c = 0;
  const cardArray = foodArray.map((item) => {
    return (
      <Card
        item={item.Item}
        price={item.Price}
        handleChange={handleChange}
        image={item.image}
        key={c++}
      />
    );
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setQuantities((prevState) => {
      return { ...prevState, [name]: value };
    });
  }
  console.log(quantities);
  return (
    <div className={styles.main}>
      <div className={styles.cardContainer}>{cardArray}</div>
      <Summary items={quantities} />
    </div>
  );
}
