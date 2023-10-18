import React from "react";
import "./bootstrap.css";
import styles from "./Landing.module.scss";

export const Landing = () => {
  return (
    <div className={styles.landingContainer}>
      <section
        style={{ overflow: "visible" }}
        className="bg-gradient pt-5 pb-6"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-row align-items-center justify-content-between">
              <div className="heading-brand">Zernovoz</div>
              <a
                href="https://crm.agrotradecrm.ru/login"
                className="btn btn-dark"
                target="_blank"
                style={{ color: "white" }}
              >
                Войти
              </a>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-8 mx-auto text-center">
              <h1
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  lineHeight: "1.5",
                }}
              >
                Zernovoz
              </h1>
              <p
                style={{
                  color: "black",
                  lineHeight: "25px",
                }}
                className="lead mb-5"
              >
                Система автоматизированного сбора, управления и рассылки
                информации о заявках на транспортировку груза по определенному
                маршруту
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-9 mx-auto text-center">
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="/zernovoz1.png"
                  style={{
                    width: "600px",
                    marginBottom: "10px",
                  }}
                ></img>
              </p>
              <div className="code-window">
                <p
                  style={{
                    color: "black",
                    lineHeight: "25px",
                  }}
                >
                  CRM система Zernovoz предназначена для сбора и управления
                  информацией о заявках на транспортировку груза по
                  определенному маршруте, а также для управления данными
                  клиентов (юридических и физических лиц) и исполнителей в лице
                  организации, осуществляющих грузоперевозки, а также водителей
                  транспортных средств.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h2
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "700",
                }}
                className="text-center text-md-left"
              >
                Ключевые функциональные возможности{" "}
                <span
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: "700",
                  }}
                  className="text-success"
                >
                  Zernovoz
                </span>
              </h2>
              <div className="row feature-grid">
                <div className="col-sm-6">
                  <div className="media">
                    <div className="icon-box">
                      <div className="icon-box-inner">
                        <span data-feather="check-circle"></span>
                      </div>
                    </div>
                    <div className="icon-box">
                      <div className="icon-box-inner">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-check-circle"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div
                      style={{
                        lineHeight: "25px",
                      }}
                      className="media-body"
                    >
                      Автоматизация процесса подачи и внесения в систему
                      информации о вновь поступившей заявке
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="media">
                    <div className="icon-box">
                      <div className="icon-box-inner">
                        <span data-feather="command"></span>
                      </div>
                    </div>
                    <div className="icon-box">
                      <div className="icon-box-inner">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-command"
                        >
                          <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                        </svg>
                      </div>
                    </div>
                    <div
                      style={{
                        lineHeight: "25px",
                      }}
                      className="media-body"
                    >
                      Автоматическое добавление цветового индикатора,
                      выполняющего роль статуса заявки для приближающейся даты
                      созвона с клиентом
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="media">
                    <div className="icon-box">
                      <div className="icon-box-inner">
                        <span data-feather="feather"></span>
                      </div>
                    </div>
                    <div className="icon-box">
                      <div className="icon-box-inner">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-feather"
                        >
                          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                          <line x1="16" y1="8" x2="2" y2="22"></line>
                          <line x1="17" y1="15" x2="9" y2="15"></line>
                        </svg>
                      </div>
                    </div>
                    <div
                      style={{
                        lineHeight: "25px",
                      }}
                      className="media-body"
                    >
                      Добавление статуса “надежности” клиентам и исполнителям
                      для осуществления выборки с целью дальнейшей рассылки
                      сообщений
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="media">
                    <div className="icon-box">
                      <div className="icon-box-inner">
                        <span data-feather="zap"></span>
                      </div>
                    </div>
                    <div className="icon-box">
                      <div className="icon-box-inner">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-zap"
                        >
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                        </svg>
                      </div>
                    </div>
                    <div
                      style={{
                        lineHeight: "25px",
                      }}
                      className="media-body"
                    >
                      Автоматическое добавление контактных данных исполнителей в
                      мессенджере Telegram в базу данных системы для
                      осуществления рассылки сообщений о новых заявках
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="media">
                    <div className="icon-box">
                      <div className="icon-box-inner">
                        <span data-feather="git-pull-request"></span>
                      </div>
                    </div>
                    <div className="icon-box">
                      <div className="icon-box-inner">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-git-pull-request"
                        >
                          <circle cx="18" cy="18" r="3"></circle>
                          <circle cx="6" cy="6" r="3"></circle>
                          <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                          <line x1="6" y1="9" x2="6" y2="21"></line>
                        </svg>
                      </div>
                    </div>
                    <div
                      style={{
                        lineHeight: "25px",
                      }}
                      className="media-body"
                    >
                      Использование варианта проектирования базы данных, при
                      котором клиентом и исполнителем может являться одно и то
                      же лицо (организация либо физическое лицо), с целью
                      выявления потенциальных мошенников
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="media">
                    <div className="icon-box">
                      <div className="icon-box-inner">
                        <span data-feather="droplet"></span>
                      </div>
                    </div>
                    <div className="icon-box">
                      <div className="icon-box-inner">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-droplet"
                        >
                          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                        </svg>
                      </div>
                    </div>
                    <div
                      style={{
                        lineHeight: "25px",
                      }}
                      className="media-body"
                    >
                      Автоматическая рассылка информации о вновь добавленных
                      заявках исполнителям, выбранным в соответствии с их
                      статусом “надежности”, в мессенджере Telegram
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-6">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h2
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "700",
                }}
                className="text-center text-md-left"
              >
                Стоимость программы
              </h2>
              <p
                style={{
                  lineHeight: "25px",
                  marginBottom: "30px",
                }}
              >
                Cоставляет от 50 000 рублей и зависит от набора компонент,
                дополнительная информация предоставляется по запросу на
                sales@agrotradecrm.ru.
              </p>

              <h2
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "700",
                }}
                className="text-center text-md-left"
              >
                Состав комплекта поставки клиентам и документы
              </h2>
              <p
                style={{
                  lineHeight: "25px",
                }}
              >
                Лицензионный договор Акт приемки передачи прав Электронный
                дистрибутив программы, состоящий из пустой (рабочей базы данных)
                и демонстрационной баз данных Электронная инструкция по
                установке и запуску программы Бесплатная техническая поддержка
                (консультации и исправление выявленных ошибок) в течение 3-х
                месяцев с момента приобретения программы по адресу
                info@agrotradecrm.ru
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-6">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h2
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "700",
                }}
                className="text-center text-md-left"
              >
                Ключевые клиенты
              </h2>
              <p
                style={{
                  lineHeight: "25px",
                }}
                className="lead text-muted"
              >
                Внедрившие систему автоматизированного сбора, управления и
                рассылки информации о заявках на транспортировку груза по
                определенному маршруту "Zernovoz"
              </p>
              <div className="mt-5 d-flex flex-row justify-content-md-between flex-wrap press-icons">
                <a
                  style={{
                    color: "black",
                    lineHeight: "25px",
                  }}
                  href="https://mfc-premium.ru/"
                  className={styles.onHoverStyle}
                >
                  МФЦ ПРЕМИУМ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a
                    style={{
                      backgroundColor: "#3b4fff",
                      marginBottom: "30px",
                      color: "white",
                    }}
                    className="btn bg-gradient"
                    href="https://crm.agrotradecrm.ru/login"
                  >
                    Демо-доступ
                  </a>
                </li>
                <p></p>
                <li className="list-inline-item">
                  <a
                    className={styles.onHoverStyle}
                    style={{
                      color: "black",
                      lineHeight: "25px",
                    }}
                    target="_blank"
                    href="https://drive.google.com/drive/folders/1HNOqhCu67--AxBfPBWje_Qq9NM_J2-d7?usp=sharing"
                  >
                    Документация, содержащая описание функциональных
                    характеристик программного обеспечения и информацию,
                    необходимую для установки и эксплуатации программного
                    обеспечения
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row my-2">
            <div className="col-md-4 mx-auto text-muted text-center small-xl">
              &copy; 2023 - ООО "ИТ ПРЕМИУМ"
              <p>ИНН 6154153150 КПП 615401001</p>
              <p>
                Ростовская обл., г. Таганрог, ул. Октябрьская, д. 18, КАБИНЕТ 21
              </p>
              <p style={{ marginBottom: "30px" }}>
                телефон: +7 (988) 544-14-21
              </p>
              <p style={{ marginBottom: "30px" }}>
                <a
                  className={styles.onHoverStyle}
                  href="mailto:info@itp-it.com"
                >
                  info@itp-it.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
