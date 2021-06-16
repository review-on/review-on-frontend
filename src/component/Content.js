import React, { useEffect } from 'react';
import styled from 'styled-components';
import PopularPosts from './PopularPosts';
import Multiplex from './Multiplex';
import ReviewRank from './ReviewRank';

import blackBackground from '../images/aosBackground.png';
import whiteBackground from '../images/aosBackground2.png';

const Container = styled.div `
    width: ${(props) => (props.status === "open" ? "calc(100% - 250px)" : "100%")};
    background-color: ${(props) => (props.mod === "dark" ? "#000" : "#fff")};

    position: relative;
    left: ${(props) => (props.status === "open" ? "250px" : "0")}; top: 70px; 

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
        opacity: ${(props)  => (props.mod === "dark" ? 1 : 0)};
        background: linear-gradient(to bottom, rgba(51, 51, 51, 0) 0%, rgb(0, 0, 0) 100%);
    }

    ::after {
        opacity: ${(props) => (props.mod === "white" ? 1 : 0)};
        background: linear-gradient(to bottom, rgba(139, 139, 139, 0) 0%, rgb(255, 255, 255) 100%);
    }
`

const BackgroundImage = styled.div `
    width: 100%;
    height: 850px;

    position: absolute;

    background-image: url(${props => props.mod === 'dark' ? blackBackground : whiteBackground});
    background-position: ${props => props.mod === 'dark' ? "center -100px" : ""};
    background-repeat: no-repeat;
    background-size: cover;
`

const BackgroundText = styled.div `
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

const Section = styled.section `
    width: 80%;

    position: relative;
    z-index: 300;

    margin: 0 auto;
    padding-top: 450px;
`

const FlexWrap = styled.div `
    display: flex;
    flex-wrap: wrap;
    
    margin-top: 1.5em;
    padding-top: 3em;
`

const Content = (props) => {
    const mod = props.mod;
    const status = props.status;

    useEffect(() => {
        document.body.style.backgroundColor = "#1E2025"
        let visual = document.querySelector(".visual");
        visual.classList.remove("type_open", "type_close");
        visual.classList.add(`type_${status}`);
    });

    return (
        <Container mod={mod} status={status} className="visual">
            <BackgroundImage mod={mod} />
            <BackgroundText>
                <span>AOS 세계로</span><br />
                <span>탐험을 떠나자</span>
            </BackgroundText>
            <Section>
                <PopularPosts mod={mod} />
                <FlexWrap>
                    <Multiplex mod={mod} />
                    <ReviewRank mod={mod} />
                </FlexWrap>
            </Section>
        </ Container>
    )
};

export default Content;