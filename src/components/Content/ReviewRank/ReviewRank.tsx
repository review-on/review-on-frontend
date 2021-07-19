import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

import img1 from '../../../assets/Images/gameImage1.png';
import img2 from '../../../assets/Images/gameImage2.png';
import img3 from '../../../assets/Images/gameImage3.png';
import img4 from '../../../assets/Images/gameImage4.png';
import img5 from '../../../assets/Images/gameImage5.png';
import img6 from '../../../assets/Images/gameImage6.png';
import img7 from '../../../assets/Images/gameImage7.png';
import img8 from '../../../assets/Images/gameImage8.png'; 

const ReviewRank: React.FC = () => {

  const hits = ["리그오브레전드", "난투", "안녕하세요", "도타3", "히어로즈 오브 더 스톤", "빵야", "모바일 레전드", "와일드 리프트"];
  const hitsImg = [img1, img2, img3, img4, img5, img6, img7, img8];
  const up = ["리그오브레전드", "도타3", "히어로즈 오브 더 스톤", "모바일 레전드", "와일드 리프트", "난투", "빵야",  "안녕하세요"];
  const upImg = [img1, img4, img5, img7, img8, img2, img6, img3];

  const [sort, setSort] = useState(hits);
  const [sortName, setSortName] = useState("hits");
  
  const listItem = sort.map((name, i) =>
    <S.ReviewItem>
        <span className="fs-3">{i + 1}</span>
        <img src={sortName === "hits" ? hitsImg[i] : upImg[i]} alt="itemImage"/>
        <span>{name}</span>
    </S.ReviewItem>
  );

  return (
    <S.ReviewRank>
      <S.ReviewRankContent>
          <h5 className="bold">리뷰 순위</h5>
          <div className="review-tag cursor">
              <span className={sortName === "hits" ? "px-1 fs-n3 review-sort" : "px-1 fs-n3"} onClick={() => { setSort(hits);  setSortName("hits") }}>조회수</span>
              <span className={sortName === "up" ? "px-1 fs-n3 review-sort" : "px-1 fs-n3"} onClick={() => { setSort(up);  setSortName("up") }}>좋아요</span>
          </div>    
      </S.ReviewRankContent>    
      <div className="review-background mt-3">
          {listItem}
      </div>
    </S.ReviewRank>
  );
};

export default ReviewRank;
