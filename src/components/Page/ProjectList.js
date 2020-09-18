import React from 'react';
import {connect} from 'react-redux';

function ProjectList({title, items}) {
  return (
    <section className="Section" aria-label={title}>
      <h2 className="H H_level_2">{title}</h2>
      <section className="Section">
        {items.map(item => (
          <React.Fragment key={item.groupName}>
            <h3 className="H H_level_3">{item.groupName}</h3>
            <ul className="Ul">
              {item.projects.map(project => (
                <li className="Ul__Item" key={project.name}>
                  <a href={project.link}>{project.name}</a>: {project.description}
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </section>
    </section>
  );
}

const mapStateToProps = state => state.page.data.projectList;

export default connect(mapStateToProps, null)(ProjectList);
