import { useState } from "react";
import {
  ListItem,
  ListItemIcon,
  Collapse,
  List,
  ListSubheader,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import styles from "./HomepageServices.module.scss";
import { HomepageButton } from "@atoms/index";
import { useResize } from "@utils/hooks";
import React from "react";

interface IHomePageProps {
  disabled?: boolean;
  data: {
    id: number;
    label: string;
    description: string;
    src: string;
    servicesName?: any;
  }[];
  title: string;
  about?: boolean;
}

export const HomepageServices = (props: IHomePageProps) => {
  const { data, title, about, disabled } = props;

  const [openIndex, setOpenIndex] = useState(0);
  const { isScreenLg } = useResize();

  const handleItemClick = (index: number) => {
    if (openIndex === index) {
      return;
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className={styles.servicesContainer}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            className={styles.sericesTitle}
            component="div"
            id="nested-list-subheader"
          >
            {title}
          </ListSubheader>
        }
      >
        {data &&
          data.map((item, index) => (
            <div className={styles.servicesListContainer} key={item.id}>
              <ListItem
                className={styles.servicesListItem}
                onClick={() => handleItemClick(index)}
              >
                <div className={styles.emptyBlock}></div>
                <div className={styles.controllerBlock}>
                  {openIndex === index ? (
                    <ExpandMore className={styles.activeController} />
                  ) : (
                    <ExpandLess className={styles.disabledController} />
                  )}
                  <ListItemIcon className={styles.servicesListIconText}>
                    {item.label}
                  </ListItemIcon>
                </div>
              </ListItem>
              <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <div className={styles.servicesContentContainer}>
                    <img className={styles.imageContainer} src={item.src} />
                    <p className={styles.servicesText}>
                      {item.description}
                      {!about && !disabled ? (
                        <span className={styles.detailsButton}>
                          <HomepageButton src={"/service"} text={`Подробнее`} />
                        </span>
                      ) : null}
                      {disabled && (
                        <React.Fragment>
                          {item.servicesName &&
                            item.servicesName.map((item: any) => (
                              <p
                                key={item.id}
                                className={styles.descriptiontext}
                              >
                                {!isScreenLg ? <span> | </span> : null}{" "}
                                {item.title}
                                {isScreenLg ? <span> | </span> : null}
                              </p>
                            ))}
                        </React.Fragment>
                      )}
                    </p>
                  </div>
                </List>
              </Collapse>
            </div>
          ))}
      </List>
    </div>
  );
};
