import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import HomeIcon from '../svg/HomeIcon';
import GameIcon from '../svg/GameIcon';
import MovieIcon from '../svg/MovieIcon';
import BookIcon from '../svg/BookIcon';
import FoodIcon from '../svg/FoodIcon';
import MusicIcon from '../svg/MusicIcon';
import UserIcon from '../svg/UserIcon';
import LogoutIcon from '../svg/LogoutIcon';
import OptionIcon from '../svg/OptionIcon';

const Container = styled.aside `
    width: 250px;
    height: 100vh;
    background-color: ${(props) => (props.mod === "dark" ? "#1E2025" : "#fff")};

    display: flex;
    justify-content: center;

    position: fixed;
    left: ${(props) => (props.status === "open" ? 0 : "-250px")}; top: 70px;

    padding-top: 50px;

    & a {
        color: ${(props) => (props.mod === "dark" ? "#fff" : "#1E2025")};
    }

    & span {
        color: ${(props) => (props.mod === "dark" ? "#fff" : "#1E2025")};
    }
    
    & i {
        color: ${(props) => (props.mod === "dark" ? "#fff" : "#1E2025")};
    }

    & .sub {
        border-left: 3px solid ${(props) => (props.mod === "dark" ? "#fff" : "#1E2025")};
    }

    & svg path {
        fill: ${(props) => (props.mod === "dark" ? "#fff" : "#1E2025")};
    }

    & .filled_navItem > .sub { max-height: 100px; }
    & .border_navItem > .sub { max-height: 100px; }
`

const Nav = styled.nav `
    width: 190px; 
    
    font-size: 1.2em;

    & .filled_navItem { background-color: #E99A11; }
    & .border_navItem { border: 3px solid #E99A11; }
`

const NavItem = styled.div `
    display: flex;
    align-items: center;

    position: relative;

    margin: 15px 0;
    padding: 7px 20px;
    border: 3px solid rgba(0, 0, 0, 0);
    border-radius: 20px;

    cursor: pointer;

    & > span, & > a {
        margin-left: 30px;
    }
    & > span + i, & > a + i {
        margin-left: 30px;
    }

    :last-child {
        margin-top: 70px;
    }
`

const RightAngleIcon = styled.i `
    font-size: 1.4em;
    color: ${(props) => (props.mod === "dark" ? "#fff" : "#1E2025")};
`

const Sub = styled.div `
    width: 65%;
    max-height: 0;

    font-size: .8em;
    text-align: center;

    position: absolute;
    left: 50%; top: 120%;
    transition: 1s;
    transform: translateX(-50%);

    overflow: hidden;

    & > a {
        display: block; 
        
        padding: .3em 0;

        :hover {
            color: #E99A11;
        }
    }
`

const SideBar = (props) => {
    const [select, setSelect] = useState("game");
    const mod = props.mod; 
    const status = props.status; 
    
    useEffect(() => {
        document.querySelectorAll(".nav-item").forEach(navItem => {
            navItem.classList.remove("filled_navItem");
            navItem.classList.remove("border_navItem");
            navItem.style.marginBottom = "0";
        })
        let navItem = document.querySelector(`.${select}`);
        mod === "dark" ? navItem.classList.add("filled_navItem") : navItem.classList.add("border_navItem");

        let sub = document.querySelector(`.${select} .sub`);
        navItem.style.marginBottom = `${sub.childNodes.length * 35}px`; 

        document.querySelectorAll("i").forEach(icon => {
            icon.style.transform = "rotate(0)";
        })
        let angle = document.querySelector(`.${select} > i`);
        angle.style.transform = "rotate(90deg)";
    });
    
    return(
        <Container mod={mod} status={status}>
            <Nav>
                <NavItem className="nav-item home">
                    <HomeIcon />
                    <Link to="/">홈</Link>
                    <i className="sub"></i>
                </NavItem>
                <NavItem className="nav-item game" onFocus={() => select === "game" ? setSelect("game") : setSelect("game")}>
                    <GameIcon />
                    <span href="/">게임</span>
                    <RightAngleIcon className="fa fa-angle-right" />
                    <Sub mod={mod} className="sub">
                        <Link to="/b">RPG</Link>
                        <Link to="/b">FPS</Link>
                        <Link to="/b">AOS</Link>
                    </Sub>
                </NavItem>
                <NavItem className="nav-item movie" onFocus={() => select === "movie" ? setSelect("game") : setSelect("movie")}>
                    <MovieIcon />
                    <span href="/">영화</span>
                    <RightAngleIcon className="fa fa-angle-right" />
                    <Sub mod={mod} className="sub">
                        <Link to="/b">RPG</Link>
                        <Link to="/b">FPS</Link>
                        <Link to="/b">AOS</Link>
                    </Sub>
                </NavItem>
                <NavItem className="nav-item book" onFocus={() => select === "book" ? setSelect("game") : setSelect("book")}>
                    <BookIcon />
                    <span href="/">독서</span>
                    <RightAngleIcon className="fa fa-angle-right" />
                    <Sub mod={mod} className="sub">
                        <Link to="/b">RPG</Link>
                        <Link to="/b">FPS</Link>
                        <Link to="/b">AOS</Link>
                    </Sub>
                </NavItem>
                <NavItem className="nav-item app" onFocus={() => select === "app" ? setSelect("game") : setSelect("app")}>
                    <FoodIcon />
                    <span href="/">음식</span>
                    <RightAngleIcon className="fa fa-angle-right" />
                    <Sub mod={mod} className="sub">
                        <Link to="/b">RPG</Link>
                        <Link to="/b">FPS</Link>
                        <Link to="/b">AOS</Link>
                    </Sub>
                </NavItem>
                <NavItem className="nav-item webtoon" onFocus={() => select === "webtoon" ? setSelect("game") : setSelect("webtoon")}>
                    <MusicIcon />
                    <span href="/">음악</span>
                    <RightAngleIcon className="fa fa-angle-right" />
                    <Sub mod={mod} className="sub">
                        <Link to="/b">RPG</Link>
                        <Link to="/b">FPS</Link>
                        <Link to="/b">AOS</Link>
                    </Sub>
                </NavItem>
                <NavItem>
                    <UserIcon />
                    <span href="/">내정보</span>
                </NavItem>
                <NavItem>
                    <LogoutIcon />
                    <span href="/">로그아웃</span>
                </NavItem>
                <NavItem>
                    <OptionIcon />
                    <span href="/">설정</span>
                </NavItem>
            </Nav>
        </Container>
    )
};

export default SideBar;