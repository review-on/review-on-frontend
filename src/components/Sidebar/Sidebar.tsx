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
  changeOpen: () => void,
  isOpen: string;
}

const Sidebar: React.FC<Props> = (props) => {
  return (
    <S.Aside isOpen={props.isOpen} >

    </S.Aside>
  );
};

export default Sidebar;
