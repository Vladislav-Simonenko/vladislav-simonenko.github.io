import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";

interface ILogoProps {
  isFooter?: boolean;
}

export const Logo = (props: ILogoProps) => {
  const { isFooter } = props;

  return (
    <div className={styles.logo}>
      <Link to={"/"}>
        <img
          src={isFooter ? "/logo_desktop_no_words.svg" : "/logo_desktop.svg"}
          alt="logo"
        />
      </Link>
    </div>
  );
};
