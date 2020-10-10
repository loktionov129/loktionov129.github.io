import React from 'react';
import {connect} from 'react-redux';
import {changeTheme} from '../../store/Aside/actions';

function ThemePanel({locale, theme, setDarkTheme, setLightTheme}) {
  return (
    <section className="Section scheme" aria-label={locale.theme.title}>
      <h2 className="H H_level_2">{locale.theme.title}</h2>
      <div className="Buttons primary">
        <span
          role="button"
          tabIndex="0"
          data-scheme="dark"
          className={`Buttons__Item ${theme === 'dark' ? 'checked' : ''}`}
          onClick={setDarkTheme}
        >
          {locale.theme.dark}
        </span>

        <span
          role="button"
          tabIndex="0"
          data-scheme="light"
          className={`Buttons__Item ${theme === 'light' ? 'checked' : ''}`}
          onClick={setLightTheme}
        >
          {locale.theme.light}
        </span>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  locale: state.page.data[state.aSide.lang].aside,
  theme: state.aSide.theme
});

const mapDispatchToProps = dispatch => ({
  setDarkTheme: () => dispatch(changeTheme('dark')),
  setLightTheme: () => dispatch(changeTheme('light'))
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemePanel);
