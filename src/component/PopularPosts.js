import React, { useEffect, useState } from 'react';
import '../style/content.css'

const PopularPosts = () => {
    return(
        <div className="popular pr-5">
            <div className="flex-between px-3">
                <h5 className="bold text-white">추천하는 글</h5>
                <a className="bold text-white" href="#">더보기</a>
            </div>
            <div className="row bold mt-2">
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
                            <div className="d-flex">
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