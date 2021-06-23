import styled from 'styled-components';

export const Header = styled.header `
    width: 100%;
    height: 70px;
    background-color: ${props => props.theme.colors.bgColor1};

    position: fixed;
    z-index: 1000;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 40px;
`

export const HeaderLeft = styled.div `
    display: flex;
    align-items: center;

    & > svg { 
        margin-left: 35px; 
        margin-top: 2px;
    }
    & > svg tspan { 
        fill: ${props => props.theme.colors.textColor};
    }
`

export const Hamburger = styled.div `
    width: 1.4em;
    height: 1.2em;

    display: block;
    transition: 0.5s;

    margin-bottom: 0;
    cursor: pointer;

`
export const HamburgerLne = styled.span `
    width: 1.4em;

    display: block;

    margin-top: calc(1.2em / 3);
    margin-left: auto;

    border-top: 1px solid ${props => props.theme.colors.hamburgerColor};
    
    :first-child {
        margin-top : 2px;
    }
`

export const SearchForm = styled.div `
    svg {
        transform: translate(33px, 3px);
    }
    & > svg path {
       fill: ${props => props.theme.colors.textColor};
    }
`

export const SearchInput = styled.input`
    width: 450px;
    background-color: ${props => props.theme.colors.bgColor1};

    font-size: 0.8em;
    color: ${props => props.theme.colors.textColor};

    padding: 8px 50px;
    border: 1px solid ${props => props.theme.colors.searchInputBorder};
    border-radius: 20px;
    outline: none;

    ::placeholder {
        color: ${props => props.theme.colors.textColor};
    }
`

export const Utility = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

    & > svg {
        margin-left: 25px;
    }
    & > svg path {
       fill: ${props => props.theme.colors.textColor};
    }
`

export const ModButtonWrap = styled.div `
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
        opacity: ${props => props.theme.colors.sunOpacity};
    }
    & > *:last-child {
        opacity: ${props => props.theme.colors.moonOpacity};
    }
`

export const Profile = styled.div `
    width: 35px; 
    height: 35px;
    background-color: #fff;

    border: 1px solid #1E2025;
    border-radius: 50%;

    margin-left: 25px;
`