// import { render } from '@testing-library/react';
import React, { useEffect } from 'react';
import styled from 'styled-components';

import SearchIcon from '../svg/SearchIcon';
import SunIcon from '../svg/SunIcon';
import MoonIcon from '../svg/MoonIcon';
import BallIcon from '../svg/BallIcon';
import MessageIcon from '../svg/MessageIcon';
import Logo from '../svg/Logo';

const Container = styled.header `
    width: 100%;
    height: 70px;
    background-color: ${(props) => (props.mod === "dark" ? "#1E2025" : "#fff")};

    position: fixed;
    z-index: 1000;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 40px;
`

const HeaderLeft = styled.div `
    display: flex;
    align-items: center;

    & > svg { 
        margin-left: 35px; 
        margin-top: 2px;
    }
    & > svg tspan { 
        fill: ${(props) => (props.mod === "dark" ? "#fff" : "#1E2025")};
    }
`

const Hamburger = styled.div `
    width: 1.4em;
    height: 1.2em;

    display: block;
    transition: 0.5s;

    margin-bottom: 0;
    cursor: pointer;

    & > span {
        width: 1.4em;

        display: block;

        margin-top: calc(1.2em / 3);
        margin-left: auto;

        border-top: 1px solid ${(props) => (props.mod === "dark" ? "#fff" : "#1E2025")};
    }
    
    & > *:first-child {
        margin-top : 2px;
    }
`

const SearchForm = styled.div `
    svg {
        transform: translateX(33px);
    }
`

const SearchInput = styled.input`
    width: 450px;
    background-color: ${(props) => (props.mod === "dark" ? "#1E2025" : "#fff")};

    font-size: 0.8em;
    color: ${(props) => (props.mod === "dark" ? "#d8d8d8" : "#1E2025")};

    padding: 8px 50px;
    border: 1px solid ${(props) => (props.mod === "dark" ? "#707070" : "#1E2025")};
    border-radius: 20px;
    outline: none;

    ::placeholder {
        color: ${(props) => (props.mod === "dark" ? "#d8d8d8" : "#1E2025")} !important;
    }
`

const Utility = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

    & > svg {
        margin-left: 25px;
    }
    & > svg path {
       fill: ${(props) => (props.mod === "dark" ? "#fff" : "#1E2025")};
    }
`

const ModButtonWrap = styled.div `
    width: 40px;
    height: 40px;
    background-color: #E99A11;
    
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    border-radius: 15px;
    cursor: pointer;

    svg {
        position: absolute;
        opacity: 0; 
    }
    
    & > *:first-child {
        opacity: ${(props) => (props.mod === "dark" ? "1" : "0")};
    }
    & > *:last-child {
        opacity: ${(props) => (props.mod === "dark" ? "0" : "1")};
    }
`

const Profile = styled.div `
    width: 35px; 
    height: 35px;
    background-color: #fff;

    border: 1px solid #1E2025;
    border-radius: 50%;

    margin-left: 25px;
`

const Header = (props) => {
    const mod = props.mod;
    
    const changeMod = () => {
        props.changeMod();
    }
    const moveSideBar = e => {
        props.moveSideBar();
    }
    useEffect(() => {
    });

    return(
        <Container mod={mod}>
            <HeaderLeft mod={mod}>
                <Hamburger mod={mod} onClick={moveSideBar} >
                    <span></span>
                    <span></span>
                    <span></span>
                </Hamburger>
                <Logo mod={mod}/>
            </HeaderLeft>
            <SearchForm>
                <SearchIcon  />  
                <SearchInput mod={mod} type="text" placeholder="검색어를 입력해주세요" />
            </SearchForm>
            <Utility mod={mod}>
                <ModButtonWrap mod={mod} onClick={changeMod}>
                    <SunIcon/>
                    <MoonIcon/>
                </ModButtonWrap>
                <BallIcon />
                <MessageIcon />
                <Profile />
            </Utility>
        </Container>
    ) 
};

export default Header;