import React, { useEffect, useState } from 'react';
import img1 from '../images/gameImage1.png';
import img2 from '../images/gameImage2.png';
import img3 from '../images/gameImage3.png';
import img4 from '../images/gameImage4.png';
import img5 from '../images/gameImage5.png';
import img6 from '../images/gameImage6.png';
import img7 from '../images/gameImage7.png';
import img8 from '../images/gameImage8.png';

const Multiplex = () => {

    return(
        <div className="multi col-lg-8">
            <h5 className="bold">다양한 게임</h5>
            <div className="row mt-4">
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="gameTitleImg">
                        <img src={img1} alt="titleImg"/>
                    </div>
                    <div>
                        <p className="py-2 bold fs-2">리그오브레전드</p>
 
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="gameTitleImg">
                        <img src={img2} alt="titleImg"/>
                    </div>
                    <div>
                        <p className="py-2 bold fs-2">난 2!</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="gameTitleImg">
                        <img src={img3} alt="titleImg"/>
                    </div>
                    <div>
                        <p className="py-2 bold fs-2">안녕하세요</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="gameTitleImg">
                        <img src={img4} alt="titleImg"/>
                    </div>
                    <div>
                        <p className="py-2 bold fs-2">도타3</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="gameTitleImg">
                        <img src={img5} alt="titleImg"/>
                    </div>
                    <div>
                        <p className="py-2 bold fs-2">시공간</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="gameTitleImg">
                        <img src={img6} alt="titleImg"/>
                    </div>
                    <div>
                        <p className="py-2 bold fs-2">빵야</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="gameTitleImg">
                        <img src={img7} alt="titleImg"/>
                    </div>
                    <div>
                        <p className="py-2 bold fs-2">모바일 레전드</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="gameTitleImg">
                        <img src={img8} alt="titleImg"/>
                    </div>
                    <div>
                        <p className="py-2 bold fs-2">와일드 리프트</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Multiplex;