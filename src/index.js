import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { modProvider } from "./hooks/useMod";

import AOSPage from './pages/game/AOSPage';
// import FormPage from './pages/FormPage';

ReactDOM.render(
  <React.StrictMode>
    {/* <modProvider> */}
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" component={FormPage} exact /> */}
          <Route path="/" component={AOSPage} exact />
        </Switch>
      </BrowserRouter>
    {/* </modProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
