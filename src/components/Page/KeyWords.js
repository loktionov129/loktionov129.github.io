import React from 'react';

export default function KeyWords() {
  return (
    <section className="Section no-print" aria-label="Ключевые навыки">
      <h2 className="H H_level_2">Ключевые навыки</h2>
      <ul className="Chips Buzzwords">
        <li className="static Chips__Item info">C#</li>
        <li className="static Chips__Item info">.NET CORE</li>
        <li className="static Chips__Item info">ASP.NET MVC</li>
        <li className="static Chips__Item info">Entity Framework</li>
        <li className="static Chips__Item info">MSSQL</li>
        <li className="static Chips__Item info">PostgreSQL</li>
        <li className="static Chips__Item ok">Angular</li>
        <li className="static Chips__Item ok">ES6/7/8/Next</li>
        <li className="static Chips__Item ok">Webpack</li>
        <li className="static Chips__Item ok">TypeScript</li>
        <li className="static Chips__Item ok">Material</li>
        <li className="static Chips__Item ok">HTML</li>
        <li className="static Chips__Item ok">CSS</li>
        <li className="static Chips__Item ok">Bootstrap</li>
        <li className="static Chips__Item ok">LESS</li>
        <li className="static Chips__Item ok">SCSS</li>
        <li className="static Chips__Item ok">PostCSS</li>
        <li className="static Chips__Item ok">BEM</li>
        <li className="static Chips__Item error">Linux</li>
        <li className="static Chips__Item error">Nginx</li>
        <li className="static Chips__Item error">Docker</li>
        <li className="static Chips__Item error">Jenkins</li>
        <li className="static Chips__Item error">Kubernetes</li>
      </ul>
    </section>
  );
}
