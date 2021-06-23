import React, { useState } from 'react';

import { Header, Sidebar } from "../../components";

import { dark, light } from "../../theme"; 
import { ThemeProvider } from 'styled-components';

const MainPage: React.FC = () => {
  const [themeMode, setThemeMode] = useState('dark'); 
  const [isOpen, setisOpen] = useState("open");

  const theme = themeMode === 'light' ? light : dark; 
  
  const changeTheme = () => setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  const changeStatus = () => setisOpen(isOpen === 'open' ? 'close' : 'open');

  return (
    <>
      <ThemeProvider theme={theme} >
        <Header changeTheme={changeTheme} changeStatus={changeStatus} ></Header>
        <Sidebar changeTheme={changeTheme} isOpen={isOpen}></Sidebar>
      </ThemeProvider>
    </>
  );
};

export default MainPage;