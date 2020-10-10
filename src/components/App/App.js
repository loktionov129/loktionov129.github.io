import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './App.css';
import Loader from '../Loader/Loader';
import Page from '../Page/Page';
import Aside from '../Aside/Aside';
import {loadProfile} from '../../store/Page/actions';

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
  isLoading: state.page.isLoading,
  hasError: state.page.hasError
});
const mapDispatchToProps = {
  loadProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
