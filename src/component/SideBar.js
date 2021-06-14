import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import HomeIcon from '../svg/HomeIcon';
import GameIcon from '../svg/GameIcon';

const Container = styled.aside `
    width: 250px;
    height: 100vh;
    background-color: ${(props) => (props.mod === "dark" ? "#1E2025" : "#fff")};

    display: flex;
    justify-content: center;

    position: fixed;
    left: 0; top: 70px;

    padding-top: 50px;

    & a {
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

    & > a {
        margin: 0 30px;
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
    transition: max-height 1s;
    transform: translateX(-50%);

    overflow: hidden;
`

const SubItem = styled.a `
    display: block; 
    
    padding: .3em 0;
`

const SideBar = (props) => {
    const [select, setSelect] = useState("home");
    const mod = props.mod; 
    const status = props.status; 
    
    useEffect(() => {
        let aside = document.querySelector("aside");
        status === "open" ? aside.style.left = "0" : aside.style.left = "-250px";

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
        <Container mod={mod}>
            <Nav>
                <NavItem className="nav-item home">
                    <HomeIcon />
                    <a href="/">홈</a>
                    <i className="sub"></i>
                </NavItem>
                <NavItem className="nav-item game" onClick={() => select === "game" ? setSelect("home") : setSelect("game")}>
                    <GameIcon />
                    <a href="/">게임</a>
                    <RightAngleIcon className="fa fa-angle-right" />
                    <Sub className="sub">
                        <SubItem href="/">RPG</ SubItem>
                        <SubItem href="/">FPS</ SubItem>
                        <SubItem href="/">AOS</ SubItem>
                    </Sub>
                </NavItem>
                <NavItem className="nav-item movie" onClick={() => select === "movie" ? setSelect("home") : setSelect("movie")}>
                    <GameIcon />
                    <a href="/">영화</a>
                    <RightAngleIcon className="fa fa-angle-right" />
                    <Sub className="sub">
                        <SubItem href="/">RPG</ SubItem>
                        <SubItem href="/">FPS</ SubItem>
                        <SubItem href="/">AOS</ SubItem>
                    </Sub>
                </NavItem>
                <NavItem className="nav-item book" onClick={() => select === "book" ? setSelect("home") : setSelect("book")}>
                    <GameIcon />
                    <a href="/">독서</a>
                    <RightAngleIcon className="fa fa-angle-right" />
                    <Sub className="sub">
                        <SubItem href="/">RPG</ SubItem>
                        <SubItem href="/">FPS</ SubItem>
                        <SubItem href="/">AOS</ SubItem>
                    </Sub>
                </NavItem>
                <NavItem className="nav-item app" onClick={() => select === "app" ? setSelect("home") : setSelect("app")}>
                    <GameIcon />
                    <a href="/">앱</a>
                    <RightAngleIcon className="fa fa-angle-right" />
                    <Sub className="sub">
                        <SubItem href="/">RPG</ SubItem>
                        <SubItem href="/">FPS</ SubItem>
                        <SubItem href="/">AOS</ SubItem>
                    </Sub>
                </NavItem>
                <NavItem className="nav-item webtoon" onClick={() => select === "webtoon" ? setSelect("home") : setSelect("webtoon")}>
                    <GameIcon />
                    <a href="/">웹툰</a>
                    <RightAngleIcon className="fa fa-angle-right" />
                    <Sub className="sub">
                        <SubItem href="/">RPG</ SubItem>
                        <SubItem href="/">FPS</ SubItem>
                        <SubItem href="/">AOS</ SubItem>
                    </Sub>
                </NavItem>
            </Nav>
        </Container>
    )
};

export default SideBar;