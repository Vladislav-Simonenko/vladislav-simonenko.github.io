import { ContentContainer } from "@molecules/index";

export const About = () => {
  return (
    <>
      <ContentContainer
        title={title}
        description={description}
        img={img}
        about={false}
        isZernovoz={false}
        isMain={true}
      />{" "}
      <ContentContainer
        title={title2}
        description={description2}
        img={img2}
        about={false}
        isZernovoz={false}
        isMain={true}
      />{" "}
      <ContentContainer
        title={title3}
        description={description3}
        img={img3}
        about={false}
        isZernovoz={false}
        isMain={true}
      />{" "}
      <ContentContainer
        title={title4}
        description={description4}
        img={img4}
        about={false}
        isZernovoz={false}
        isMain={true}
      />{" "}
      <ContentContainer
        title={title5}
        description={description5}
        img={img5}
        about={false}
        isZernovoz={false}
        isMain={true}
      />{" "}
      <ContentContainer
        title={title6}
        description={description6}
        img={img6}
        about={false}
        isZernovoz={false}
        isMain={true}
      />
    </>
  );
};

const title = "01/ Составление дорожной карты";
const title2 = "02/ Рисуем чертежи";
const title3 = "03/ Развитие";
const title4 = "04/ Летные испытания";
const title5 = "05/ Готовность на взлетно-посадочной полосе";
const title6 = "06/ Дополнительные услуги";

const description =
  "Наши первые шаги — сбор данных о проекте, рынке и потенциальных пользователях. Менеджеры ITP сотрудничают с командой клиента при определении сроков и этапов, а также оптимизации бюджета. Мы согласовываем четкий план развития, пожимаем руки и подписываем бумаги.";
const description2 =
  "Это ключевой этап, на котором мы закладываем основу того, как система будет функционировать и взаимодействовать с пользователем. Дизайнеры, ИТ-архитекторы и инженеры заняты созданием архитектуры данных и пользовательских сценариев, созданием подробных концепций и прототипов.";
const description3 =
  "Команда проекта усердно работает над воплощением вашей идеи в реальный и функционирующий продукт, следуя лучшим отраслевым практикам и рекомендациям. Мы регулярно проводим демонстрации прогресса и делаем все возможное, чтобы сделать процесс разработки кристально понятным для клиента.";
const description4 =
  "Ни один продукт не может быть готов к запуску без тщательного тестирования. Мы заставляем систему проходить различные тесты, сеансы с высокой нагрузкой и сложные пользовательские сценарии для выявления и покрытия зон риска.";
const description5 =
  "Тот долгожданный момент! Мы с гордостью передаем управление команде клиента, помогаем и сопровождаем ее во время запуска.";
const description6 =
  "После запуска мы продолжаем поддерживать связь с командой клиента. Мы поддерживаем систему, решаем любые проблемы и приветствуем обратную связь.";

const img = [
  {
    id: 1,
    src: "/about_1-min.svg",
    alt: "about us",
  },
];
const img2 = [
  {
    id: 1,
    src: "/about_2-min.svg",
    alt: "about us",
  },
];
const img3 = [
  {
    id: 1,
    src: "/about_3-min.svg",
    alt: "about us",
  },
];
const img4 = [
  {
    id: 1,
    src: "/about_4-min.svg",
    alt: "about us",
  },
];
const img5 = [
  {
    id: 1,
    src: "/about_5-min.svg",
    alt: "about us",
  },
];
const img6 = [
  {
    id: 1,
    src: "/about_6-min.svg",
    alt: "about us",
  },
];
