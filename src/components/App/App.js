import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './App.css';
import Loader from '../Loader/Loader';
import Page from '../Page/Page';
import Aside from '../Aside/Aside';
import {loadProfile} from '../../store/Page/actions';
import {getHasError, getIsLoading} from '../../store/Page/selectors';

function App(props) {
  const {loadProfile} = props;

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  if (props.isLoading) {
    return (
      <div className="loader-wrapper">
        <Loader/>
        <p className="loader-text">Загрузка ...</p>
      </div>
    );
  }

  return (
    <>
      <Page/>
      <Aside/>
    </>
  );
}

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
  hasError: getHasError(state)
});
const mapDispatchToProps = {
  loadProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
