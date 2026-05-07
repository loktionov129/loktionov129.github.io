import React from 'react';
import { useLang } from '@/hooks';

export const ProjectList = () => {
  const { t } = useLang();
  return (
    t && (
      <section className='Section' aria-label={t.projectList.title}>
        <h2 className='H H_level_2'>{t.projectList.title}</h2>
        <section className='Section'>
          {t.projectList.items.map((item) => (
            <React.Fragment key={item.groupName}>
              <h3 className='H H_level_3'>{item.groupName}</h3>
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
