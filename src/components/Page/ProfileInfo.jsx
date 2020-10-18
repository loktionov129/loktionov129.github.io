import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../store/Page/selectors';

function calculateAgeByBirthday(birthDate) {
  const birthday = new Date(birthDate);
  const now = new Date();
  const age = now.getFullYear() - birthday.getFullYear();
  const hasBirthdayInCurrentYear = now.getMonth() > birthday.getMonth()
  || (now.getMonth() === birthday.getMonth() && now.getDate() >= birthday.getDate());

  return hasBirthdayInCurrentYear
    ? age
    : age - 1;
}

function ProfileInfo({
  age, city, employment, english, level, location, name, salary, socialMedia, specialization,
}) {
  const { birthDate } = age;
  const calculatedAge = useMemo(() => calculateAgeByBirthday(birthDate), [birthDate]);

  return (
    <>
      <div className="Split__Item">
        <dl className="Properties">
          <div className="Properties__Item">
            <dt className="Properties__K">
              {name.key}
              :
            </dt>
            <dd className="Properties__V">{name.value}</dd>
          </div>
          <div className="Properties__Item">
            <dt className="Properties__K">
              {age.key}
              :
            </dt>
            <dd className="Properties__V">{calculatedAge}</dd>
          </div>
          <div className="Properties__Item">
            <dt className="Properties__K">
              {city.key}
              :
            </dt>
            <dd className="Properties__V">{city.value}</dd>
          </div>
          {socialMedia.map((social) => (
            <div className="Properties__Item" key={social.key}>
              <dt className="Properties__K">
                {social.key}
                :
              </dt>
              <dd className="Properties__V">
                <a href={social.url}>{social.value}</a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="Split__Item">
        <dl className="Properties">
          <div className="Properties__Item">
            <dt className="Properties__K">
              {level.key}
              :
            </dt>
            <dd className="Properties__V">{level.value}</dd>
          </div>
          <div className="Properties__Item">
            <dt className="Properties__K">
              {english.key}
              :
            </dt>
            <dd className="Properties__V">{english.value}</dd>
          </div>
          <div className="Properties__Item">
            <dt className="Properties__K">
              {specialization.key}
              :
            </dt>
            <dd className="Properties__V">{specialization.value}</dd>
          </div>
          <div className="Properties__Item">
            <dt className="Properties__K">
              {salary.key}
              :
            </dt>
            <dd className="Properties__V">{salary.value}</dd>
          </div>
          <div className="Properties__Item">
            <dt className="Properties__K">
              {employment.key}
              :
            </dt>
            <dd className="Properties__V">{employment.value}</dd>
          </div>
          <div className="Properties__Item">
            <dt className="Properties__K">
              {location.key}
              :
            </dt>
            <dd className="Properties__V">{location.value}</dd>
          </div>
        </dl>
      </div>
    </>
  );
}

const mapStateToProps = (state) => getProfile(state).profile;

export default connect(mapStateToProps, null)(ProfileInfo);
