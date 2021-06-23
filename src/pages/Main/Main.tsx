import React, { useState } from 'react';

import { Header } from "../../component";

import {dark, light} from "../../theme"; // 환경별 테마 정보 가져오기
import { ThemeProvider } from 'styled-components';

const [themeMode, setThemeMode] = useState('light'); 
const theme = themeMode === 'light' ? light : dark; 

const toggleTheme = () => setThemeMode(themeMode === 'light' ? 'dark' : 'light');

const MainPage: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header></Header>
      </ThemeProvider>
    </>
  );
};

export default MainPage;
