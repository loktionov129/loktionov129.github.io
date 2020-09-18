import React from 'react';
import {connect} from 'react-redux';
import ProfilePrintable from './ProfilePrintable';
import ProfileNonPrintable from './ProfileNonPrintable';

function Profile(props) {
  return (
    <section className="Section HeadingSection" aria-label={`${props.name.value} CV (${props.specialization.value} Developer)`}>
      <h1 className="H H_level_1">{props.name.value} CV ({props.specialization.value} Developer)</h1>
      <div className="print">
        <ProfilePrintable/>
      </div>
      <div className="no-print lte-s">
        <ProfileNonPrintable/>
      </div>
      <div className="no-print gte-m">
        <ProfileNonPrintable/>
      </div>
    </section>
  );
}

const mapStateToProps = state => state.page.data.profile;

export default connect(mapStateToProps, null)(Profile);
