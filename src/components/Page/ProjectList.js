import React from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../store/Page/selectors';

function ProjectList({ title, items }) {
  return (
    <section className="Section" aria-label={title}>
      <div className="H H_level_2">{title}</div>
      <section className="Section">
        {items.map((item) => (
          <React.Fragment key={item.groupName}>
            <div className="H H_level_3">{item.groupName}</div>
            <ul className="Ul">
              {item.projects.map((project) => (
                <li className="Ul__Item" key={project.name}>
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
  );
}

const mapStateToProps = (state) => getProfile(state).projectList;

export default connect(mapStateToProps, null)(ProjectList);
