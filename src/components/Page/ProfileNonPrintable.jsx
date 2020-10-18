import React from 'react';
import ProfileInfo from './ProfileInfo';

export default function ProfileNonPrintable() {
  return (
    <>
      <div className="Center">
        <div className="Center__Inner">
          <div className="Avatar" />
        </div>
      </div>
      <div className="Center">
        <div className="Center__Inner">
          <div className="Split">
            <ProfileInfo />
          </div>
        </div>
      </div>
    </>
  );
}
