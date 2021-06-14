import React from 'react';
import styled from 'styled-components';

import img1 from '../images/gameImage1.png';
import img2 from '../images/gameImage2.png';
import img3 from '../images/gameImage3.png';
import img4 from '../images/gameImage4.png';
import img5 from '../images/gameImage5.png';
import img6 from '../images/gameImage6.png';
import img7 from '../images/gameImage7.png';
import img8 from '../images/gameImage8.png';

const Multi = styled.div `
    width: 850px; 
    max-width: 66.666667%;

    
    flex: 0 0 66.666667%;

    margin-right: 80px; 

    & > h5, & p { 
        color: ${(props) => (props.mod === "dark" ? "#fff" : "#000")};
        font-weight: bold; 
    }
`

const FlexWrap = styled.div `
    display: flex;
    flex-wrap: wrap;
    
    margin-top: 1.5rem;
`

const Col3 = styled.div `
    max-width: 25%;

    flex: 0 0 25%;

    & > p {
        font-size: 1.2em;
        font-weight: bold;

        padding: 1rem 0;
    }
`

const Multiplex = (props) => {
    const mod = props.mod;
    const status = props.status;

    return(
        <Multi mod={mod}>
            <h5>다양한 게임</h5>
            <FlexWrap>
                <Col3>
                    <img src={img1} alt="titleImg"/>
                    <p>난 2!</p>
                </Col3>
                <Col3>
                    <img src={img2} alt="titleImg"/>
                    <p>난 2!</p>
                </Col3>
                <Col3>
                    <img src={img3} alt="titleImg"/>
                    <p>안녕하세요</p>
                </Col3>
                <Col3>
                    <img src={img4} alt="titleImg"/>
                    <p>도타3</p>
                </Col3>
                <Col3>
                    <img src={img5} alt="titleImg"/>
                    <p>시공간</p>
                </Col3>
                <Col3>
                    <img src={img6} alt="titleImg"/>
                    <p>빵야</p>
                </Col3>
                <Col3>
                    <img src={img7} alt="titleImg"/>
                    <p>모바일 레전드</p>
                </Col3>
                <Col3>
                    <img src={img8} alt="titleImg"/>
                    <p>와일드 리프트</p>
                </Col3>
            </FlexWrap>
        </Multi>
    )
};

export default Multiplex;