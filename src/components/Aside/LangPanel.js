import React from 'react';
import {connect} from 'react-redux';
import {changeLang} from '../../store/Aside/actions';

function LangPanel(props) {
  return (
    <section className="Section language" aria-label="Language">
      <h2 className="H H_level_2">Language</h2>
      <div className="Buttons primary">
        <span
          role="button"
          tabIndex="0"
          onClick={props.setRussian}
          className={`Buttons__Item LangSwitcher__Item_lang_ru ${props.lang === 'ru' ? 'checked' : ''}`}
        >
          Русский
        </span>
        <span
          role="button"
          tabIndex="0"
          onClick={props.setEnglish}
          className={`Buttons__Item LangSwitcher__Item_lang_en ${props.lang === 'en' ? 'checked' : ''}`}
        >
          English
        </span>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({lang: state.aSide.lang});
const mapDispatchToProps = dispatch => ({
  setEnglish: () => dispatch(changeLang('en')),
  setRussian: () => dispatch(changeLang('ru'))
});

export default connect(mapStateToProps, mapDispatchToProps)(LangPanel);
