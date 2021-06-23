import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  GameIcon,
  MovieIcon,
  BookIcon,
  FoodIcon,
  MusicIcon,
  UserIcon,
  LogoutIcon,
  OptionIcon,
  RightAngleIcon
} from '../../assets';
import * as S from './style';

interface Props {
  changeTheme: () => void,
  isOpen: string;
}

const Sidebar: React.FC<Props> = (props) => {
  const [select, setSelect] = useState(2);

  useState(() => {
    console.log(select);
  })

  return (
    <S.Aside isOpen={props.isOpen} select={select} >
      <S.Nav> 
        <S.NavItem>
          <HomeIcon />
          <Link to="/">홈</Link>
        </S.NavItem>
        <S.NavItem onClick={() => select !== 2 ? setSelect(2) : setSelect(0)}>
          <GameIcon />
          <S.NavItemText>게임</S.NavItemText>
          <RightAngleIcon />
          <S.Sub>
            <Link to="/b">RPG</Link>
            <Link to="/b">FPS</Link>
            <Link to="/b">AOS</Link>
          </S.Sub>
        </S.NavItem>
        <S.NavItem onClick={() => select !== 3 ? setSelect(3) : setSelect(0)}>
          <MovieIcon />
          <S.NavItemText>영화</S.NavItemText>
          <RightAngleIcon />
          <S.Sub>
            <Link to="/b">RPG</Link>
            <Link to="/b">FPS</Link>
            <Link to="/b">AOS</Link>
          </S.Sub>
        </S.NavItem>
        <S.NavItem onClick={() => select !== 4 ? setSelect(4) : setSelect(0)}>
          <BookIcon />
          <S.NavItemText>독서</S.NavItemText>
          <RightAngleIcon />
          <S.Sub>
            <Link to="/b">RPG</Link>
            <Link to="/b">FPS</Link>
            <Link to="/b">AOS</Link>
          </S.Sub>
        </S.NavItem>
        <S.NavItem onClick={() => select !== 5 ? setSelect(5) : setSelect(0)}>
          <FoodIcon />
          <S.NavItemText>음식</S.NavItemText>
          <RightAngleIcon />
          <S.Sub>
            <Link to="/b">RPG</Link>
            <Link to="/b">FPS</Link>
            <Link to="/b">AOS</Link>
          </S.Sub>
        </S.NavItem>
        <S.NavItem onClick={() => select !== 6 ? setSelect(6) : setSelect(0)}>
          <MusicIcon />
          <S.NavItemText>음악</S.NavItemText>
          <RightAngleIcon />
          <S.Sub>
            <Link to="/b">RPG</Link>
            <Link to="/b">FPS</Link>
            <Link to="/b">AOS</Link>
          </S.Sub>
        </S.NavItem>
        <S.NavItem>
          <UserIcon />
            <S.NavItemText>내정보</S.NavItemText>
        </S.NavItem>
        <S.NavItem>
          <LogoutIcon />
            <S.NavItemText>로그아웃</S.NavItemText>
        </S.NavItem>
        <S.NavItem>
          <OptionIcon />
            <S.NavItemText>설정</S.NavItemText>
        </S.NavItem>
      </S.Nav>
    </S.Aside>
  );
};

export default Sidebar;
