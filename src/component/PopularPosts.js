import React, { useEffect, useState } from 'react';
import '../style/content.css'

const PopularPosts = (props) => {
    const mod = props.mod; 
    console.log(mod); 
    
    return(
        <div className={ mod === "dark" ? "popular darkP" : "popular whiteP" }>
            <div className="flex-between px-3 fa-inverse">
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
                                <p className="ml-3"><span>김은아</span><br/>집가고싶다</p>
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
                            <div className="d-flex">00sd\p9 
                                <div className="profile-image"></div>
                                <p className="ml-3"><span>김은아</span><br/>집가고싶다</p>
                            </div>
                            <div className="submit mt-1">구독</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PopularPosts;