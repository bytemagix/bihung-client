import styles from "./SearchResultItem.module.scss";

function SearchResultItem({ item }) {
  let link = `http://localhost:8080/api/define/${item.word}`;
  return (
    <a href={link}>
      <div className={styles["result-item"]}>
        <div className={styles["word"]}>{item.key || ""}</div>
        <div className={styles["definition"]}>{item.word || ""}</div>
        <div className={styles["definition"]}>{item.brxMeanings || ""}</div>
        <div className={styles["definition"]}>{item.enMeanings || ""}</div>
      </div>
    </a>
  );
}

export default SearchResultItem;
