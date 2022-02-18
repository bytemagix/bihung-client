import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Category.module.scss";

const Category = (props) => {
  const params = useParams();
  const [list, setList] = useState([]);
  console.log(params);

  const fetchData = async (category) => {
    const res = await fetch(`http://localhost:8080/api/brx/${category}`);
    const data = await res.json();

    console.log(data);
    const arr = [];

    for (const key in data) {
      const item = data[key];
      arr.push(item);
    }
    setList(arr);
  };

  useEffect(() => {
    fetchData(params.category);
  }, []);

  return (
    <div className={styles["category"]}>
      <div className={styles["content"]}>
        <div className={styles["header"]}>
          <span className={styles["header-title"]}>{params.category}</span>
        </div>
        <div>
          <hr />
        </div>
        {list.map((item) => (
          <div className={styles["item"]} key={item.id}>
            <span className={styles["word"]}>{item.word}</span>
            <span className={styles["enmeanings"]}>{item.enMeanings}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
