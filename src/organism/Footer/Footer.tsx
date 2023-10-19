import styles from "./Footer.module.scss";
import { Divider } from "@mui/material";
import { FooterMainInfo } from "@atoms/index";
import { FooterTopSideBlog } from "@molecules/index";
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const { pathname } = useLocation();

  return pathname !== "/docs" ? (
    <div className={styles.footerContainer}>
      <FooterTopSideBlog />
      <Divider className={styles.footerDivider} />
      <FooterMainInfo reestrInfo={footerReestr} policy={footerPolicy} />
    </div>
  ) : null;
};

const footerReestr = "Участники Российского ПО:";

const footerPolicy = "";
