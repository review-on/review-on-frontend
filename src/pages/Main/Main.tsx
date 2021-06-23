import React, { useState } from 'react';

import { Header } from "../../component";

import {dark, light} from "../../theme"; // 환경별 테마 정보 가져오기
import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';

const MainPage: React.FC = () => {
  const [themeMode, setThemeMode] = useState('dark'); 
  const theme = themeMode === 'light' ? light : dark; 
  
  const changeTheme = () => setThemeMode(themeMode === 'light' ? 'dark' : 'light');

  useEffect(() => {
    console.log(theme);
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header changeTheme={changeTheme}></Header>
      </ThemeProvider>
    </>
  );
};

export default MainPage;
