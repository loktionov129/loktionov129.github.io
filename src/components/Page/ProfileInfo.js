import React from 'react';

export default function ProfileInfo() {
  return (
    <>
      <div className="Split__Item">
        <dl className="Properties">
          <div className="Properties__Item">
            <dt className="Properties__K">Имя:</dt>
            <dd className="Properties__V">Александр Локтионов</dd>
          </div>
          <div className="Properties__Item">
            <dt className="Properties__K">Возраст:</dt>
            <dd className="Properties__V">24</dd>
          </div>
          <div className="Properties__Item">
            <dt className="Properties__K">Город:</dt>
            <dd className="Properties__V">Москва</dd>
          </div>
          <div className="Properties__Item">
            <dt className="Properties__K">Почта:</dt>
            <dd className="Properties__V"><a
              href="mailto:loktionov129@gmail.com">loktionov129@gmail.com</a></dd>
          </div>
          <div className="Properties__Item">
            <dt className="Properties__K">Телеграм:</dt>
            <dd className="Properties__V"><a
              href="https://t.me/a_leksandr1">@a_leksandr1</a></dd>
          </div>
          <div className="Properties__Item">
            <dt className="Properties__K">GitHub:</dt>
            <dd className="Properties__V"><a
              href="https://github.com/loktionov129">@loktionov129</a></dd>
          </div>
        </dl>
      </div>
      <div className="Split__Item">
        <dl className="Properties">
          <div className="Properties__Item">
            <dt className="Properties__K">Левел:</dt>
            <dd className="Properties__V">Middle</dd>
          </div>
          <div className="Properties__Item">
            <dt className="Properties__K">Английский:</dt>
            <dd className="Properties__V">Pre-Intermediate</dd>
          </div>
          <div className="Properties__Item">
            <dt className="Properties__K">Позиция:</dt>
            <dd className="Properties__V">.NET Developer</dd>
          </div>
          <div className="Properties__Item">
            <dt className="Properties__K">Зарплата (мес.):</dt>
            <dd className="Properties__V">от&nbsp;3&nbsp;000&nbsp;$</dd>
          </div>
          <div className="Properties__Item">
            <dt className="Properties__K">Занятость:</dt>
            <dd className="Properties__V">полная</dd>
          </div>
          <div className="Properties__Item">
            <dt className="Properties__K">Локация работы:</dt>
            <dd className="Properties__V">офис</dd>
          </div>
        </dl>
      </div>
    </>
  );
}
