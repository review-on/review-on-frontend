import React, { useEffect, useState } from 'react';
import Background from '../images/aosBackground.png';
import '../style/content.css'

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
            <img src={Background} className="background-image" alt="background"/>
            <div className="content-filter"></div>
            <div className="background-text bold fs-9">
                <span>AOS 세계로</span><br/>
                <span>탐험을 떠나자</span>
            </div>
            <div className="content">
                <div className="popular">
                    <div className="flex-between px-3">
                        <h5 className="bold">추천하는 글</h5>
                        <a className="bold" href="#">더보기</a>
                    </div>
                    <div className="row mt-2">
                        <div className="col-lg-3">
                            <div className="box">
                                
                            </div>
                            <div className="px-2">
                                <p className="py-2">안녕하세요</p>
                                <div className="popular-content flex-between">
                                    <div className="d-flex">
                                        <div className="profile-image"></div>
                                        <p className="ml-3"><span>황성철</span><br/>집가고싶다</p>
                                    </div>
                                    <div className="submit mt-1">구독</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="box">
                                
                            </div>
                            <div className="px-2">
                                <p className="py-2">안녕하세요</p>
                                <div className="popular-content flex-between">
                                    <div className="d-flex">
                                        <div className="profile-image"></div>
                                        <p className="ml-3"><span>황성철</span><br/>집가고싶다</p>
                                    </div>
                                    <div className="submit mt-1">구독</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="box">
                                
                            </div>
                            <div className="px-2">
                                <p className="py-2">안녕하세요</p>
                                <div className="popular-content flex-between">
                                    <div className="d-flex">
                                        <div className="profile-image"></div>
                                        <p className="ml-3"><span>황성철</span><br/>집가고싶다</p>
                                    </div>
                                    <div className="submit mt-1">구독</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="box">
                                
                            </div>
                            <div className="px-2">
                                <p className="py-2">안녕하세요</p>
                                <div className="popular-content flex-between">
                                    <div className="d-flex">
                                        <div className="profile-image"></div>
                                        <p className="ml-3"><span>황성철</span><br/>집가고싶다</p>
                                    </div>
                                    <div className="submit mt-1">구독</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Content;