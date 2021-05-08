import React, { useEffect, useState } from 'react';
import img1 from '../images/gameImage1.png';
import img2 from '../images/gameImage2.png';
import img3 from '../images/gameImage3.png';
import img4 from '../images/gameImage4.png';
import img5 from '../images/gameImage5.png';
import img6 from '../images/gameImage6.png';
import img7 from '../images/gameImage7.png';
import img8 from '../images/gameImage8.png';

const ReviewRank = () => {
    return(
        <div className="reviewRank col-lg-3">
            <div className="flex-between px-3">
                <h5 className="bold">리뷰 순위</h5>
            </div>            
            <div className="review-background mt-3">
                <div className="review-item d-flex align-items-center">
                    <span className="fs-3">1</span>
                    <img src={img1} alt="itemImage"/>
                    <span>리그오브레전드</span>
                </div>
                <div className="review-item d-flex align-items-center">
                    <span className="fs-3">2</span>
                    <img src={img2} alt="itemImage"/>
                    <span>난투</span>
                </div>
                <div className="review-item d-flex align-items-center">
                    <span className="fs-3">3</span>
                    <img src={img3} alt="itemImage"/>
                    <span>안녕하세요</span>
                </div>
                <div className="review-item d-flex align-items-center">
                    <span className="fs-3">4</span>
                    <img src={img4} alt="itemImage"/>
                    <span>도타3</span>
                </div>
                <div className="review-item d-flex align-items-center">
                    <span className="fs-3">5</span>
                    <img src={img5} alt="itemImage"/>
                    <span>히어로즈 오브 더 스톤</span>
                </div>
                <div className="review-item d-flex align-items-center">
                    <span className="fs-3">6</span>
                    <img src={img6} alt="itemImage"/>
                    <span>빵야</span>
                </div>
                <div className="review-item d-flex align-items-center">
                    <span className="fs-3">7</span>
                    <img src={img7} alt="itemImage"/>
                    <span>모바일 레전드</span>
                </div>
                <div className="review-item d-flex align-items-center">
                    <span className="fs-3">8</span>
                    <img src={img8} alt="itemImage"/>
                    <span>와일드 리프트</span>
                </div>

            </div>
        </div>
    )
};

export default ReviewRank;