import React from 'react';
// import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Router from "./router";
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  // })

  return(
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer />
      <Router />
    </BrowserRouter>
  )
}

export default App;