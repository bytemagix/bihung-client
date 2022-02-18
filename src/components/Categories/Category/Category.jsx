import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styles from "./Category.module.scss";

function Category({ label, image, url }) {
  return (
    <Link to={url}>
      <div className={styles["category-c"]}>
        <img src={image || ""} alt={label} />
        <div className={styles["label"]}>{label || ""}</div>
      </div>
    </Link>
  );
}

export default Category;
