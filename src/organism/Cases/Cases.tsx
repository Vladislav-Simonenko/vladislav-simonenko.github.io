import styles from "./Cases.module.scss";

interface ICaseProps {
  isConsBussiness?: boolean;
  isUQREW?: boolean;
  isBloob?: boolean;
}

export const Cases = (props: ICaseProps) => {
  const { isConsBussiness, isUQREW, isBloob } = props;
  return (
    <div className={styles.casesContainer}>
      <div className={styles.casesFirstBlock}>
        <div className={styles.casesImage}>
          {isConsBussiness && <img src="/case_crm.png" />}
          {isUQREW && <img src="/case_uqrew.png" />}
          {isBloob && <img src="/case_bloom.png" />}
          <h2 className={styles.casesTitle}>
            {isConsBussiness && "CRM для консалтингового бизнеса"}
            {isUQREW && "UQREW"} {isBloob && "BLOOM"}
          </h2>
          <p className={styles.casesDesc}>
            {isConsBussiness &&
              "Внутренняя система учёта клиентов для компании, которая оказывает юридические, финансовые и миграционные услуги."}{" "}
            {isUQREW &&
              "UQREW — комбинация соцсети и биржи для подрядчиков и работников строительной отрасли в США, Мексике и Канаде. Подрядчики подбирают исполнителей в штат или на проект по локации и специализации. Работники выбирают из вакансий самые интересные — win-win!"}{" "}
            {isBloob &&
              "Облачная система управления персоналом (SaaS HRM). Её задача — автоматизировать регулярную аттестацию штата. Система подходит компаниям, где работает больше 1000 сотрудников."}
          </p>
          <p className={styles.casesSubDesc}>
            {isConsBussiness &&
              "В консультационном бизнесе важно автоматически генерировать лиды, отслеживать каждую входящую заявку и иметь полную картину ключевых показателей в реальном времени. Мы решили эту задачу и помогли бизнес-процессам клиента полететь!            "}{" "}
            {isUQREW &&
              "Мы запустили UQREW для действующего бизнеса из США. Компания оказывает услуги по строительству и ремонту. С помощью нашего продукта она автоматизировала собственные бизнес-процессы. UQREW решает важные для индустрии задачи, поэтому проект вышел на рынок, мощно растёт и монетизируется."}{" "}
            {isBloob &&
              "BLOOM автоматически направляет сотрудникам и HR-специалистам опросники, чтобы экономить время на личных встречах. Система генерирует регулярные отчёты, визуализирует профессиональный рост сотрудника или команды, предлагает работникам индивидуальные рекомендации по развитию профессиональных и личных компетенций.            "}
          </p>
        </div>

        <div className={styles.casesBlueBlock}>
          <div className={styles.casesSecondBlock}>
            <h2 className={styles.casesTitile}>
              {isConsBussiness && "Веб-приложение"}
              {isUQREW && "Веб-Приложение"}
              {isBloob && "Веб-Приложение"}
            </h2>
            <p className={styles.casesDesc}>
              {isConsBussiness &&
                "Для автоматизации и синхронизации работы всех отделов"}
              {isUQREW && "Десктоп и мобильная версия"}
              {isBloob && "Десктоп и мобильная версия"}
            </p>
          </div>

          <div className={styles.casesSecondBlock}>
            <h2 className={styles.casesTitile}>
              {isConsBussiness && "Мобильное приложение"}
              {isUQREW && "Мобильное приложение"}
              {isBloob && "Мобильное приложение"}
            </h2>
            <p className={styles.casesDesc}>
              {isConsBussiness &&
                "Для доступа к информационно-консультационным услугам"}
              {isUQREW &&
                "Для подрядчиков и рабочих. Версии для IOS и Android."}
              {isBloob &&
                "Для оперативного контроля ключевых бизнес-показателей (KPI) и стратегического планирования"}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.casesThirdBlock}>
        {isConsBussiness &&
          data.map((item) => {
            return (
              <div key={item.id} className={styles.casesThirdBlockContainer}>
                <img className={styles.casesThirdBlockImage} src={item.src} />
                <h2 className={styles.casesThirdBlockTitle}>{item.title}</h2>
                <p className={styles.casesThirdBlockDesc}>{item.description}</p>
              </div>
            );
          })}

        {isUQREW &&
          data2.map((item) => {
            return (
              <div key={item.id} className={styles.casesThirdBlockContainer}>
                <img className={styles.casesThirdBlockImage} src={item.src} />
                <h2 className={styles.casesThirdBlockTitle}>{item.title}</h2>
                <p className={styles.casesThirdBlockDesc}>{item.description}</p>
              </div>
            );
          })}
        {isBloob &&
          data3.map((item) => {
            return (
              <div key={item.id} className={styles.casesThirdBlockContainer}>
                <img className={styles.casesThirdBlockImage} src={item.src} />
                <h2 className={styles.casesThirdBlockTitle}>{item.title}</h2>
                <p className={styles.casesThirdBlockDesc}>{item.description}</p>
              </div>
            );
          })}
      </div>

      <div className={styles.fourthyBlock}>
        <h2 className={styles.fourthyBlockTitle}>Что сделали</h2>
        <div className={styles.containerContentFourthy}>
          {isConsBussiness &&
            textData.map((item) => {
              return (
                <div className={styles.fourthyBlockContent}>
                  <p className={styles.fourthyBlockDesc} key={item.id}>
                    {item.text}
                  </p>
                </div>
              );
            })}
          {isUQREW &&
            textData2.map((item) => {
              return (
                <div className={styles.fourthyBlockContent}>
                  <p className={styles.fourthyBlockDesc} key={item.id}>
                    {item.text}
                  </p>
                </div>
              );
            })}
          {isBloob &&
            textData3.map((item) => {
              return (
                <div className={styles.fourthyBlockContent}>
                  <p className={styles.fourthyBlockDesc} key={item.id}>
                    {item.text}
                  </p>
                </div>
              );
            })}
        </div>
        <p></p>
      </div>

      <div className={styles.fiveBlockContainer}>
        <h2 className={styles.fiveBlockTitle}>Отзыв клиента</h2>
        <div className={styles.fiveBlockContainer}>
          <h2 className={styles.rewievTitle}>
            {isConsBussiness
              ? "Технический директор клиента"
              : "Заказчик — владелец бизнеса"}
          </h2>
          <p className={styles.rewievDesc}>
            {isConsBussiness
              ? "Решение о разработке и внедрении новой CRM на современном стеке позволило решить проблемы производительности, развития функционала и оперативной технической поддержки проекта. Хорошо организованные рабочие процессы, техподдержка с согласованными уровнями сервиса, понятная и прозрачная оценка задач, отчеты и презентации по результатам спринтов."
              : "ITP помогли нам принять и внедрить стратегическое бизнес-решение: развернуть облачную IT-инфраструктуру и создать внешний IT-департамент по модели аутстафф. Такое вложение в будущее и надёжный партнёр в лице ITP дают нам стабильность и площадку для роста на десятилетие вперёд."}
          </p>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    src: "/manager.jpg",
    title: "Менеджер проекта",
    description:
      "Организовывал и контролировал работу в таск-менеджерах Slack, Jira",
  },
  {
    id: 2,
    src: "/front-end-developer.jpg",
    title: "Backend-разработчик",
    description:
      "ASP.NET core + mssql, архитектура проекта, базы данных, API, производительность",
  },
  {
    id: 3,
    src: "/middle-mean-developer.jpg",
    title: "Frontend-разработчик",
    description: "Angular + ionic, фронтенд, UI/UX, адаптивная вёрстка",
  },
  {
    id: 4,
    src: "/tester.jpg",
    title: "Тестировщик",
    description:
      "Проверял работу веб- и мобильного приложений на всех платформах",
  },
  {
    id: 5,
    src: "/designer.jpg",
    title: "Дизайнер",
    description:
      "Проектировал пользовательские сценарии и истории, макеты и кликабельные прототипы. Следуя брендбуку, наполнял интерфейс деталями",
  },
  {
    id: 6,
    src: "/devops-engineer.jpg",
    title: "DevOps инженер",
    description:
      "Автоматизировал сборку продукта и его доставку клиенту, делал разработку непрерывной и слаженной",
  },
];

