import { ContentContainer } from "@molecules/index";
import React from "react";

export const Contacts = () => {
  return (
    <React.Fragment>
      <ContentContainer
        title={title}
        description={description}
        servicesName={servicesName}
        img={img}
        about={true}
      />
    </React.Fragment>
  );
};
const title = "Контакты";

const description =
  "Компания ООО ИТ ПРЕМИУМ адрес: Ростовская обл., г. Таганрог, ул. Октябрьская, д. 18 каб. 21";
const servicesName = [
  { id: 1, title: "ИНН 6154153150" },
  { id: 2, title: "ОГРН 1186196034837" },
  { id: 3, title: "КПП 615401001" },
];

const img = [
  {
    id: 1,
    src: "/full_metal_bird-min.svg",
    alt: "about us",
  },
];
