import React from 'react';

export default function WorkExperience() {
  return (
    <section className="Section" aria-label="Опыт работы">
      <h2 className="H H_level_2">Опыт работы</h2>
      <section className="Section" aria-label="Backend .NET Developer">
        <h3 className="H H_level_3">
          Backend .NET Developer
          <div className="Subtitle"><a href="http://magora-systems.com">Magora Systems</a>,
            Новосибирск, август 2018 г.&nbsp;– наст. время</div>
        </h3>
        <p><strong className="Xps__Strong">Обязанности:</strong><br />
          Разработка социальной сети с использованием .Net Core 2+, PostgreSQL, Firebase, RabbitMQ.
        </p>
      </section>
      <section className="Section" aria-label=".NET Developer">
        <h3 className="H H_level_3">
          .NET Developer
          <div className="Subtitle"><a href="https://www.saritasa.com/">Saritasa</a>, Красноярск,
            апрель 2018 г.&nbsp;– август 2018 г.</div>
        </h3>
        <p><strong className="Xps__Strong">Обязанности:</strong><br />
          Разработка цифровой платформы для ресторанов.<br /><br />

          Technology Stack:<br />
          - C# / ASP.NET WEB API / WCF<br />
          - Entity Framework / Dapper<br />
          - MS SQL<br />
          - TypeScript / Angular / RxJs / NgRx / Material Design
        </p>
      </section>
      <section className="Section" aria-label="Фрилансер">
        <h3 className="H H_level_3">
          Фрилансер
          <div className="Subtitle">февраль 2016 г.&nbsp;– апрель 2018 г.</div>
        </h3>
        <p>
          <strong className="Xps__Strong">Обязанности:</strong><br />
          Разработка и поддержка веб-сайтов на WordPress.<br />
          Вёрстка PSD макетов / правка уже существующего дизайна.<br />
          Подключение сторонних WordPress-плагинов.
        </p>
      </section>
    </section>
  );
}
