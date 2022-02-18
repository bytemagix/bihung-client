import { useState, useEffect } from "react";
import Category from "./Category/Category";
import styles from "./Categories.module.scss";

import GreetingsImage from "../../resources/images/greetings.jpg";
import AnimalsImage from "../../resources/images/animals.jpg";
import CountingImage from "../../resources/images/counting.jpg";
import DaysImage from "../../resources/images/days.jpg";
import FruitsImage from "../../resources/images/fruits.jpg";
import RelationsImage from "../../resources/images/relations.jpg";

function Categories(props) {
  return (
    <div className={styles["categories-c"]}>
      <Category
        label={"Greetings"}
        image={GreetingsImage}
        url="/common-words/greetings"
      />
      <Category
        label={"Relations"}
        image={RelationsImage}
        url="/common-words/relations"
      />
      <Category
        label={"Fruits"}
        image={FruitsImage}
        url="/common-words/fruits"
      />
      <Category
        label={"Animals"}
        image={AnimalsImage}
        url="/common-words/animals"
      />
      <Category
        label={"Counting"}
        image={CountingImage}
        url="/common-words/countings"
      />
      <Category label={"Days"} image={DaysImage} url="/common-words/days" />
    </div>
  );
}

export default Categories;
