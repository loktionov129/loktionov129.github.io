import React, {useMemo} from 'react';
import {connect} from 'react-redux';

function calculateAgeByBirthday(birthDate) {
  const birthday = new Date(birthDate);
  const now = new Date();
  const age = now.getYear() - birthday.getYear();
  const hasBirthdayInCurrentYear = now.getMonth() > birthday.getMonth()
  || (now.getMonth() === birthday.getMonth() && now.getDate() >= birthday.getDate());

  return hasBirthdayInCurrentYear
    ? age
    : age - 1;
}

function ProfileInfo(props) {
  const birthDate = props.age.birthDate;
  const age = useMemo(() => calculateAgeByBirthday(birthDate), [birthDate]);

  return (
    <>
      <div className="Split__Item">
        <dl className="Properties">
          <div className="Properties__Item">
            <dt className="Properties__K">{props.name.key}:</dt>
            <dd className="Properties__V">{props.name.value}</dd>
          </div>
          <div className="Properties__Item">
            <dt className="Properties__K">{props.age.key}:</dt>
            <dd className="Properties__V">{age}</dd>
          </div>
          <div className="Properties__Item">
            <dt className="Properties__K">{props.city.key}:</dt>
            <dd className="Properties__V">{props.city.value}</dd>
          </div>
          {props.socialMedia.map(social => (
            <div className="Properties__Item" key={social.key}>
              <dt className="Properties__K">{social.key}:</dt>
              <dd className="Properties__V">
                <a href={social.url}>{social.value}</a></dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="Split__Item">
        <dl className="Properties">
          <div className="Properties__Item">
            <dt className="Properties__K">{props.level.key}:</dt>
            <dd className="Properties__V">{props.level.value}</dd>
          </div>
          <div className="Properties__Item">
            <dt className="Properties__K">{props.english.key}:</dt>
            <dd className="Properties__V">{props.english.value}</dd>
          </div>
          <div className="Properties__Item">
            <dt className="Properties__K">{props.specialization.key}:</dt>
            <dd className="Properties__V">{props.specialization.value}</dd>
          </div>
          <div className="Properties__Item">
            <dt className="Properties__K">{props.salary.key}:</dt>
            <dd className="Properties__V">{props.salary.value}</dd>
          </div>
          <div className="Properties__Item">
            <dt className="Properties__K">{props.employment.key}:</dt>
            <dd className="Properties__V">{props.employment.value}</dd>
          </div>
          <div className="Properties__Item">
            <dt className="Properties__K">{props.location.key}:</dt>
            <dd className="Properties__V">{props.location.value}</dd>
          </div>
        </dl>
      </div>
    </>
  );
}

const mapStateToProps = state => state.page.data.profile;

export default connect(mapStateToProps, null)(ProfileInfo);
