import { HomepageServices } from "@molecules/HomepageServices";

export const TechnologyContent = () => {
  return (
    <HomepageServices
      data={AdvantagesData}
      disabled={true}
      title={"Почему успешные компании работают с нами"}
    />
  );
};

const AdvantagesData = [
  {
    id: 1,
    label: "Базы данных",
    description: "Реляционные, NoSQL и другие.",
    src: "/DB_1.svg",
    servicesName: [
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
    ],
  },
  {
    id: 2,
    label: "Frontend",
    description: "Нативный, фреймворки и подходы",
    src: "/front_1.svg",
    servicesName: [
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
    ],
  },
  {
    id: 3,
    label: "Backend",
    description: "Среды исполнения и инструменты",
    src: "/back_1.svg",
    servicesName: [
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
    ],
  },
  {
    id: 4,
    label: "Mobile",
    description: "Технологии и инструменты",
    src: "/mobile_1.svg",
    servicesName: [
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
    ],
  },
  {
    id: 5,
    label: "DevOPS & QA",
    description: "Операционные системы, хостинги, программное обеспечение.",
    src: "/devops_1.svg",
    servicesName: [
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
    ],
  },
  {
    id: 6,
    label: "Ведение проектов",
    description: "Методологии и инструменты",
    src: "/pm_1.svg",
    servicesName: [
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
    ],
  },
];
