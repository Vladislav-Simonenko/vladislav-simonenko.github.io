import { HomepageServices } from "@molecules/index";
import React from "react";

export const About = () => {
  return (
    <React.Fragment>
      <HomepageServices about={true} title={title} data={data} />
    </React.Fragment>
  );
};
const title = "О компании";

const data = [
  {
    id: 1,
    label: "01/ Составление дорожной карты",
    description:
      "Наши первые шаги — сбор данных о проекте, рынке и потенциальных пользователях. Менеджеры ITP сотрудничают с командой клиента при определении сроков и этапов, а также оптимизации бюджета. Мы согласовываем четкий план развития, пожимаем руки и подписываем бумаги.",
    src: "/about_1.svg",
  },
  {
    id: 2,
    label: "02/ Рисуем чертежи",
    description:
      "Это ключевой этап, на котором мы закладываем основу того, как система будет функционировать и взаимодействовать с пользователем. Дизайнеры, ИТ-архитекторы и инженеры заняты созданием архитектуры данных и пользовательских сценариев, созданием подробных концепций и прототипов.",
    src: "/about_2.svg",
  },
  {
    id: 3,
    label: "03/ Развитие",
    description:
      "Команда проекта усердно работает над воплощением вашей идеи в реальный и функционирующий продукт, следуя лучшим отраслевым практикам и рекомендациям. Мы регулярно проводим демонстрации прогресса и делаем все возможное, чтобы сделать процесс разработки кристально понятным для клиента.",
    src: "/about_3.svg",
  },
  {
    id: 4,
    label: "04/ Летные испытания",
    description:
      "Ни один продукт не может быть готов к запуску без тщательного тестирования. Мы заставляем систему проходить различные тесты, сеансы с высокой нагрузкой и сложные пользовательские сценарии для выявления и покрытия зон риска.",
    src: "/about_4.svg",
  },
  {
    id: 5,
    label: "05/ Готовность на взлетно-посадочной полосе",
    description:
      "Тот долгожданный момент! Мы с гордостью передаем управление команде клиента, помогаем и сопровождаем ее во время запуска.",
    src: "/about_5.svg",
  },
  {
    id: 6,
    label: "06/ Дополнительные услуги",
    description:
      "После запуска мы продолжаем поддерживать связь с командой клиента. Мы поддерживаем систему, решаем любые проблемы и приветствуем обратную связь.",
    src: "/about_6.svg",
  },
];
