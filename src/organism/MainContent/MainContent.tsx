import { ContentContainer } from "@molecules/index";
import React from "react";

export const MainContent = () => {
  return (
    <React.Fragment>
      <ContentContainer
        title={title}
        description={description}
        servicesName={servicesName}
        img={img}
        isMain={true}
      />
      <div
        style={{ marginTop: "30px", marginBottom: "40px" }}
        className="container-fluid ftchs"
      >
        <div className="container">
          <div className="custom">
            <div className="row">
              <div
                className="col-md-4 col-xs-12 wow  fadeIn animated"
                style={{
                  visibility: "visible",
                  animationName: "fadeIn",
                  marginBottom: "30px",
                }}
              >
                <div className="trm">
                  <p className="icf">
                    <i className="fa fa-sitemap" aria-hidden="true"></i>
                  </p>
                  <h4>
                    Cовременные методологии
                    <br />
                    ведения проектов
                  </h4>
                  <hr></hr>
                  <p>
                    Для процесса разработки мы применяем передовую методологию
                    SCRUM.
                  </p>

                  <p>
                    Она позволяет нам правильно распределять ресурсы и
                    максимально использовать потенциал команды.
                  </p>
                </div>
              </div>

              <div
                className="col-md-4 col-xs-12 wow  fadeIn animated"
                style={{
                  visibility: "visible",
                  animationName: "fadeIn",
                  marginBottom: "30px",
                }}
              >
                <div className="trm">
                  <p className="icf">
                    <i
                      className="fa fa-calendar-check-o"
                      aria-hidden="true"
                    ></i>
                  </p>
                  <h4>
                    Контроль качества
                    <br /> (IT инженерия)
                  </h4>
                  <hr />
                  <p>
                    Стандартизация, управление и автоматизация процессов
                    разработки и поддержки программных продуктов, позволяет нам
                    обеспечивать высокий уровень качества наших услуг.
                  </p>
                </div>
              </div>

              <div
                className="col-md-4 col-xs-12 wow  fadeIn animated"
                style={{ visibility: "visible", animationName: "fadeIn" }}
              >
                <div className="trmnob">
                  <p className="icf">
                    <i className="fa fa-comments" aria-hidden="true"></i>
                  </p>
                  <h4>
                    Собственная служба
                    <br />
                    технической поддержки
                  </h4>
                  <hr />

                  <p>
                    Мы контролируем ход решения проблем, оповещаем заказчика о
                    текущем статусе вопроса.
                  </p>
                  <p>
                    Оцениваем уровень оказываемого сервиса и эффективность
                    работы службы по истечению отчетного периода.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <HomepageServices data={data} title={titleBottomContainer} /> */}
    </React.Fragment>
  );
};

// const data = [
//   {
//     id: 1,
//     label: "Цифровая трансформация",
//     description:
//       "Мы разрабатываем и поддерживаем все виды корпоративных информационных систем, которые ускоряют рабочий процесс и повышают производительность.",
//     src: "/cases_1-min.svg",
//   },
//   {
//     id: 2,
//     label: "Аутсорсинговые услуги",
//     description:
//       "Слаженная и опытная удаленная команда готова возглавить ваш проект и воплотить его в жизнь.",
//     src: "/cases_2-min.svg",
//   },
//   {
//     id: 3,
//     label: "Расширение внутренних команд",
//     description:
//       "ITP предлагает аутстаффинг команд и отдельных специалистов. Расширьте возможности существующей команды разработчиков для наиболее эффективного достижения целей разработки.",
//     src: "/cases_3-min.svg",
//   },
//   {
//     id: 4,
//     label: "Разработка стартапов",
//     description:
//       "Мы заинтересованы в создании ИТ-решений, не имеющих аналогов. Разработайте MVP-версию, тщательно протестируйте рынок и исследуйте собственный голубой океан с помощью наших экспертов.",
//     src: "/cases_4-min.svg",
//   },
// ];

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
    src: "/about_us-min.svg",
    alt: "about us",
  },
];

// const titleBottomContainer = "Услуги";
