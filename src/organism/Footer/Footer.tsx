import styles from "./Footer.module.scss";
import { Divider } from "@mui/material";
import { FooterMainInfo } from "../../atoms";
import { FooterTopSideBlog } from "../../molecules";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <FooterTopSideBlog />
      <Divider className={styles.footerDivider} />
      <FooterMainInfo reestrInfo={footerReestr} policy={footerPolicy} />
    </div>
  );
};

const footerReestr =
  "Участники Реестра Российского ПО: Lorem ipsum dolor sit amet consectetur";

const footerPolicy = "Политика по работе с контагентами";
