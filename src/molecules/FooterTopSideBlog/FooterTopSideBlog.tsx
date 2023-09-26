import styles from "./FooterTopSideBlog.module.scss";
import { Logo } from "../../atoms";

export const FooterTopSideBlog = () => {
  return (
    <div className={styles.footerLeftSideBlog}>
      <Logo isFooter={true} />

      <div className={styles.footerLeftSideBlogContent}>
        <a href="/about" className={styles.footerLeftSideBlogText}>
          О компании
        </a>
        <a href="/contacts" className={styles.footerLeftSideBlogText}>
          Контакты
        </a>
      </div>

      <div className={styles.footerRightideBlogContent}>
        <p className={styles.footerTopSideBlogMainText}>
          Таганрог
          <span className={styles.footerTopSideBlogInsideText}>
            <a href="tel:+7999999999">+7(999)999-99-99</a>
          </span>
        </p>
        <p className={styles.footerTopSideBlogMainText}>
          Написать нам
          <span className={styles.footerTopSideBlogInsideText}>
            <a href="mailto:itp-it@gmail.com">itp-it@gmail.com</a>
          </span>
        </p>
      </div>
    </div>
  );
};
