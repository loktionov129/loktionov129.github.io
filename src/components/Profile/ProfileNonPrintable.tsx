import { ProfileInfo } from './ProfileInfo';

export const ProfileNonPrintable = () => {
  return (
    <>
      <div className='Center'>
        <div className='Center__Inner'>
          <div className='Avatar' />
        </div>
      </div>
      <div className='Center'>
        <div className='Center__Inner'>
          <div className='Split'>
            <ProfileInfo />
          </div>
        </div>
      </div>
    </>
  );
};
