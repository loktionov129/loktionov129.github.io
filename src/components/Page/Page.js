import React from 'react';
import AboutMe from './AboutMe';
import AboutApp from './AboutApp';
import ProjectList from './ProjectList';
import WorkExperience from './WorkExperience';
import KeyWords from './KeyWords';
import Profile from './Profile';

export default function Page() {
  return (
    <div className="Page">
      <article className="Page__Article">
        <Profile />
        <div className="no-print">
          <KeyWords />
          <WorkExperience />
          <ProjectList />
          <AboutMe />
          <AboutApp />
        </div>
        <div className="print">
          <AboutMe />
          <ProjectList />
          <WorkExperience />
        </div>
      </article>
    </div>
  );
}
