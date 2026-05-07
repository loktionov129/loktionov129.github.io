import { useLang } from '@/hooks';
import { useMemo } from 'react';

function calculateAgeByBirthday(birthDate: string) {
  const birthday = new Date(birthDate);
  const now = new Date();
  const age = now.getFullYear() - birthday.getFullYear();
  const hasBirthdayInCurrentYear =
    now.getMonth() > birthday.getMonth() ||
    (now.getMonth() === birthday.getMonth() && now.getDate() >= birthday.getDate());

  return hasBirthdayInCurrentYear ? age : age - 1;
}

export const ProfileInfo = () => {
  const { t } = useLang();
  const birthDate = (t && t.profile && t.profile.age && t.profile.age.birthDate) || '';
  const calculatedAge = useMemo(() => calculateAgeByBirthday(birthDate), [birthDate]);

  return (
    t && (
      <>
        <div className='Split__Item'>
          <dl className='Properties'>
            <div className='Properties__Item'>
              <dt className='Properties__K'>{t.profile.name.key}:</dt>
              <dd className='Properties__V'>{t.profile.name.value}</dd>
            </div>
            <div className='Properties__Item'>
              <dt className='Properties__K'>{t.profile.age.key}:</dt>
              <dd className='Properties__V'>{calculatedAge}</dd>
            </div>
            <div className='Properties__Item'>
              <dt className='Properties__K'>{t.profile.city.key}:</dt>
              <dd className='Properties__V'>{t.profile.city.value}</dd>
            </div>
            {t.profile.socialMedia.map((social) => (
              <div className='Properties__Item' key={social.key}>
                <dt className='Properties__K'>{social.key}:</dt>
                <dd className='Properties__V'>
                  <a href={social.url}>{social.value}</a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className='Split__Item'>
          <dl className='Properties'>
            <div className='Properties__Item'>
              <dt className='Properties__K'>{t.profile.level.key}:</dt>
              <dd className='Properties__V'>{t.profile.level.value}</dd>
            </div>
            <div className='Properties__Item'>
              <dt className='Properties__K'>{t.profile.english.key}:</dt>
              <dd className='Properties__V'>{t.profile.english.value}</dd>
            </div>
            <div className='Properties__Item'>
              <dt className='Properties__K'>{t.profile.specialization.key}:</dt>
              <dd className='Properties__V'>{t.profile.specialization.value}</dd>
            </div>
            <div className='Properties__Item'>
              <dt className='Properties__K'>{t.profile.salary.key}:</dt>
              <dd className='Properties__V'>{t.profile.salary.value}</dd>
            </div>
            <div className='Properties__Item'>
              <dt className='Properties__K'>{t.profile.employment.key}:</dt>
              <dd className='Properties__V'>{t.profile.employment.value}</dd>
            </div>
            <div className='Properties__Item'>
              <dt className='Properties__K'>{t.profile.location.key}:</dt>
              <dd className='Properties__V'>{t.profile.location.value}</dd>
            </div>
          </dl>
        </div>
      </>
    )
  );
};
