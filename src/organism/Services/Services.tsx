import { ContentContainer } from "@molecules/index";
import React from "react";

export const Services = () => {
  return (
    <React.Fragment>
      <ContentContainer
        title={title}
        description={description}
        servicesName={servicesName}
        img={img}
        isMain={true}
      />
      <ContentContainer
        title={titleSecond}
        description={descriptionSecond}
        servicesName={servicesNameSecond}
        img={imgSecond}
        isMain={true}
      />
      <ContentContainer
        title={titleThird}
        description={descriptionThird}
        servicesName={servicesNameThird}
        img={imgThird}
        isMain={true}
      />
      <ContentContainer
        title={titleFourth}
        description={descriptionFourth}
        servicesName={servicesNameFourth}
        img={imgFourth}
        isMain={true}
      />
      <ContentContainer
        title={titleEight}
        description={descriptionEight}
        servicesName={servicesNameEight}
        img={img}
        isMain={true}
      />
      <ContentContainer
        title={titleSeven}
        description={descriptionSeven}
        servicesName={servicesNameSeven}
        img={imgThird}
        isMain={true}
      />
      <ContentContainer
        title={titleNine}
        description={descriptionNine}
        servicesName={servicesNameNine}
        img={imgSecond}
        isMain={true}
      />
      <ContentContainer
        title={titleTen}
        description={descriptionTen}
        servicesName={servicesNameTen}
        img={imgThird}
        isMain={true}
      />
      <ContentContainer
        title={titleEleven}
        description={descriptionEleven}
        servicesName={servicesNameEleven}
        img={imgFourth}
        isMain={true}
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
    src: "/cases_1-min.svg",
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
    src: "/cases_2-min.svg",
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
    src: "/cases_3-min.svg",
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
    src: "/cases_4-min.svg",
    alt: "about us",
  },
];

// ---------------------------------

const titleSeven = "Модернизация существующих технологий";

const descriptionSeven =
  "Многие программные решения используют старый стек технологий и не позволяют вашему бизнесу эффективно масштабироваться и расти. Мы обновляем программное обеспечение, чтобы сократить ненужные расходы и бремя обслуживания. Это помогает предприятиям добиться лучшей масштабируемости, снизить эксплуатационные расходы, оптимизировать производительность и обеспечить цифровой опыт.";
const servicesNameSeven = [
  { id: 1, title: "Обновление технологий" },
  { id: 2, title: "Масштабирование" },
  { id: 3, title: "Повышение производительности" },
  { id: 4, title: "Цифровой опыт" },
];

// ---------------------------------

const titleEight = `"Пожарная команда"`;

const descriptionEight =
  "Привлекаем кризис-менеджера для оценки ситуации и составления плана действий. Мы оперативно проводим адаптацию лучших разработчиков и QA для решения сложностей проекта с доступностью 24/7. Популярным сценарием является экстренное изменение команды клиента. Наша цель - понять текущую IT экосистему, взять под контроль продукт, процессы и восстановить сервис.";
const servicesNameEight = [
  { id: 1, title: "Оценки ситуации" },
  { id: 2, title: "Составление плана действий" },
];

// ---------------------------------

const titleNine = "«Закодируйте» свой бизнес";

const descriptionNine =
  "«Закодируйте» свой бизнес Помогаем оцифровывать бизнес, сосредотачиваясь на бизнес-задачах, потребностях, болевых точках клиента и предоставляем программные решения, ориентированные на бизнес-цели. Мы формируем тесное и прозрачное сотрудничество между IT командой и бизнесом, чтобы клиенты активно участвовали в жизненном цикле разработки проекта.";
const servicesNameNine = [
  { id: 1, title: "Оцифровка бизнеса" },
  { id: 2, title: "Сотрудничество" },
];

// ---------------------------------

const titleTen = "IT аудит и консалтинг";

const descriptionTen =
  "Наши специалисты проконсультируют по всем вопросам и проведут аудит уже существующих решений";
const servicesNameTen = [{ id: 1, title: "Консультация" }];

// ---------------------------------

const titleEleven = "Каталог проектов";

const descriptionEleven =
  "Предоставим вам пакеты услуг с фиксированной ценой на разработку версий MVP или РоС, постоянную поддержку и дизайн.";
const servicesNameEleven = [
  { id: 1, title: "MVP" },
  { id: 1, title: "PoC" },
];
