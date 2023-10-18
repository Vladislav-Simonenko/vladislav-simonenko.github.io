import { Logo } from "@atoms/index";
import styles from "./FooterTopSideBlog.module.scss";

export const FooterTopSideBlog = () => {
  return (
    <div className={styles.footerLeftSideBlog}>
      <Logo isFooter={true} />
      <div className={styles.footerLeftSideBlogContent}>
        <a href="/about" className={styles.footerLeftSideBlogText}>
          О компании
        </a>
        <a href="/service" className={styles.headerNavText}>
          Услуги
        </a>
        <a href="/contacts" className={styles.footerLeftSideBlogText}>
          Контакты
        </a>
      </div>

      <div className={styles.footerRightideBlogContent}>
        <p className={styles.footerTopSideBlogMainText}>
          Таганрог
          <span className={styles.footerTopSideBlogInsideText}>
            <a href="tel:+79885386799">+7(988)538-67-99</a>
          </span>
        </p>
        <p className={styles.footerTopSideBlogMainText}>
          Написать нам
          <span className={styles.footerTopSideBlogInsideText}>
            <a href="mailto:info@itp-it.com">info@itp-it.com</a>
          </span>
        </p>
      </div>
    </div>
  );
};
