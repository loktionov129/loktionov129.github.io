import { ProfileInfo } from './ProfileInfo';

export const ProfilePrintable = () => {
  return (
    <div className='Split'>
      <div className='Split__Item'>
        <div className='Avatar' />
      </div>
      <ProfileInfo />
    </div>
  );
};
