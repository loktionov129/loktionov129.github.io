import React from 'react';
import {connect} from 'react-redux';

function KeyWords({title, buzzWords}) {
  return (
    <section className="Section no-print" aria-label={title}>
      <h2 className="H H_level_2">{title}</h2>
      <ul className="Chips Buzzwords">
        {buzzWords.map(item => (
          <li className={`static Chips__Item ${item.status}`} key={item.name}>{item.name}</li>
        ))}
      </ul>
    </section>
  );
}

const mapStateToProps = state => state.page.data.keywords;

export default connect(mapStateToProps, null)(KeyWords);
