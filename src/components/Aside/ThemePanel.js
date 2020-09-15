import React from 'react';
import {connect} from 'react-redux';
import {changeTheme} from '../../store/Aside/actions';

function ThemePanel(props) {
  return (
    <section className="Section scheme" aria-label="Color scheme">
      <h2 className="H H_level_2">Color scheme</h2>
      <div className="Buttons primary">
        <span
          role="button"
          tabIndex="0"
          data-scheme="dark"
          className={`Buttons__Item ${props.theme === 'dark' ? 'checked' : ''}`}
          onClick={props.setDarkTheme}
        >
          тёмное
        </span>

        <span
          role="button"
          tabIndex="0"
          data-scheme="light"
          className={`Buttons__Item ${props.theme === 'light' ? 'checked' : ''}`}
          onClick={props.setLightTheme}
        >
          светлое
        </span>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({theme: state.aSide.theme});
const mapDispatchToProps = dispatch => ({
  setDarkTheme: () => dispatch(changeTheme('dark')),
  setLightTheme: () => dispatch(changeTheme('light'))
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemePanel);
