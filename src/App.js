import './config/ReactotronConfig';

import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import Routes from './routes';
import store from './store';
import GlobalStyle from './styles/global';

import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
