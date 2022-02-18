import styles from "./Header.module.scss";
import SearchBox from "../SearchBox/SearchBox";

function Header() {
  return (
    <div className={styles["header"]}>
      <div className={styles["nav"]}>
        {/* <span className={styles["brand"]}>bihung</span> */}
      </div>
      <div className={styles["search"]}>
        <SearchBox />
      </div>
    </div>
  );
}

export default Header;
