import React from 'react';
import { useLang } from '@/hooks';

export const ProjectList = () => {
  const { t } = useLang();
  return (
    t && (
      <section className='Section' aria-label={t.projectList.title}>
        <div className='H H_level_2'>{t.projectList.title}</div>
        <section className='Section'>
          {t.projectList.items.map((item) => (
            <React.Fragment key={item.groupName}>
              <div className='H H_level_3'>{item.groupName}</div>
              <ul className='Ul'>
                {item.projects.map((project) => (
                  <li className='Ul__Item' key={project.name}>
                    <a href={project.link}>{project.name}</a>
                    {': '}
                    {project.description}
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ))}
        </section>
      </section>
    )
  );
};
