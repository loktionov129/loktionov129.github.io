import { ProfilePrintable } from './ProfilePrintable';
import { ProfileNonPrintable } from './ProfileNonPrintable';
import { useLang } from '@/hooks';

export const Profile = () => {
  const { t } = useLang();
  return (
    t && (
      <section
        className='Section HeadingSection'
        aria-label={`${t.profile.name.value} CV (${t.profile.specialization.value} Developer)`}
      >
        <div className='H H_level_1'>
          {t.profile.name.value} CV ({t.profile.specialization.value} Developer)
        </div>
        <div className='print'>
          <ProfilePrintable />
        </div>
        <div className='no-print lte-s'>
          <ProfileNonPrintable />
        </div>
        <div className='no-print gte-m'>
          <ProfileNonPrintable />
        </div>
      </section>
    )
  );
};
