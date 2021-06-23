import styled from 'styled-components';

interface props {
    isOpen: string;
}

export const Aside = styled.aside `
    width: 250px;
    height: 100vh;
    background-color: ${props => props.theme.colors.bgColor1};

    display: flex;
    justify-content: center;

    position: fixed;
    left: ${({ isOpen }: props) => isOpen == "open" ? 0 : "-250px"}; top: 70px;

    padding-top: 50px;

    & a {
        color: ${props => props.theme.colors.textColor};
    }

    & span {
        color: ${props => props.theme.colors.textColor};
    }
    
    & i {
        color: ${props => props.theme.colors.textColor};
    }

    & .sub {
        border-left: 3px solid ${props => props.theme.colors.textColor};
    }

    & svg path {
        fill: ${props => props.theme.colors.textColor};
    }

    & .filled_navItem > .sub { max-height: 100px; }
    & .border_navItem > .sub { max-height: 100px; }
`

export const Nav = styled.nav `
    width: 190px; 
    
    font-size: 1.2em;

    & .filled_navItem { background-color: #E99A11; }
    & .border_navItem { border: 3px solid #E99A11; }
`

export const NavItem = styled.div `
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

export const RightAngleIcon = styled.i `
    font-size: 1.4em;
    color: ${props => props.theme.colors.textColor};
`

export const Sub = styled.div `
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