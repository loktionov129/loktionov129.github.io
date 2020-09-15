import React from 'react';

export default function ProjectList() {
  return (
    <section className="Section" aria-label="Проекты">
      <h2 className="H H_level_2">Проекты</h2>
      <section className="Section">
        <h3 className="H H_level_3">mpgp</h3>
        <ul className="Ul">
          <li className="Ul__Item"><a href="https://github.com/mpgp/mpgp.github.io">mpgp.github.io</a>:
            Документация по проекту. Доступна по адресу <a
              href="https://mpgp.github.io/">https://mpgp.github.io/</a></li>
          <li className="Ul__Item"><a href="https://github.com/mpgp/Mpgp">Mpgp</a>: ASP.NET CORE Web
            Api Application with WebSockets.
          </li>
          <li className="Ul__Item"><a href="https://github.com/mpgp/BrowserClient">BrowserClient</a>:
            Browser client powered by Angular.
          </li>
        </ul>
        <h3 className="H H_level_3">my-repositories</h3>
        <ul className="Ul">
          <li className="Ul__Item"><a
            href="https://github.com/my-repositories/ThreeTrees.Metrics">ThreeTrees.Metrics</a>:
            «CRM Metrics» - System for software development company ThreeTrees.
          </li>
          <li className="Ul__Item"><a
            href="https://github.com/my-repositories/TaskManager">TaskManager</a>: «Система
            управления задачами» - Тестовое задание на позицию младшего .NET разработчика.
            Приложение разработано в 2-ух версиях: <a
              href="https://github.com/my-repositories/TaskManager/tree/SPA">SPA</a> - ASP.NET
            WebAPI + React/Mobx, <a
              href="https://github.com/my-repositories/TaskManager/tree/mvc5">mvc5</a> - ASP.NET
            MVC Web Application.
          </li>
          <li className="Ul__Item"><a
            href="https://github.com/my-repositories/Battleship">Battleship</a>: Игра «Морской бой»
            - Первое приложение на C#.
          </li>
          <li className="Ul__Item"><a href="https://github.com/my-repositories/Hangman">Hangman</a>:
            Игра «Виселица» - Первое приложение на JavaScript.
          </li>
        </ul>
      </section>
    </section>
  );
}
