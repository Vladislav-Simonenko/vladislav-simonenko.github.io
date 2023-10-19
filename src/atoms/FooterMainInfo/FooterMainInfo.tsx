import { Link } from "react-router-dom";
import styles from "./FooterMainInfo.module.scss";

interface IFooterInterface {
  reestrInfo: string;
  policy: string;
}
export const FooterMainInfo = (props: IFooterInterface) => {
  const { reestrInfo, policy } = props;

  return (
    <div className={styles.footerMainInfo}>
      <div className={styles.footerTopMainInfo}>
        <p>{reestrInfo}</p>
        <a
          className={styles.footerMainText}
          href="https://reestr.digital.gov.ru/reestr/1864621/"
          target="_blank"
        >
          Система Zernovoz
        </a>
        <a className={styles.footerMainText} href="/reestr.pdf" target="_blank">
          (выписка из реестра)
        </a>
        <p className={styles.footerMainText}>{policy}</p>
      </div>
      <div className={styles.footerBottomMainInfo}>
        <Link to={"/contacts"}>
          <p>
            Компания ООО ИТ ПРЕМИУМ адрес: Ростовская обл., г. Таганрог, ул.
            Октябрьская, д. 18 каб. 21 зарегистрирована 20.08.2018.
            <span> ИНН 6154153150, ОГРН 1186196034837, КПП 615401001.</span>
            <span style={{ display: "block" }}>
              Основным видом деятельности является разработка компьютерного
              программного обеспечения
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};
