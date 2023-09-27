import styles from "./BurgerMenu.module.scss";
import { Link } from "react-router-dom";

export const BurgerMenu = (props: any) => {
  const { setIsOpen } = props;
  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuBackgroundBlur}></div>
      <div className={styles.menuContainerTop}>
        <div className={styles.menuContainerRoutes}>
          <div className={styles.linksBlock}>
            <Link to={"/"} onClick={setIsOpen}>
              <img src={"/logo_desktop.svg"} alt="logo" />
            </Link>
            <Link to={"/about"} onClick={setIsOpen}>
              <p className={styles.link}>О компании</p>
            </Link>
            <Link to={"/contacts"} onClick={setIsOpen}>
              <p className={styles.link}>Контакты</p>
            </Link>
            <Link to={"/service"} onClick={setIsOpen}>
              <p className={styles.link}>Услуги</p>
            </Link>
          </div>
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};
