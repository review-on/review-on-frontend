import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import '../style/header.css';

const Header = (props) => {
    const mod = props.mod;
    
    const changeMod = () => {
        props.changeMod();
    }

    const moveSideBar = e => {
        props.moveSideBar();
    }

    useEffect(() => {
    });
    
    return(
        <header className={ mod === "dark" ? "flex-between dark" : "flex-between white"}>
            <div onClick={moveSideBar} className={ mod === "dark" ? "dark_hamburger hamburger" : "white_hamburger hamburger"}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="search-form">
                <svg xmlns="http://www.w3.org/2000/svg" width="17.399" height="17.399" viewBox="0 0 17.399 17.399">
                    <path id="패스_13" data-name="패스 13" d="M14.385,15.446a6.75,6.75,0,1,1,1.061-1.061L20.6,19.541A.75.75,0,1,1,19.541,20.6ZM6.459,13.884a5.25,5.25,0,1,1,7.429,0l0,0,0,0A5.25,5.25,0,0,1,6.459,13.884Z" transform="translate(-3.422 -3.422)" fill="#8d8d8d" fill-rule="evenodd"/>
                </svg>      
                 <input className={mod === "dark" ? "dark_search search dark" : "white_search search white"} type="text" placeholder="검색어를 입력해주세요"/>
            </div>
            <div className="utility flex-center">
                <div className="mod_btn flex-center" onClick={changeMod}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21.5" height="21.5" viewBox="0 0 21.5 21.5">
                        <g id="그룹_59" data-name="그룹 59" transform="translate(-1.25 -1.25)">
                            <path id="패스_200" data-name="패스 200" d="M12,1.25a.75.75,0,0,1,.75.75V3a.75.75,0,0,1-1.5,0V2A.75.75,0,0,1,12,1.25Z" fill="#fff"/>
                            <path id="패스_201" data-name="패스 201" d="M6.25,12A5.75,5.75,0,1,1,12,17.75,5.75,5.75,0,0,1,6.25,12ZM12,7.75A4.25,4.25,0,1,0,16.25,12,4.25,4.25,0,0,0,12,7.75Z" fill="#fff" fill-rule="evenodd"/>
                            <path id="패스_202" data-name="패스 202" d="M5.459,4.4A.75.75,0,0,0,4.4,5.459l.707.707A.75.75,0,1,0,6.166,5.106Z" fill="#fff"/>
                            <path id="패스_203" data-name="패스 203" d="M22.75,12a.75.75,0,0,1-.75.75H21a.75.75,0,0,1,0-1.5h1A.75.75,0,0,1,22.75,12Z" fill="#fff"/>
                            <path id="패스_204" data-name="패스 204" d="M19.6,5.459A.75.75,0,0,0,18.541,4.4l-.707.707a.75.75,0,0,0,1.061,1.061Z" fill="#fff"/>
                            <path id="패스_205" data-name="패스 205" d="M12,20.25a.75.75,0,0,1,.75.75v1a.75.75,0,0,1-1.5,0V21A.75.75,0,0,1,12,20.25Z" fill="#fff"/>
                            <path id="패스_206" data-name="패스 206" d="M18.894,17.834a.75.75,0,0,0-1.061,1.061l.707.707A.75.75,0,1,0,19.6,18.541Z" fill="#fff"/>
                            <path id="패스_207" data-name="패스 207" d="M3.75,12a.75.75,0,0,1-.75.75H2a.75.75,0,0,1,0-1.5H3A.75.75,0,0,1,3.75,12Z" fill="#fff"/>
                            <path id="패스_208" data-name="패스 208" d="M6.166,18.894a.75.75,0,0,0-1.061-1.061l-.707.707A.75.75,0,0,0,5.459,19.6Z" fill="#fff"/>
                        </g>
                    </svg>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="25" height="25" viewBox="0 0 33 33">
                    <defs>
                        <clipPath id="clip-path">
                        <rect id="사각형_98" data-name="사각형 98" width="33" height="33" fill="#fff"/>
                        </clipPath>
                    </defs>
                    <g id="그룹_28" data-name="그룹 28" clip-path="url(#clip-path)">
                        <path id="패스_96" data-name="패스 96" d="M30.624,18.772,28.013,9.379a12.808,12.808,0,0,0-24.842.651L1.15,19.12a6.871,6.871,0,0,0,6.707,8.361H9.387a6.87,6.87,0,0,0,13.466,0H24a6.87,6.87,0,0,0,6.62-8.709ZM16.12,30.229a4.122,4.122,0,0,1-3.869-2.748H19.99a4.122,4.122,0,0,1-3.869,2.748ZM27.286,23.1A4.091,4.091,0,0,1,24,24.733H7.856a4.122,4.122,0,0,1-4.023-5.017l2.02-9.091a10.06,10.06,0,0,1,19.512-.511l2.611,9.393a4.091,4.091,0,0,1-.69,3.6Z" transform="translate(0.369 0.001)" fill={mod === "dark" ? "#fff" : "#1c1c1c"}/>
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 33.237 26.715">
                    <path id="패스_106" data-name="패스 106" d="M2.952,11.356a59.4,59.4,0,0,0,.216,14.509A5.555,5.555,0,0,0,8.18,30.573l2.673.232a96.7,96.7,0,0,0,16.753,0l2.673-.232a5.554,5.554,0,0,0,5.011-4.708,59.4,59.4,0,0,0,.216-14.509q-.1-.8-.216-1.6a5.554,5.554,0,0,0-5.011-4.708l-2.673-.232a96.724,96.724,0,0,0-16.753,0L8.18,5.049A5.554,5.554,0,0,0,3.168,9.757Q3.048,10.555,2.952,11.356Zm8.131-3.895a94.066,94.066,0,0,1,16.293,0l2.673.232a2.9,2.9,0,0,1,2.616,2.457q.031.206.06.413l-9.843,5.468a7.522,7.522,0,0,1-7.306,0L5.733,10.564q.029-.207.06-.413A2.9,2.9,0,0,1,8.41,7.694ZM33.05,13.421a51.5,51.5,0,0,1-.385,12.049,2.9,2.9,0,0,1-2.616,2.457l-2.673.232a94.078,94.078,0,0,1-16.293,0L8.41,27.928A2.9,2.9,0,0,1,5.794,25.47a51.507,51.507,0,0,1-.385-12.049l8.878,4.932a10.177,10.177,0,0,0,9.885,0Z" transform="translate(-2.611 -4.453)" fill={mod === "dark" ? "#fff" : "#1c1c1c"} fill-rule="evenodd"/>
                </svg>
                <div className="profile"></div>
            </div>
        </header>
       
    ) 
};

export default Header;
