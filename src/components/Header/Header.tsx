import React from 'react';
// import { Link } from 'react-router-dom';
import {
  SearchIcon,
  SunIcon,
  MoonIcon,
  BallIcon,
  MessageIcon,
  Logo
} from '../../assets';
import * as S from './style';

interface Props {
  changeTheme: () => void,
  changeStatus: () => void
}

const Header: React.FC<Props> = (props) => {
  return (
    <S.Header>
      <S.HeaderLeft>
        <S.Hamburger onClick={props.changeStatus}>
          <S.HamburgerLine />
          <S.HamburgerLine />
          <S.HamburgerLine />
        </S.Hamburger>
        <Logo />
      </S.HeaderLeft>
      <S.SearchForm>
          <SearchIcon  />  
          <S.SearchInput type="text" placeholder="검색어를 입력해주세요" />
      </S.SearchForm>
      <S.Utility>
          <S.ModButtonWrap onClick={props.changeTheme} >
              <SunIcon/>
              <MoonIcon/>
          </S.ModButtonWrap>
          <BallIcon />
          <MessageIcon />
          <S.Profile />
      </S.Utility>
    </S.Header> 
  );
};

export default Header;
