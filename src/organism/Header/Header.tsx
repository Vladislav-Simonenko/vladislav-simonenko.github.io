import styles from "./Header.module.scss";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Logo } from "@atoms/index";
import { BurgerMenu } from "@molecules/index";
import { useResize } from "@utils/index";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const { isScreenLg } = useResize();
  const { pathname } = useLocation();
  const [open, setIsOpen] = useState(false);

  const burgerState = () => {
    setIsOpen(!open);
  };

  return pathname !== "/docs" ? (
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
            <a href="/advantages" className={styles.headerNavText}>
              Преимущества
            </a>
            <a href="/technology" className={styles.headerNavText}>
              Технологии
            </a>
            <a href="/contacts" className={styles.headerNavText}>
              Контакты
            </a>
            {/* <a href="/products" className={styles.headerNavText}>
              Наши продукты
            </a> */}
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
  ) : null;
};
