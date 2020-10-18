import React from 'react';
import ProfileInfo from './ProfileInfo';

export default function ProfilePrintable() {
  return (
    <div className="Split">
      <div className="Split__Item">
        <div className="Avatar" />
      </div>
      <ProfileInfo />
    </div>
  );
}
