import React from 'react';
import {connect} from 'react-redux';
import {changeLang} from '../../store/Aside/actions';

function LangPanel({lang, locale, setRussian, setEnglish}) {
  return (
    <section className="Section language" aria-label={locale.lang}>
      <h2 className="H H_level_2">{locale.lang}</h2>
      <div className="Buttons primary">
        <span
          role="button"
          tabIndex="0"
          onClick={setRussian}
          className={`Buttons__Item LangSwitcher__Item_lang_ru ${lang === 'ru' ? 'checked' : ''}`}
        >
          Русский
        </span>
        <span
          role="button"
          tabIndex="0"
          onClick={setEnglish}
          className={`Buttons__Item LangSwitcher__Item_lang_en ${lang === 'en' ? 'checked' : ''}`}
        >
          English
        </span>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  locale: state.page.data.aside,
  lang: state.aSide.lang
});

const mapDispatchToProps = dispatch => ({
  setEnglish: () => dispatch(changeLang('en')),
  setRussian: () => dispatch(changeLang('ru'))
});

export default connect(mapStateToProps, mapDispatchToProps)(LangPanel);
