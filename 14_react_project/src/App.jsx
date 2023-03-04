import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import MyRoutes from './routes/MyRoutes';
import Header from './components/Header/Header';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <MyRoutes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} className="toast-container" />
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
