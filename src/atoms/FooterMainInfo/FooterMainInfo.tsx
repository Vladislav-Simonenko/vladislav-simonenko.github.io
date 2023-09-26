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
        <p className={styles.footerMainText}>{reestrInfo}</p>
        <p className={styles.footerMainText}>{policy}</p>
      </div>
      <div className={styles.footerBottomMainInfo}>
        <p className={styles.footerMainText}>
          Компания ООО ИТ ПРЕМИУМ
          <span>
            адрес: Ростовская обл., г. Таганрог, ул. Октябрьская, д. 18 каб. 21
            зарегистрирована 20.08.2018.
          </span>
          <span> ИНН 6154153150, ОГРН 1186196034837, КПП 615401001.</span>
          <span style={{ display: "block" }}>
            Основным видом деятельности является разработка компьютерного
            программного обеспечения
          </span>
        </p>
      </div>
    </div>
  );
};