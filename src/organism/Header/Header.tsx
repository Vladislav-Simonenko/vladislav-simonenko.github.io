import styles from "./Header.module.scss";
import { Sling as Hamburger } from "hamburger-react";
import { Logo } from "../../atoms";
import { useResize } from "../../utils";
import { useState } from "react";
import { BurgerMenu } from "../../molecules";

export const Header = () => {
  const { isScreenLg } = useResize();

  const [open, setIsOpen] = useState(false);

  const burgerState = () => {
    setIsOpen(!open);
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.menu}>
        {isScreenLg ? (
          <div className={styles.headerNav}>
            <a href="/about" className={styles.headerNavText}>
              О компании
            </a>
            <a href="/contacts" className={styles.headerNavText}>
              Контакты
            </a>
          </div>
        ) : (
          <>
            {open && <BurgerMenu setIsOpen={burgerState} />}
            <div className={styles.burgerIcon}>
              <Hamburger toggled={open} toggle={burgerState} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
