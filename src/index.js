import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import AOSPage from './pages/game/AOSPage';
import FormPage from './pages/FormPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Route path="/" component={FormPage} exact /> */}
      <Route path="/" component={AOSPage} exact />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
