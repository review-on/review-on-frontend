import styled, { ThemeProps } from 'styled-components';

interface props {
  isOpen?: string
  image?: object
}

interface background {
  image: string[]
}

export const Content = styled.div`
  width: ${({ isOpen }: props) => isOpen === "open" ? "calc(100% - 250px)" : "100%"};
  background-color: ${props => props.theme.colors.bgColor2};

  position: relative;
  left: ${({ isOpen }: props) => isOpen === "open" ? "250px" : "0"}; top: 70px; 

  transition: 1s;
`

export const BackgroundImage = styled.div<ThemeProps<unknown> & background>`
    width: 100%;
    height: 90vh;

    position: absolute;

    transition: 1s;

    background-image: url(${props => props.theme.text === 'dark' ? props.image[0] : props.image[1]});
    background-position: ${props => props.theme.text === 'dark' ? "center -100px" : ""};
    background-repeat: no-repeat;
    background-size: cover;
`

export const BackgroundText = styled.div `
    line-height: 60px;

    position: absolute;
    left: 10%; top: 200px;
    z-index: 100;

    & > span {
        font-size: 3.5em;
        font-weight: bold;
        color: #fff !important;
    }
`

export const Section = styled.section `
    width: 80%;

    position: relative;
    z-index: 300;

    margin: 0 auto;
    padding-top: 500px;
`

export const FlexWrap = styled.div `
    display: flex;
    flex-wrap: wrap;
    
    margin-top: 1.5em;
    padding-top: 3em;
`