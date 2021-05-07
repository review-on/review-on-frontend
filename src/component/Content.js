import React, { useEffect, useState } from 'react';
import DarkModeBackground from '../images/aosBackground.png';
import WhiteModeBackground from '../images/aosBackground2.png';
import '../style/content.css'
import PopularPosts from './PopularPosts';
import Multiplex from './Multiplex';
import ReviewRank from './ReviewRank';

const Content = (props) => {
    const mod = props.mod; 
    const status = props.status;
    
    useEffect(() => {
        let visual = document.querySelector(".visual");
        visual.classList.remove("type_open", "type_close");
        visual.classList.add(`type_${status}`);
    });
    
    return(
        <div className={mod === "dark" ? "dark visual" : "white visual"}>
            <img src={mod === "dark" ? DarkModeBackground : WhiteModeBackground } className="background-image" alt="background"/>
            <div className="content-filter"></div>
            <div className="background-text bold fs-9">
                <span>AOS 세계로</span><br/>
                <span>탐험을 떠나자</span>
            </div>
            <div className="content">
                <PopularPosts />
                <div className="row pt-5 mt-4">
                    <Multiplex mod={mod}/>
                    <ReviewRank mod={mod}/>
                </div>
            </div>
        </div>
    )
};

export default Content;