const data2 = [
  {
    id: 1,
    src: "/manager.jpg",
    title: "Менеджер проекта",
    description:
      "Организовывал и контролировал работу в таск-менеджерах Slack, Jira",
  },
  {
    id: 2,
    src: "/front-end-developer.jpg",
    title: "Backend-разработчик",
    description:
      "ASP.NET core + mssql, архитектура проекта, базы данных, API, производительность",
  },
  {
    id: 3,
    src: "/middle-mean-developer.jpg",
    title: "Frontend-разработчик",
    description: "Angular + ionic, фронтенд, UI/UX, адаптивная вёрстка",
  },
  {
    id: 4,
    src: "/tester.jpg",
    title: "Тестировщик",
    description:
      "Проверял работу веб- и мобильного приложений на всех платформах",
  },
];
const data3 = [
  {
    id: 1,
    src: "/manager.jpg",
    title: "Менеджер проекта",
    description:
      "Организовывал и контролировал работу в таск-менеджерах Slack, Jira",
  },
  {
    id: 2,
    src: "/front-end-developer.jpg",
    title: "Backend-разработчик",
    description:
      "ASP.NET core + mssql, архитектура проекта, базы данных, API, производительность",
  },
  {
    id: 3,
    src: "/middle-mean-developer.jpg",
    title: "Frontend-разработчик",
    description: "Angular + ionic, фронтенд, UI/UX, адаптивная вёрстка",
  },
  {
    id: 4,
    src: "/tester.jpg",
    title: "Тестировщик",
    description:
      "Проверял работу веб- и мобильного приложений на всех платформах",
  },
];

