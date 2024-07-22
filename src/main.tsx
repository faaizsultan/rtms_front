import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store  from './state/store';
import './css/style.css';
import './css/satoshi.css';
import 'jsvectormap/dist/css/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store} >
    <Router>
      <App />
    </Router>
    </Provider>
  </React.StrictMode>,
);
