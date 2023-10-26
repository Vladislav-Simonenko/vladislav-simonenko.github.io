import { ContentContainer } from "@molecules/ContentContainer";

export const TechnologyContent = () => {
  return (
    <>
      <ContentContainer
        title={title}
        description={description}
        servicesName={servicesName}
        img={img}
      />
      <ContentContainer
        title={title2}
        description={description2}
        servicesName={servicesName2}
        img={img2}
      />
      <ContentContainer
        title={title3}
        description={description3}
        servicesName={servicesName3}
        img={img3}
      />{" "}
      <ContentContainer
        title={title4}
        description={description4}
        servicesName={servicesName4}
        img={img4}
      />{" "}
      <ContentContainer
        title={title5}
        description={description5}
        servicesName={servicesName5}
        img={img5}
      />{" "}
      <ContentContainer
        title={title6}
        description={description6}
        servicesName={servicesName6}
        img={img6}
      />
    </>
  );
};
const title = "Базы данных";

const description = "Реляционные, NoSQL и другие.";
const servicesName = [
  {
    id: 1,
    title: "Реляционные",
  },
  {
    id: 2,
    title: "MSSQL",
  },
  {
    id: 3,
    title: "PostgresSQL",
  },
  {
    id: 4,
    title: "MariaDB",
  },
  {
    id: 5,
    title: "MongoDB",
  },
  {
    id: 6,
    title: "Redis",
  },
  {
    id: 7,
    title: "DymanoDB",
  },
  {
    id: 8,
    title: "CosmosDB",
  },
  {
    id: 9,
    title: "ElasticSearch",
  },
  {
    id: 10,
    title: "Firebase",
  },
];

const img = [
  {
    id: 1,
    src: "/DB_1.svg",
    alt: "about us",
  },
];

const title3 = "Backend";

const description3 = "Среды исполнения и инструменты.";
const servicesName3 = [
  {
    id: 1,
    title: "ASP.NET",
  },
  {
    id: 2,
    title: ".NET Core",
  },
  {
    id: 3,
    title: "NodeJs",
  },
  {
    id: 4,
    title: "Express & Nest",
  },
  {
    id: 5,
    title: "Python Django",
  },
  {
    id: 6,
    title: "Python FastAPI",
  },
  {
    id: 7,
    title: "GraphQL",
  },
  {
    id: 8,
    title: "Sockets",
  },
  {
    id: 9,
    title: "SignalR",
  },
  {
    id: 9,
    title: "CMS",
  },
];

const img3 = [
  {
    id: 1,
    src: "/back_1.svg",
    alt: "about us",
  },
];

const title4 = "Mobile";

const description4 = "Технологии и инструменты.";
const servicesName4 = [
  {
    id: 1,
    title: "Ionic & Capacitor",
  },
  {
    id: 2,
    title: "ReactNative",
  },
  {
    id: 3,
    title: "Flutter",
  },
  {
    id: 4,
    title: "Maps & GeoServices",
  },
  {
    id: 5,
    title: "IAP (mobile payments)",
  },
  {
    id: 6,
    title: "Touch & FaceID",
  },
  {
    id: 7,
    title: "Push Notifications",
  },
];

const img4 = [
  {
    id: 1,
    src: "/mobile_1.svg",
    alt: "about us",
  },
];
const title5 = "DevOPS & QA";

const description5 = "Операционные системы, хостинги, программное обеспечение.";
const servicesName5 = [
  {
    id: 1,
    title: "Windows & Linux",
  },
  {
    id: 2,
    title: "Azure",
  },
  {
    id: 3,
    title: "AWS",
  },
  {
    id: 4,
    title: "Docker",
  },
  {
    id: 5,
    title: "jenkins",
  },
  {
    id: 6,
    title: "Selenium",
  },
  {
    id: 7,
    title: "Cypress",
  },
  {
    id: 8,
    title: "JMeter",
  },
  {
    id: 9,
    title: "Appium",
  },
];

const img5 = [
  {
    id: 1,
    src: "/devops_1.svg",
    alt: "about us",
  },
];
const title6 = "Ведение проектов";

const description6 = "Методологии и иинструменты.";
const servicesName6 = [
  {
    id: 1,
    title: "Планирование проекта",
  },
  {
    id: 2,
    title: "Scrum",
  },
  {
    id: 3,
    title: "Kanban",
  },
  {
    id: 4,
    title: "JIRA",
  },
  {
    id: 5,
    title: "Confluence",
  },
  {
    id: 6,
    title: "Trello",
  },
  {
    id: 7,
    title: "Postman",
  },
  {
    id: 8,
    title: "Swagger",
  },
  {
    id: 9,
    title: "Figma",
  },
  {
    id: 10,
    title: "Notion",
  },
  {
    id: 11,
    title: "Asana",
  },
  {
    id: 12,
    title: "Miro",
  },
];

const img6 = [
  {
    id: 1,
    src: "/pm_1.svg",
    alt: "about us",
  },
];
const title2 = "Frontend";

const description2 = "Нативные инструменты и технологии.";
const servicesName2 = [
  {
    id: 1,
    title: "UI/UX Design",
  },
  {
    id: 2,
    title: "HTML & CSS",
  },
  {
    id: 3,
    title: "JavaScript",
  },
  {
    id: 4,
    title: "Angular",
  },
  {
    id: 5,
    title: "React",
  },
  {
    id: 6,
    title: "Blazor & Razor",
  },
  {
    id: 7,
    title: "BootsTrap",
  },
  {
    id: 8,
    title: "PWA",
  },
  {
    id: 9,
    title: "SSR",
  },
];

const img2 = [
  {
    id: 1,
    src: "/front_1.svg",
    alt: "about us",
  },
];
