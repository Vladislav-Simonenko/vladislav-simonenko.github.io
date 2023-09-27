import React from "react";
import { ContentContainer } from "../../molecules";

export const Services = () => {
  return (
    <React.Fragment>
      <ContentContainer
        title={title}
        description={description}
        servicesName={servicesName}
        img={img}
      />
      <ContentContainer
        title={titleSecond}
        description={descriptionSecond}
        servicesName={servicesNameSecond}
        img={imgSecond}
      />
      <ContentContainer
        title={titleThird}
        description={descriptionThird}
        servicesName={servicesNameThird}
        img={imgThird}
      />
      <ContentContainer
        title={titleFourth}
        description={descriptionFourth}
        servicesName={servicesNameFourth}
        img={imgFourth}
      />
    </React.Fragment>
  );
};

const title = "Цифровая трансформация";

const description =
  "Преимущества, которые приносит цифровая трансформация, ни для кого не секрет: меньше ручной работы и меньше затрат, более быстрый темп бизнеса, меньше ошибок, больше контроля и принятие решений на основе данных. ITP разрабатывает и поддерживает CRM, HRM, ERP, BPM и другие системы данных, идеально адаптированные к рабочему процессу и целям компании. Цифровизируя бизнес-процессы, мы не только помогаем вашему бизнесу решить текущие задачи, но и создаем резервные мощности и потенциал для будущего роста и расширения.";
const servicesName = [
  { id: 1, title: "Анализ потребностей и целей бизнеса" },
  { id: 2, title: "Аудит существующей ИТ-инфраструктуры компании." },
  { id: 3, title: "Составление технических требований и спецификаций" },
  { id: 4, title: "Разработка индивидуальных ИТ-решений" },
  { id: 5, title: "Интеграция новых модулей в существующую ИТ-инфраструктуру" },
];

const img = [
  {
    id: 1,
    src: "/cases_1.svg",
    alt: "about us",
  },
];

// ---------------------------------

const titleSecond = "Аутсорсинговые услуги";

const descriptionSecond =
  "Аутсорсинг – очень выгодная бизнес-практика. Компании, которые выбирают это, могут высвободить ресурсы, сократить расходы на найм и расширить кадровый резерв. Наши опытные команды разрабатывают веб- и мобильные сервисы, готовые взять на себя управление вашим проектом на любом этапе. Мы гордимся тем, что работаем с компаниями со всего мира, и приветствуем новые проекты из любого часового пояса. Свяжитесь с нами, чтобы получить команду профессионалов и оптимизировать расходы на свой проект.";
const servicesNameSecond = [
  { id: 1, title: "Предоставление опытных удаленных команд" },
  { id: 2, title: "Разработка минимально жизнеспособных продуктов" },
  { id: 3, title: "Создание прототипов для проверки концепции" },
  { id: 4, title: "Погашение технического долга" },
];

const imgSecond = [
  {
    id: 1,
    src: "/cases_2.svg",
    alt: "about us",
  },
];

// ---------------------------------

const titleThird = "Расширение внутренних команд";

const descriptionThird =
  "Аутстаффинг – отличное решение для быстрого пополнения вашей команды необходимыми специалистами. Вы увеличиваете возможности разработки и вовремя получаете высококачественный результат, избегая при этом затрат на подбор, адаптацию и удержание сотрудников. ITP предлагает квалифицированным специалистам из нашего коллектива работать для Вас удаленно. Мы обеспечиваем выбор кандидатов и органично интегрируем их в команду вашего проекта на любом этапе разработки. Наши специалисты адаптируются к вашему рабочему процессу, участвуют во всех необходимых встречах, предоставляют регулярные отчеты и документацию.";
const servicesNameThird = [
  { id: 1, title: "Фронтенд-разработчики" },
  { id: 2, title: "Бэкенд-разработчики" },
  { id: 3, title: "Full-stack разработчики" },
  { id: 4, title: "UI/UX дизайнеры" },
  { id: 5, title: "Менеджеры проекта" },
  { id: 6, title: "Инженеры по обеспечению качества" },
];

const imgThird = [
  {
    id: 1,
    src: "/cases_3.svg",
    alt: "about us",
  },
];

// ---------------------------------

const titleFourth = "Разработка стартапов";

const descriptionFourth =
  "Крайне важно положиться на опытную команду, чтобы завоевать рынок инновационной идеей. ITP готова провести полный цикл разработки, начиная с брифа и заканчивая постоянной поддержкой запущенного продукта. Клиенты со всего мира доверяют нам проверку гипотез своих продуктов на MVP-версиях и оцифровку самых сложных концепций.";
const servicesNameFourth = [
  { id: 1, title: "Веб-приложения" },
  { id: 2, title: "Мобильные приложения" },
  { id: 3, title: "CRM-системы" },
  { id: 4, title: "Электронная коммерция" },
  { id: 5, title: "Интеграция между системами бизнес-данных" },
  { id: 6, title: "HRM-системы" },
];

const imgFourth = [
  {
    id: 1,
    src: "/cases_4.svg",
    alt: "about us",
  },
];
