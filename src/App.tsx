import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes/index';

import GlobalStyle from '../src/assets/styles/global';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './hooks/useCart';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <ToastContainer />
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </CartProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
