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
    const hits = ["리그오브레전드", "난투", "안녕하세요", "도타3", "히어로즈 오브 더 스톤", "빵야", "모바일 레전드", "와일드 리프트"];
    const hitsImg = [img1, img2, img3, img4, img5, img6, img7, img8];
    const up = ["리그오브레전드", "도타3", "히어로즈 오브 더 스톤", "모바일 레전드", "와일드 리프트", "난투", "빵야",  "안녕하세요"];
    const upImg = [img1, img4, img5, img7, img8, img2, img6, img3];

    const [sort, setSort] = useState(hits);
    
    const listItem = sort.map((name, i) =>
        <div className="review-item d-flex align-items-center">
            <span className="fs-3">{i + 1}</span>
            <img src={hitsImg[i]} alt="itemImage"/>
            <span>{name}</span>
        </div>
    );

    return(
        <div className="reviewRank col-lg-3">
            <div className="flex-between px-3">
                <h5 className="bold">리뷰 순위</h5>
                <div></div>
            </div>            
            <div className="review-background mt-3">
                {listItem}
            </div>
        </div>
    )
};

export default ReviewRank;