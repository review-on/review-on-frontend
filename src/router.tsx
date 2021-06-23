import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  MainContainer,
} from './containers';


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
