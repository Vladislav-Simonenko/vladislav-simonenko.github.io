import React from "react";
import styles from "./ContentContainer.module.scss";
import { useResize } from "@utils/index";

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
            <img
              className={styles.topMainContentImage}
              key={item.id}
              src={item.src}
              alt={item.alt}
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
                <a href="tel:+79885441421">+7(988)544-14-21</a>
              </span>
            </p>
            <p className={styles.contactText}>
              E-mail:
              <span>
                <a className={styles.contactInfo} href="mailto:info@itp-it.com">
                  info@itp-it.com
                </a>
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
