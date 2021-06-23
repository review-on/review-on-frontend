import styled from 'styled-components';

interface props {
  isOpen?: string
}

export const Content = styled.div`
  width: ${({ isOpen }: props) => isOpen === "open" ? "calc(100% - 250px)" : "100%"};
  background-color: ${props => props.theme.colors.bgColor2};

  position: relative;
  left: ${({ isOpen }: props) => isOpen === "open" ? "250px" : "0"}; top: 70px; 

  ::before, ::after {
    width: 100%; 
    height: 200px;

    position: absolute;
    left: 0; top: 650px;
    z-index: 100;
    transition: opacity 1s ease-out !important;

    content: '';
  }

  ::before {
    opacity: ${props => props.theme.colors.opacityType1};
    background: linear-gradient(to bottom, rgba(51, 51, 51, 0) 0%, rgb(0, 0, 0) 100%);
  }

  ::after {
    opacity: ${props => props.theme.colors.opacityType2};
    background: linear-gradient(to bottom, rgba(139, 139, 139, 0) 0%, rgb(255, 255, 255) 100%);
  }
`