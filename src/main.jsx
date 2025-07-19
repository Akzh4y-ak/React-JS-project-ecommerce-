import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // ✅ Tailwind styles
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './context/productContext.jsx';
import { Provider } from 'react-redux'; // ✅ Redux Provider
import store from './rtk/store'; // ✅ Redux Store

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}> {/* ✅ Add this wrapper */}
        <ProductProvider>
          <App />
        </ProductProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
