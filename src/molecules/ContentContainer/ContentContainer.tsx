import React, { useEffect } from "react";
import styles from "./ContentContainer.module.scss";
import { useResize } from "../../utils";
import {
  AnimatePresence,
  easeIn,
  easeInOut,
  motion,
  useAnimation,
} from "framer-motion";

interface IContentContainerProps {
  title: string;
  description: string;
  servicesName: { id: number; title: string }[];
  img: { id: number; src: string; alt: string }[];
  about?: boolean;
}

export const ContentContainer = (props: IContentContainerProps) => {
  const { title, description, servicesName, img, about } = props;

  const { isScreenLg } = useResize();

  return (
    <div className={styles.mainContentContainer}>
      <div className={styles.topMainContent}>
        {img &&
          img.map((item) => (
            <motion.img
              animate={{
                x: [-100, 80], // Список значений x, через которые будет проходить анимация
                y: [-30, -20, -30], // Список значений y, через которые будет проходить анимация
              }}
              transition={{
                duration: 5.0,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              src={item.src}
              alt="Animated Image"
            />
          ))}
      </div>

      <div className={styles.topMainTextContainer}>
        <span className={styles.topMainTitleText}>{title}</span>
        <p className={styles.topMainDescriptionText}>{description}</p>
        {about ? (
          <div className={styles.contactData}>
            <p className={styles.contactText}>
              Телефон:
              <span>
                <a href="tel:+7999999999">+7(999)999-99-99</a>
              </span>
            </p>
            <p className={styles.contactText}>
              E-mail:
              <span>
                <a href="mailto:itp-it@gmail.com">itp-it@gmail.com</a>
              </span>
            </p>
          </div>
        ) : null}
        <div className={styles.topMainDescriptionService}>
          <React.Fragment>
            {servicesName &&
              servicesName.map((item) => (
                <p key={item.id} className={styles.descriptiontext}>
                  {!isScreenLg ? <span> | </span> : null} {item.title}
                  {isScreenLg && servicesName.length <= 3 ? (
                    <span> | </span>
                  ) : null}
                </p>
              ))}
          </React.Fragment>
        </div>
      </div>
    </div>
  );
};
