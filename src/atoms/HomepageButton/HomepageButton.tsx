import { Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import styles from "./HomepageButton.module.scss";

interface IHomepageButtonProps {
  text: string;
  src?: string;
}

export const HomepageButton = (props: IHomepageButtonProps) => {
  const { text, src } = props;
  return (
    <Button href={src} className={styles.homepageButton}>
      {text}
      <EastIcon />
    </Button>
  );
};
