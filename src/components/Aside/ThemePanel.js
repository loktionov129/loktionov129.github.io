import React from 'react';
import { connect } from 'react-redux';
import { changeTheme } from '../../store/Aside/actions';
import { getTheme } from '../../store/Aside/selectors';
import { getProfile } from '../../store/Page/selectors';

function ThemePanel({
  locale, theme, setDarkTheme, setLightTheme,
}) {
  return (
    <section className="Section scheme" aria-label={locale.theme.title}>
      <div className="H H_level_2">{locale.theme.title}</div>
      <div className="Buttons primary">
        <span
          role="button"
          tabIndex="0"
          data-scheme={theme}
          className={`Buttons__Item ${theme === 'dark' ? 'checked' : ''}`}
          onClick={setDarkTheme}
        >
          {locale.theme.dark}
        </span>

        <span
          role="button"
          tabIndex="0"
          data-scheme={theme}
          className={`Buttons__Item ${theme === 'light' ? 'checked' : ''}`}
          onClick={setLightTheme}
        >
          {locale.theme.light}
        </span>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  locale: getProfile(state).aside,
  theme: getTheme(state),
});

const mapDispatchToProps = (dispatch) => ({
  setDarkTheme: () => dispatch(changeTheme('dark')),
  setLightTheme: () => dispatch(changeTheme('light')),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemePanel);
