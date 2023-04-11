import React from "react";
import AvailableFood from "./AvailableFood";
import classes from "./Food.module.css";

function Food(props) {
  return (
    <>
      {props.food.map((f) => (
        <div key={f.id} className={classes.container}>
          <AvailableFood key={f.id} f={f} />
        </div>
      ))}
    </>
  );
}

export default Food;
