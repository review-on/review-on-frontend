import React, { useState } from 'react';

import { Header, Sidebar, Content } from "../../components";

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
        <Sidebar isOpen={isOpen}></Sidebar>
        <Content isOpen={isOpen} />
      </ThemeProvider>
    </>
  );
};

export default MainPage;