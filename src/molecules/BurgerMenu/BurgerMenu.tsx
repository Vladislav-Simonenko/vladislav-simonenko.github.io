import { AnimatePresence, motion } from "framer-motion";
import styles from "./BurgerMenu.module.scss";
import { Link } from "react-router-dom";

export const BurgerMenu = (props: any) => {
  const { setIsOpen } = props;
  const menuVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  return (
    <AnimatePresence>
      {
        <motion.div
          className={styles.menuContainer}
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <div
            className={styles.menuBackgroundBlur}
            onClick={handleCloseMenu}
          ></div>
          <div className={styles.menuContainerTop}>
            <div className={styles.menuContainerRoutes}>
              <div className={styles.linksBlock}>
                <Link to={"/"} onClick={handleCloseMenu}>
                  <img src={"/logo_desktop.svg"} alt="logo" />
                </Link>
                <Link to={"/about"} onClick={handleCloseMenu}>
                  <p className={styles.link}>О компании</p>
                </Link>
                <Link to={"/service"} onClick={handleCloseMenu}>
                  <p className={styles.link}>Услуги</p>
                </Link>
                <Link
                  to={"/advantages"}
                  onClick={handleCloseMenu}
                  className={styles.link}
                >
                  Преимущества
                </Link>
                <Link
                  to={"/technology"}
                  onClick={handleCloseMenu}
                  className={styles.link}
                >
                  Технологии
                </Link>
                <Link to={"/products"} onClick={handleCloseMenu}>
                  <p className={styles.link}>Продукты</p>
                </Link>{" "}
                <Link to={"/portfolio"} onClick={handleCloseMenu}>
                  <p className={styles.link}>Портфолио</p>
                </Link>
                <Link to={"/contacts"} onClick={handleCloseMenu}>
                  <p className={styles.link}>Контакты</p>
                </Link>{" "}
                {/* <Link to={"/products"} className={styles.headerNavText}>
                  <p className={styles.link}>Наши продукты</p>
                </Link> */}
              </div>
              <div />
              <div />
            </div>
          </div>
        </motion.div>
      }
    </AnimatePresence>
  );
};
