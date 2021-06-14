import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PopularPosts from './PopularPosts';
import Multiplex from './Multiplex';
import ReviewRank from './ReviewRank';

const Container = styled.div `
    width: calc(100vw - 250px);
    background-color: ${(props) => (props.mod === "dark" ? "#1E2025" : "#fff")};

    position: relative;
    left: 250px; top: 70px; 

    ::before, ::after {
        width: 100%; 
        height: 200px;

        position: absolute;
        left: 0; top: 650px;
        z-index: 100;
        transition: opacity 1s ease-out !important;

        opacity: 0;
        content: '';
    }

    ::before {
        
    }
`

const BackgroundImage = styled.div `
    background-image: ${(props) => (props.mod === "dark" ? "url(/images/aosBackground.png)" : "url(/images/aosBackground2.png)")};
    background-position: center -100px;
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
    
    return(
        <Container>
            <BackgroundImage />
            <div className="content-filter"></div>
            <div className="background-text bold fs-9">
                <span>AOS 세계로</span><br/>
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