const textData = [
  {
    id: 1,
    text: "Проанализировали и провели реверс-инжиниринг предыдущей CRM системы клиента",
  },
  {
    id: 2,
    text: "Перенесли данные в новую CRM систему    ",
  },
  {
    id: 3,
    text: "Интегрировали CRM с внешними сервисами, чтобы автоматически создавать поток входящих заявок    ",
  },
  {
    id: 4,
    text: "Разработали дизайн веб-системы и двух мобильных приложений    ",
  },
];

const textData2 = [
  {
    id: 1,
    text: "Исправили критичные проблемы в существующей версии продукта UQREW 1.0",
  },
  {
    id: 2,
    text: "Провели экспертную оценку и анализ существующего кода от предыдущей команды. Исправили наиболее критичные проблемы и предложили клиенту варианты развития проекта. После согласования оценок и сроков он выбрал путь реверс-инжиниринга и перезапуск проекта на новых технологиях",
  },
  {
    id: 3,
    text: "Провели реверс-инжиниринг старой версии веб- и мобильного приложений, оптимизировали структуру хранения данных",
  },
  {
    id: 4,
    text: "Разработали новую версию проекта на современном стеке с учётом требований заказчика",
  },
  {
    id: 5,
    text: "Осуществили миграцию данных из старой системы в новую",
  },
  {
    id: 6,
    text: "Запустили продукт в тестовую эксплуатацию и продакшн",
  },
];
const textData3 = [
  {
    id: 1,
    text: "Провели экспертизу имеющегося кода",
  },
  {
    id: 2,
    text: "Исправили ошибки на бэкенде, оптимизировали структуру базы данных",
  },
  {
    id: 3,
    text: "Провели глубокий рефакторинг UI/UX, переписали фронтенд на Angular",
  },
  {
    id: 4,
    text: "Устранили технический долг и помогли запустить сервис в промышленную эксплуатацию",
  },
  {
    id: 5,
    text: "Разработали модуль администратора для гибкой настройки системы и контроля KPI",
  },
  {
    id: 6,
    text: "Улучшали производительность системы, внедряли новые функции. Проводили рефакторинг, следили за ключевыми метриками проекта",
  },
];
