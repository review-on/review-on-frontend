import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from "./router";
import { GlobalStyle } from './GlobalStyle';
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