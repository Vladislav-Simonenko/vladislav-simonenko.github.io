import { ContentContainer } from "@molecules/index";

export const Portfolio = () => {
  return (
    <>
      <ContentContainer
        title={title}
        description={description}
        img={img}
        about={false}
        isMain={true}
        isConsBussiness
      />
      <ContentContainer
        title={title2}
        description={description2}
        img={img2}
        about={false}
        isUQREW
        isMain={true}
      />
      <ContentContainer
        title={title3}
        description={description3}
        img={img3}
        about={false}
        isBloob
        isMain={true}
      />
    </>
  );
};

const title = "CRM для консалтингового бизнеса";
const title2 = "QCREW";
const title3 = "BLOOM";

const description =
  "Внутренняя система учёта клиентов для компании, которая оказывает юридические, финансовые и миграционные услуги.";
const description2 =
  "UQREW — комбинация соцсети и биржи для подрядчиков и работников строительной отрасли в США, Мексике и Канаде. Подрядчики подбирают исполнителей в штат или на проект по локации и специализации. Работники выбирают из вакансий самые интересные — win-win!";
const description3 =
  "Облачная система управления персоналом (SaaS HRM). Её задача — автоматизировать регулярную аттестацию штата. Система подходит компаниям, где работает больше 1000 сотрудников.";

const img = [
  {
    id: 1,
    src: "/case_bloom.png",
    alt: "about us",
  },
];
const img2 = [
  {
    id: 1,
    src: "/case_crm.png",
    alt: "about us",
  },
];
const img3 = [
  {
    id: 1,
    src: "/case_uqrew.png",
    alt: "about us",
  },
];
