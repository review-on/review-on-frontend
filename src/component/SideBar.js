import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import '../style/sidebar.css'

const SideBar = (props) => {
    const [select, setSelect] = useState("home");
    const mod = props.mod; 
    const status = props.status; 
    
    useEffect(() => {
        let aside = document.querySelector("aside");
        status === "open" ? aside.style.left = "0" : aside.style.left = "-250px";

        document.querySelectorAll(".nav-item").forEach(navItem => {
            navItem.classList.remove("filled_navItem");
            navItem.classList.remove("border_navItem");
            navItem.style.marginBottom = "0";
        })
        let navItem = document.querySelector(`.${select}`);
        mod === "dark" ? navItem.classList.add("filled_navItem") : navItem.classList.add("border_navItem");

        let sub = document.querySelector(`.${select} .sub`);
        navItem.style.marginBottom = `${sub.childNodes.length * 35}px`; 

        document.querySelectorAll("i").forEach(icon => {
            icon.style.transform = "rotate(0)";
        })
        let angle = document.querySelector(`.${select} > i`);
        angle.style.transform = "rotate(90deg)";
    });
    
    return(
        <aside className={mod === "dark" ? "dark" : "white"}>
            <nav>
                <div className="nav-item home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 34.808 31.004">
                        <path id="패스_88" data-name="패스 88" d="M24.3,7a5.507,5.507,0,0,0-6.494,0l-9.642,7.5a1.216,1.216,0,0,0-.454.684,37.627,37.627,0,0,0-.252,15.468l.235,1.218h6.2v-10.5a1.439,1.439,0,0,1,1.563-1.268H26.648a1.439,1.439,0,0,1,1.563,1.268v10.5h6.2l.234-1.218A37.623,37.623,0,0,0,34.4,15.19a1.215,1.215,0,0,0-.454-.684ZM15.642,5.173a9.177,9.177,0,0,1,10.822,0l9.642,7.5a3.653,3.653,0,0,1,1.365,2.057,39.69,39.69,0,0,1,.266,16.316l-.377,1.957a1.967,1.967,0,0,1-2.025,1.406H26.648a1.439,1.439,0,0,1-1.563-1.268v-10.5H17.022v10.5a1.439,1.439,0,0,1-1.563,1.268H6.771a1.967,1.967,0,0,1-2.025-1.406l-.377-1.957a39.691,39.691,0,0,1,.266-16.316A3.654,3.654,0,0,1,6,12.676Z" transform="translate(-3.649 -3.408)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"} fill-rule="evenodd"/>
                    </svg>
                    <a href="/">홈</a>
                    <i className="sub"></i>
                </div>
                <div className="nav-item game" onClick={() => select === "game" ? setSelect("home") : setSelect("game")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 33.405 30.897">
                        <g id="그룹_25" data-name="그룹 25" transform="translate(0)">
                            <path id="패스_82" data-name="패스 82" d="M9.992,7.25A1.273,1.273,0,0,1,11.285,8.5V10.59h2.155a1.253,1.253,0,1,1,0,2.505H11.285v2.088a1.294,1.294,0,0,1-2.587,0V13.1H6.543a1.253,1.253,0,1,1,0-2.505H8.7V8.5A1.273,1.273,0,0,1,9.992,7.25Z" transform="translate(-0.187 1.101)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"}/>
                            <path id="패스_83" data-name="패스 83" d="M18.449,12.42a1.725,1.725,0,0,0-3.449,0v.418a1.725,1.725,0,0,0,3.449,0Z" transform="translate(6.876 3.446)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"}/>
                            <path id="패스_84" data-name="패스 84" d="M16.724,7a1.7,1.7,0,0,1,1.724,1.67v.418a1.725,1.725,0,0,1-3.449,0V8.67A1.7,1.7,0,0,1,16.724,7Z" transform="translate(6.876 0.933)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"}/>
                            <path id="패스_85" data-name="패스 85" d="M20.63,10.67a1.7,1.7,0,0,1-1.724,1.67h-.431a1.671,1.671,0,1,1,0-3.34h.431A1.7,1.7,0,0,1,20.63,10.67Z" transform="translate(8.144 2.273)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"}/>
                            <path id="패스_86" data-name="패스 86" d="M15.155,12.34a1.671,1.671,0,1,0,0-3.34h-.431a1.671,1.671,0,1,0,0,3.34Z" transform="translate(5.427 2.273)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"}/>
                            <path id="패스_87" data-name="패스 87" d="M20.31,3.5a1.294,1.294,0,0,0-2.587,0V5.986q-3.722.049-7.436.382l-.572.051a7.972,7.972,0,0,0-7.37,7.7l-.021,1.192A69.514,69.514,0,0,0,3.483,29.217a4.89,4.89,0,0,0,4.853,3.93h.381a5.4,5.4,0,0,0,4.924-3.1l1.829-3.994a3.932,3.932,0,0,1,7.093,0l1.829,3.994a5.4,5.4,0,0,0,4.924,3.1H29.7a4.89,4.89,0,0,0,4.853-3.93,69.524,69.524,0,0,0,1.158-13.908l-.021-1.192a7.972,7.972,0,0,0-7.37-7.7l-.572-.051q-3.711-.333-7.436-.382Zm-9.784,5.36a95.034,95.034,0,0,1,16.981,0l.572.051A5.432,5.432,0,0,1,33.1,14.16l.021,1.192A67.081,67.081,0,0,1,32,28.774,2.325,2.325,0,0,1,29.7,30.642h-.381a2.805,2.805,0,0,1-2.56-1.612l-1.829-3.994a6.554,6.554,0,0,0-11.822,0L11.277,29.03a2.805,2.805,0,0,1-2.56,1.612H8.336a2.325,2.325,0,0,1-2.307-1.869A67.085,67.085,0,0,1,4.911,15.351l.021-1.192A5.433,5.433,0,0,1,9.954,8.914Z" transform="translate(-2.314 -2.25)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"} fill-rule="evenodd"/>
                        </g>
                    </svg>

                    <a href="/">게임</a>
                    <i className="fa fa-angle-right"></i>
                    <div className="sub">
                        <a href="/">RPG</a>
                        <a href="/">FPS</a>
                        <a href="/">AOS</a>
                    </div>
                </div>
                <div className="nav-item movie" onClick={() => select === "movie" ? setSelect("home") : setSelect("movie")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 33.405 30.897">
                        <g id="그룹_25" data-name="그룹 25" transform="translate(0)">
                            <path id="패스_82" data-name="패스 82" d="M9.992,7.25A1.273,1.273,0,0,1,11.285,8.5V10.59h2.155a1.253,1.253,0,1,1,0,2.505H11.285v2.088a1.294,1.294,0,0,1-2.587,0V13.1H6.543a1.253,1.253,0,1,1,0-2.505H8.7V8.5A1.273,1.273,0,0,1,9.992,7.25Z" transform="translate(-0.187 1.101)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"}/>
                            <path id="패스_83" data-name="패스 83" d="M18.449,12.42a1.725,1.725,0,0,0-3.449,0v.418a1.725,1.725,0,0,0,3.449,0Z" transform="translate(6.876 3.446)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"}/>
                            <path id="패스_84" data-name="패스 84" d="M16.724,7a1.7,1.7,0,0,1,1.724,1.67v.418a1.725,1.725,0,0,1-3.449,0V8.67A1.7,1.7,0,0,1,16.724,7Z" transform="translate(6.876 0.933)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"}/>
                            <path id="패스_85" data-name="패스 85" d="M20.63,10.67a1.7,1.7,0,0,1-1.724,1.67h-.431a1.671,1.671,0,1,1,0-3.34h.431A1.7,1.7,0,0,1,20.63,10.67Z" transform="translate(8.144 2.273)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"}/>
                            <path id="패스_86" data-name="패스 86" d="M15.155,12.34a1.671,1.671,0,1,0,0-3.34h-.431a1.671,1.671,0,1,0,0,3.34Z" transform="translate(5.427 2.273)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"}/>
                            <path id="패스_87" data-name="패스 87" d="M20.31,3.5a1.294,1.294,0,0,0-2.587,0V5.986q-3.722.049-7.436.382l-.572.051a7.972,7.972,0,0,0-7.37,7.7l-.021,1.192A69.514,69.514,0,0,0,3.483,29.217a4.89,4.89,0,0,0,4.853,3.93h.381a5.4,5.4,0,0,0,4.924-3.1l1.829-3.994a3.932,3.932,0,0,1,7.093,0l1.829,3.994a5.4,5.4,0,0,0,4.924,3.1H29.7a4.89,4.89,0,0,0,4.853-3.93,69.524,69.524,0,0,0,1.158-13.908l-.021-1.192a7.972,7.972,0,0,0-7.37-7.7l-.572-.051q-3.711-.333-7.436-.382Zm-9.784,5.36a95.034,95.034,0,0,1,16.981,0l.572.051A5.432,5.432,0,0,1,33.1,14.16l.021,1.192A67.081,67.081,0,0,1,32,28.774,2.325,2.325,0,0,1,29.7,30.642h-.381a2.805,2.805,0,0,1-2.56-1.612l-1.829-3.994a6.554,6.554,0,0,0-11.822,0L11.277,29.03a2.805,2.805,0,0,1-2.56,1.612H8.336a2.325,2.325,0,0,1-2.307-1.869A67.085,67.085,0,0,1,4.911,15.351l.021-1.192A5.433,5.433,0,0,1,9.954,8.914Z" transform="translate(-2.314 -2.25)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"} fill-rule="evenodd"/>
                        </g>
                    </svg>

                    <a href="/">영화</a>
                    <i className="fa fa-angle-right"></i>
                    <div className="sub">
                        <a href="/">RPG</a>
                        <a href="/">FPS</a>
                        <a href="/">AOS</a>
                    </div>
                </div>
                <div className="nav-item book" onClick={() => select === "book" ? setSelect("home") : setSelect("book")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 33.405 30.897">
                        <g id="그룹_25" data-name="그룹 25" transform="translate(0)">
                            <path id="패스_82" data-name="패스 82" d="M9.992,7.25A1.273,1.273,0,0,1,11.285,8.5V10.59h2.155a1.253,1.253,0,1,1,0,2.505H11.285v2.088a1.294,1.294,0,0,1-2.587,0V13.1H6.543a1.253,1.253,0,1,1,0-2.505H8.7V8.5A1.273,1.273,0,0,1,9.992,7.25Z" transform="translate(-0.187 1.101)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"}/>
                            <path id="패스_83" data-name="패스 83" d="M18.449,12.42a1.725,1.725,0,0,0-3.449,0v.418a1.725,1.725,0,0,0,3.449,0Z" transform="translate(6.876 3.446)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"}/>
                            <path id="패스_84" data-name="패스 84" d="M16.724,7a1.7,1.7,0,0,1,1.724,1.67v.418a1.725,1.725,0,0,1-3.449,0V8.67A1.7,1.7,0,0,1,16.724,7Z" transform="translate(6.876 0.933)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"}/>
                            <path id="패스_85" data-name="패스 85" d="M20.63,10.67a1.7,1.7,0,0,1-1.724,1.67h-.431a1.671,1.671,0,1,1,0-3.34h.431A1.7,1.7,0,0,1,20.63,10.67Z" transform="translate(8.144 2.273)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"}/>
                            <path id="패스_86" data-name="패스 86" d="M15.155,12.34a1.671,1.671,0,1,0,0-3.34h-.431a1.671,1.671,0,1,0,0,3.34Z" transform="translate(5.427 2.273)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"}/>
                            <path id="패스_87" data-name="패스 87" d="M20.31,3.5a1.294,1.294,0,0,0-2.587,0V5.986q-3.722.049-7.436.382l-.572.051a7.972,7.972,0,0,0-7.37,7.7l-.021,1.192A69.514,69.514,0,0,0,3.483,29.217a4.89,4.89,0,0,0,4.853,3.93h.381a5.4,5.4,0,0,0,4.924-3.1l1.829-3.994a3.932,3.932,0,0,1,7.093,0l1.829,3.994a5.4,5.4,0,0,0,4.924,3.1H29.7a4.89,4.89,0,0,0,4.853-3.93,69.524,69.524,0,0,0,1.158-13.908l-.021-1.192a7.972,7.972,0,0,0-7.37-7.7l-.572-.051q-3.711-.333-7.436-.382Zm-9.784,5.36a95.034,95.034,0,0,1,16.981,0l.572.051A5.432,5.432,0,0,1,33.1,14.16l.021,1.192A67.081,67.081,0,0,1,32,28.774,2.325,2.325,0,0,1,29.7,30.642h-.381a2.805,2.805,0,0,1-2.56-1.612l-1.829-3.994a6.554,6.554,0,0,0-11.822,0L11.277,29.03a2.805,2.805,0,0,1-2.56,1.612H8.336a2.325,2.325,0,0,1-2.307-1.869A67.085,67.085,0,0,1,4.911,15.351l.021-1.192A5.433,5.433,0,0,1,9.954,8.914Z" transform="translate(-2.314 -2.25)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"} fill-rule="evenodd"/>
                        </g>
                    </svg>

                    <a href="/">독서</a>
                    <i className="fa fa-angle-right"></i>
                    <div className="sub">
                        <a href="/">RPG</a>
                        <a href="/">FPS</a>
                        <a href="/">AOS</a>
                    </div>
                </div>
                <div className="nav-item app" onClick={() => select === "app" ? setSelect("home") : setSelect("app")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 33.405 30.897">
                        <g id="그룹_25" data-name="그룹 25" transform="translate(0)">
                            <path id="패스_82" data-name="패스 82" d="M9.992,7.25A1.273,1.273,0,0,1,11.285,8.5V10.59h2.155a1.253,1.253,0,1,1,0,2.505H11.285v2.088a1.294,1.294,0,0,1-2.587,0V13.1H6.543a1.253,1.253,0,1,1,0-2.505H8.7V8.5A1.273,1.273,0,0,1,9.992,7.25Z" transform="translate(-0.187 1.101)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"}/>
                            <path id="패스_83" data-name="패스 83" d="M18.449,12.42a1.725,1.725,0,0,0-3.449,0v.418a1.725,1.725,0,0,0,3.449,0Z" transform="translate(6.876 3.446)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"}/>
                            <path id="패스_84" data-name="패스 84" d="M16.724,7a1.7,1.7,0,0,1,1.724,1.67v.418a1.725,1.725,0,0,1-3.449,0V8.67A1.7,1.7,0,0,1,16.724,7Z" transform="translate(6.876 0.933)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"}/>
                            <path id="패스_85" data-name="패스 85" d="M20.63,10.67a1.7,1.7,0,0,1-1.724,1.67h-.431a1.671,1.671,0,1,1,0-3.34h.431A1.7,1.7,0,0,1,20.63,10.67Z" transform="translate(8.144 2.273)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"}/>
                            <path id="패스_86" data-name="패스 86" d="M15.155,12.34a1.671,1.671,0,1,0,0-3.34h-.431a1.671,1.671,0,1,0,0,3.34Z" transform="translate(5.427 2.273)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"}/>
                            <path id="패스_87" data-name="패스 87" d="M20.31,3.5a1.294,1.294,0,0,0-2.587,0V5.986q-3.722.049-7.436.382l-.572.051a7.972,7.972,0,0,0-7.37,7.7l-.021,1.192A69.514,69.514,0,0,0,3.483,29.217a4.89,4.89,0,0,0,4.853,3.93h.381a5.4,5.4,0,0,0,4.924-3.1l1.829-3.994a3.932,3.932,0,0,1,7.093,0l1.829,3.994a5.4,5.4,0,0,0,4.924,3.1H29.7a4.89,4.89,0,0,0,4.853-3.93,69.524,69.524,0,0,0,1.158-13.908l-.021-1.192a7.972,7.972,0,0,0-7.37-7.7l-.572-.051q-3.711-.333-7.436-.382Zm-9.784,5.36a95.034,95.034,0,0,1,16.981,0l.572.051A5.432,5.432,0,0,1,33.1,14.16l.021,1.192A67.081,67.081,0,0,1,32,28.774,2.325,2.325,0,0,1,29.7,30.642h-.381a2.805,2.805,0,0,1-2.56-1.612l-1.829-3.994a6.554,6.554,0,0,0-11.822,0L11.277,29.03a2.805,2.805,0,0,1-2.56,1.612H8.336a2.325,2.325,0,0,1-2.307-1.869A67.085,67.085,0,0,1,4.911,15.351l.021-1.192A5.433,5.433,0,0,1,9.954,8.914Z" transform="translate(-2.314 -2.25)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"} fill-rule="evenodd"/>
                        </g>
                    </svg>

                    <a href="/">앱</a>
                    <i className="fa fa-angle-right"></i>
                    <div className="sub">
                        <a href="/">RPG</a>
                        <a href="/">FPS</a>
                        <a href="/">AOS</a>
                    </div>
                </div>
                <div className="nav-item webtoon" onClick={() => select === "webtoon" ? setSelect("home") : setSelect("webtoon")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 33.405 30.897">
                        <g id="그룹_25" data-name="그룹 25" transform="translate(0)">
                            <path id="패스_82" data-name="패스 82" d="M9.992,7.25A1.273,1.273,0,0,1,11.285,8.5V10.59h2.155a1.253,1.253,0,1,1,0,2.505H11.285v2.088a1.294,1.294,0,0,1-2.587,0V13.1H6.543a1.253,1.253,0,1,1,0-2.505H8.7V8.5A1.273,1.273,0,0,1,9.992,7.25Z" transform="translate(-0.187 1.101)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"}/>
                            <path id="패스_83" data-name="패스 83" d="M18.449,12.42a1.725,1.725,0,0,0-3.449,0v.418a1.725,1.725,0,0,0,3.449,0Z" transform="translate(6.876 3.446)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"}/>
                            <path id="패스_84" data-name="패스 84" d="M16.724,7a1.7,1.7,0,0,1,1.724,1.67v.418a1.725,1.725,0,0,1-3.449,0V8.67A1.7,1.7,0,0,1,16.724,7Z" transform="translate(6.876 0.933)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"}/>
                            <path id="패스_85" data-name="패스 85" d="M20.63,10.67a1.7,1.7,0,0,1-1.724,1.67h-.431a1.671,1.671,0,1,1,0-3.34h.431A1.7,1.7,0,0,1,20.63,10.67Z" transform="translate(8.144 2.273)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"}/>
                            <path id="패스_86" data-name="패스 86" d="M15.155,12.34a1.671,1.671,0,1,0,0-3.34h-.431a1.671,1.671,0,1,0,0,3.34Z" transform="translate(5.427 2.273)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"}/>
                            <path id="패스_87" data-name="패스 87" d="M20.31,3.5a1.294,1.294,0,0,0-2.587,0V5.986q-3.722.049-7.436.382l-.572.051a7.972,7.972,0,0,0-7.37,7.7l-.021,1.192A69.514,69.514,0,0,0,3.483,29.217a4.89,4.89,0,0,0,4.853,3.93h.381a5.4,5.4,0,0,0,4.924-3.1l1.829-3.994a3.932,3.932,0,0,1,7.093,0l1.829,3.994a5.4,5.4,0,0,0,4.924,3.1H29.7a4.89,4.89,0,0,0,4.853-3.93,69.524,69.524,0,0,0,1.158-13.908l-.021-1.192a7.972,7.972,0,0,0-7.37-7.7l-.572-.051q-3.711-.333-7.436-.382Zm-9.784,5.36a95.034,95.034,0,0,1,16.981,0l.572.051A5.432,5.432,0,0,1,33.1,14.16l.021,1.192A67.081,67.081,0,0,1,32,28.774,2.325,2.325,0,0,1,29.7,30.642h-.381a2.805,2.805,0,0,1-2.56-1.612l-1.829-3.994a6.554,6.554,0,0,0-11.822,0L11.277,29.03a2.805,2.805,0,0,1-2.56,1.612H8.336a2.325,2.325,0,0,1-2.307-1.869A67.085,67.085,0,0,1,4.911,15.351l.021-1.192A5.433,5.433,0,0,1,9.954,8.914Z" transform="translate(-2.314 -2.25)" fill={mod === "dark" ? "#d8d8d8" : "#1C1C1C"} fill-rule="evenodd"/>
                        </g>
                    </svg>

                    <a href="/">웹툰</a>
                    <i className="fa fa-angle-right"></i>
                    <div className="sub">
                        <a href="/">RPG</a>
                        <a href="/">FPS</a>
                        <a href="/">AOS</a>
                    </div>
                </div>
            </nav>
        </aside>
    )
};

export default SideBar;