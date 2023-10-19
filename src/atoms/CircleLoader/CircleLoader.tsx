import "./CircleLoader.module.scss";
import styles from "./CircleLoader.module.scss";

export const CircleLoader = () => {
  return (
    <div className={styles.circleLoader}>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
    </div>
  );
};
