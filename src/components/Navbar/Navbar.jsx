import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles["navbar"]}>
      <div className={styles["menu-icon"]}></div>
      <div>
        <div className={styles["brand"]}></div>
        <div>
          <span>BIHUNG</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
