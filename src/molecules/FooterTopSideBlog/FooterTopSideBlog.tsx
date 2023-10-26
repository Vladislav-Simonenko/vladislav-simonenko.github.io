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
        <a href="/service" className={styles.footerLeftSideBlogText}>
          Услуги
        </a>
        <a href="/advantages" className={styles.footerLeftSideBlogText}>
          Преимущества
        </a>
        <a href="/technology" className={styles.footerLeftSideBlogText}>
          Технологии
        </a>
        <a href="/contacts" className={styles.footerLeftSideBlogText}>
          Контакты
        </a>
      </div>

      <div className={styles.footerRightideBlogContent}>
        <p className={styles.footerTopSideBlogMainText}>
          Таганрог
          <span>
            <a
              className={styles.footerTopSideBlogInsideText}
              href="tel:+79885441421"
            >
              +7(988)544-14-21
            </a>
          </span>
        </p>
        <p className={styles.footerTopSideBlogMainText}>
          Написать нам
          <span>
            <a
              className={styles.footerTopSideBlogInsideText}
              href="mailto:info@itp-it.com"
            >
              info@itp-it.com
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};
