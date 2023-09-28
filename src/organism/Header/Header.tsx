import styles from "./Header.module.scss";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Logo } from "@atoms/index";
import { BurgerMenu } from "@molecules/index";
import { useResize } from "@utils/index";

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
            <a href="/service" className={styles.headerNavText}>
              Услуги
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
