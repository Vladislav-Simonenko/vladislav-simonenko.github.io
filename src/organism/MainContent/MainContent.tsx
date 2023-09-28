import { ContentContainer, HomepageServices } from "@molecules/index";
import React from "react";

export const MainContent = () => {
  return (
    <React.Fragment>
      <ContentContainer
        title={title}
        description={description}
        servicesName={servicesName}
        img={img}
      />
      <HomepageServices data={data} title={titleBottomContainer} />
    </React.Fragment>
  );
};

const data = [
  {
    id: 1,
    label: "Цифровая трансформация",
    description:
      "Мы разрабатываем и поддерживаем все виды корпоративных информационных систем, которые ускоряют рабочий процесс и повышают производительность.",
    src: "/cases_1.svg",
  },
  {
    id: 2,
    label: "Аутсорсинговые услуги",
    description:
      "Слаженная и опытная удаленная команда готова возглавить ваш проект и воплотить его в жизнь.",
    src: "/cases_2.svg",
  },
  {
    id: 3,
    label: "Расширение внутренних команд",
    description:
      "ITP предлагает аутстаффинг команд и отдельных специалистов. Расширьте возможности существующей команды разработчиков для наиболее эффективного достижения целей разработки.",
    src: "/cases_3.svg",
  },
  {
    id: 4,
    label: "Разработка стартапов",
    description:
      "Мы разрабатываем и поддерживаем все виды корпоративных информационных систем, которые ускоряют рабочий процесс и повышают производительность.",
    src: "/cases_4.svg",
  },
];

const title =
  "Создаем потрясающие проекты с нуля и запускаем их прямо к звездам";

const description =
  "ITP - это Российская компания-разработчик программного обеспечения с полным спектром услуг, специализирующаяся на высокотехнологичных решениях для вашего бизнеса. Мы разрабатываем как инновационные, так и проверенные временем системы обработки данных, поддерживаем стартапы, желающие протестировать рыночный спрос на свои услуги. Команда ITP имеет опыт в проектировании, разработке, тестировании, маркетинговых исследованиях, управлении и технической поддержке.";

const servicesName = [
  { id: 1, title: "Веб-сервисы" },
  { id: 2, title: "Мобильные приложения" },
  { id: 3, title: "Аутсорсинг" },
];

const img = [
  {
    id: 1,
    src: "/about_us.svg",
    alt: "about us",
  },
];

const titleBottomContainer = "Услуги";
