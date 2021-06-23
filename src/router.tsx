import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  MainContainer,
} from './pages';


const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainContainer} exact/>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
