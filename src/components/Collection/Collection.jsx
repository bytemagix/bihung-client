import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchResultItem from "../SearchResultItem/SearchResultItem";
import styles from "./Collection.module.scss";

function ColItem(props) {
  const item = {
    key: "banana",
    definition: "Example definition; Definition 2;",
  };
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(`http://localhost:8080/api/brx/${props.url}`);
    const items = await res.json();
    console.log(items);

    const dataArray = [];
    for (let key in items) {
      const item = items[key];
      dataArray.push(item);
    }

    setData(dataArray);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles["item"]}>
      {data.map((item) => (
        <SearchResultItem key={item.key} item={item} />
      ))}
    </div>
  );
}

function Collection(props) {
  let params = useParams();
  return (
    <div className={styles["collection-c"]}>
      <center>
        <h1>{params.collection}</h1>
      </center>
      <div className={styles["list-container"]}>
        <div className={styles["item-list"]}>
          <ColItem />
        </div>
      </div>
    </div>
  );
}

export default Collection;
