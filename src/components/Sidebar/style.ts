import styled from 'styled-components';

interface props {
  isOpen?: string
  select?: number
}

export const Aside = styled.aside`
  width: 250px;
  height: 100vh;
  background-color: ${props => props.theme.colors.bgColor1};

  display: flex;
  justify-content: center;

  position: fixed;
  left: ${({ isOpen }: props) => isOpen === "open" ? 0 : "-250px"}; top: 70px;

  transition: left 1s, background-color 1s;

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

  & nav > div:nth-child(${({ select }: props) => select}) {
    background: ${props => props.theme.text === "dark" ? "#E99A11" : "none"};
    border: 2px solid ${props => props.theme.text === "dark" ? 0 : "#E99A11"};

    margin-bottom: 100px;
  }

  & nav > div:nth-child(${({ select }: props) => select}) > div {
    max-height: 100px;

    border-left: 3px solid ${props => props.theme.colors.textColor};
  }

  & nav > div:nth-child(${({ select }: props) => select}) svg {
    transform: rotate(0) !important;
  }

`

export const Nav = styled.nav`
  width: 190px; 
  
  font-size: 1.2em;
`

export const NavItem = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  transition: 1s;

  margin: 15px 0;
  padding: 7px 20px;
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 20px;

  cursor: pointer;
  
  & > a {
    margin-left: 30px;
  }
  & > a + i {
    margin-left: 30px;
  }

  :last-child {
    margin-top: 70px;
  }
`

export const NavItemText = styled.span`
  transition: 1s;
  
  margin-left: 25px;
  
  & + svg {
    margin-left: 25px;

    transition: 1s;
    transform: rotate(-90deg);
  }
`

export const Sub = styled.div`
  width: 65%;
  max-height: 0;

  font-size: .8em;
  text-align: center;

  position: absolute;
  left: 50%; top: 120%;
  transition: 1s;
  transform: translateX(-50%);

  border-left: 3px solid rgba(0, 0, 0, 0);

  overflow: hidden;

  & > a {
    display: block; 
    
    padding: .3em 0;

    :hover {
        color: #E99A11;
    }
  }
`