import React, { useEffect, useState } from 'react';
import Background from '../images/aosBackground.png';
import '../style/content.css'

const Content = (props) => {
    const mod = props.mod; 
    const status = props.status;
    
    useEffect(() => {
        let content = document.querySelector(".content");
        content.classList.remove("type_open", "type_close");
        content.classList.add(`type_${status}`);
    });
    
    return(
        <div className={mod === "dark" ? "dark content" : "white content"}>
            <img src={Background} className="background-image" alt="background"/>
            <div className="background-text bold fs-9">
                <span>AOS 세계로</span><br/>
                <span>탐험을 떠나자</span>
            </div>
            .
        </div>
    )
};

export default Content;