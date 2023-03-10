
import GlobalStyle from './styles/GlobalStyles';
import Routes from './routes/Routes';
import Header from './components/Header/Header';
import { Router } from 'react-router-dom';
import history from './services/history';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          <Router history={history} >
            <Header />
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} className="toast-container" />
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
