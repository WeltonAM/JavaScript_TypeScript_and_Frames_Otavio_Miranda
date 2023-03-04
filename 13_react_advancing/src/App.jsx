
import GlobalStyle from './styles/GlobalStyles';
import Routes from './routes/Routes';
import Header from './components/Header/Header';
import { Router } from 'react-router-dom';
import history from './services/history';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router history={history} >
          <Header />
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} className="toast-container" />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
