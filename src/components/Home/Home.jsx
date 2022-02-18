import { useState, useEffect } from "react";
import Categories from "../Categories/Categories";
import styles from "./Home.module.scss";

const MAX_RESULTS_TO_DISPLAY = 5;

function Home(props) {
  return (
    <div className={styles["home-box"]}>
      <center>
        <h1>Welcome to Bihung</h1>
      </center>
      <div className={styles["t-label"]}>Common Words</div>
      <Categories />
    </div>
  );
}

export default Home;
