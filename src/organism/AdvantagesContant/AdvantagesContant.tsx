import { ContentContainer } from "@molecules/index";

export const AdvantagesContant = () => {
  return (
    <>
      <ContentContainer
        title={title}
        description={description}
        img={img}
        about={false}
        isZernovoz={false}
      />{" "}
      <ContentContainer
        title={title2}
        description={description2}
        img={img2}
        about={false}
        isZernovoz={false}
      />{" "}
      <ContentContainer
        title={title3}
        description={description3}
        img={img3}
        about={false}
        isZernovoz={false}
      />{" "}
      <ContentContainer
        title={title4}
        description={description4}
        img={img4}
        about={false}
        isZernovoz={false}
      />{" "}
      <ContentContainer
        title={title5}
        description={description5}
        img={img5}
        about={false}
        isZernovoz={false}
      />{" "}
      <ContentContainer
        title={title6}
        description={description6}
        img={img6}
        about={false}
        isZernovoz={false}
      />
    </>
  );
};

const title = "Процессы";
const title2 = "Партнерство";
const title3 = "Опыт";
const title4 = "Полный цикл";
const title5 = "Безопастность";
const title6 = "Переход";

const description =
  "Мы предлагаем эффективный набор процессов для обеспечения качества предоставляемых нами услуг под любой вид бизнеса.";
const description2 =
  "Уже более 10 лет мы решаем сложные и комплексные бизнес-задачи для компаний из разных отраслей с разным количеством сотрудников.";
const description3 =
  "Используем современный веб и мобильный стек технологий, внедряем лучшее.";
const description4 =
  "От идеи до запуска. Мы создаем системы с нуля или взяться за разработку программного продукта на любом этапе жизненного цикла.";
const description5 =
  "Защита интеллектуальной собственности клиента. Условия и политика работы нацелена на обеспечение защиты от любых утечек IP.";
const description6 =
  "Богатый опыт перепроектирования устаревших систем, рефакторинга кода, переноса устаревших приложений на новые платформы.";

const img = [
  {
    id: 1,
    src: "/processes_1.svg",
    alt: "about us",
  },
];
const img2 = [
  {
    id: 1,
    src: "/partner_1.svg",
    alt: "about us",
  },
];
const img3 = [
  {
    id: 1,
    src: "/expirience_1.svg",
    alt: "about us",
  },
];
const img4 = [
  {
    id: 1,
    src: "/full_cycle_1.svg",
    alt: "about us",
  },
];
const img5 = [
  {
    id: 1,
    src: "/security_1.svg",
    alt: "about us",
  },
];
const img6 = [
  {
    id: 1,
    src: "/transform_1.svg",
    alt: "about us",
  },
];
