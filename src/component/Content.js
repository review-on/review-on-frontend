import React, { useEffect } from 'react';
import styled from 'styled-components';
import PopularPosts from './PopularPosts';
import Multiplex from './Multiplex';
import ReviewRank from './ReviewRank';

import blackBackground from '../images/aosBackground.png';
import whiteBackground from '../images/aosBackground2.png';

const Container = styled.div`
    width: calc(100vw - 250px);
    background-color: ${(props) => (props.mod === "dark" ? "#000" : "#fff")};

    position: relative;
    left: 250px; top: 70px; 

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

const BackgroundImage = styled.div`
    width: 100%;
    height: 850px;

    background-image: url(${props => props.mod === 'dark' ? blackBackground : whiteBackground});
    background-position: ${props => props.mod === 'dark' ? "center -100px" : ""};
    background-repeat: no-repeat;
    background-size: cover;
`

const Content = (props) => {
    const mod = props.mod;
    const status = props.status;

    useEffect(() => {
        let visual = document.querySelector(".visual");
        visual.classList.remove("type_open", "type_close");
        visual.classList.add(`type_${status}`);
    });

    return (
        <Container mod={mod} className="visual">
            <BackgroundImage mod={mod} />
            <div className="content-filter"></div>
            <div className="background-text bold fs-9">
                <span>AOS 세계로</span><br />
                <span>탐험을 떠나자</span>
            </div>
            <div className="content">
                <PopularPosts />
                <div className="row pt-5 mt-4">
                    <Multiplex />
                    <ReviewRank />
                </div>
            </div>
        </ Container>
    )
};

export default Content;