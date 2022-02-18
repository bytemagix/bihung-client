import { useState, useEffect } from "react";
import SearchResultItem from "../SearchResultItem/SearchResultItem";
import { ReactComponent as CloseIcon } from "../../resources/icons/close-outline.svg";
import styles from "./SearchBox.module.scss";
import { search } from "../../api/api";

const MAX_RESULTS_TO_DISPLAY = 5;

function SearchBox(props) {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const onTextChangeHandler = (event) => {
    setSearchText(event.target.value);
    fetchResuts(event.target.value);
  };

  const fetchResuts = async (word) => {
    console.log(word);
    try {
      const res = await fetch(
        `http://localhost:8080/api/recommended-word/${word}`
      );
      const data = await res.json();
      console.log(data);
      setSearchResults(data.words);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setSearchResults(search(searchText));
  }, [searchText]); // Only re-run the effect if searchText changes

  return (
    <div className={styles["search-box"]}>
      <input
        type="search"
        placeholder="search"
        value={searchText}
        onChange={onTextChangeHandler}
      />
      {/* <CloseIcon
        className={styles["close-icon"]}
        onClick={() => setSearchText("")}
        style={{ visibility: !searchText ? "hidden" : "visible" }}
        title="Clear"
      /> */}
      <div
        className={styles["results"]}
        style={{ display: !searchText ? "none" : "block" }}
      >
        {searchResults.length ? (
          searchResults.map((item) => (
            <SearchResultItem key={item.word} item={item} />
          ))
        ) : (
          <span>No results</span>
        )}
      </div>
    </div>
  );
}

export default SearchBox;
