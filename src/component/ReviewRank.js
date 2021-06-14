import React, { useState } from 'react';
import styled from 'styled-components';

import img1 from '../images/gameImage1.png';
import img2 from '../images/gameImage2.png';
import img3 from '../images/gameImage3.png';
import img4 from '../images/gameImage4.png';
import img5 from '../images/gameImage5.png';
import img6 from '../images/gameImage6.png';
import img7 from '../images/gameImage7.png';
import img8 from '../images/gameImage8.png';

const ReviewItem = styled.div `
    display: flex;
    align-items: center;
    

    & > img {
        width: 40px;
        height: 40px;

        border-radius: 50%;
        margin: 10px 20px;
    }

    & > span {
        color: ${(props) => (props.mod === "dark" ? "#fff" : "#000")};
    }
`

const Col3 = styled.div `
    max-width: 25%;

    font-weight: bold;

    flex: 0 0 25%;
`

const ReviewRankContent = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > h5 {
        color: ${(props) => (props.mod === "dark" ? "#fff" : "#000")};
    }

    & span {
        color: ${(props) => (props.mod === "dark" ? "#fff" : "#000")};
    }
`

const ReviewRank = (props) => {
    const mod = props.mod;

    const hits = ["리그오브레전드", "난투", "안녕하세요", "도타3", "히어로즈 오브 더 스톤", "빵야", "모바일 레전드", "와일드 리프트"];
    const hitsImg = [img1, img2, img3, img4, img5, img6, img7, img8];
    const up = ["리그오브레전드", "도타3", "히어로즈 오브 더 스톤", "모바일 레전드", "와일드 리프트", "난투", "빵야",  "안녕하세요"];
    const upImg = [img1, img4, img5, img7, img8, img2, img6, img3];

    const [sort, setSort] = useState(hits);
    const [sortName, setSortName] = useState("hits");
    
    const listItem = sort.map((name, i) =>
        <ReviewItem mod={mod}>
            <span className="fs-3">{i + 1}</span>
            <img src={sortName === "hits" ? hitsImg[i] : upImg[i]} alt="itemImage"/>
            <span>{name}</span>
        </ReviewItem>
    );

    return(
        <Col3>
            <ReviewRankContent mod={mod}>
                <h5 className="bold">리뷰 순위</h5>
                <div className="review-tag cursor">
                    <span className={sortName === "hits" ? "px-1 fs-n3 review-sort" : "px-1 fs-n3"} onClick={() => { setSort(hits);  setSortName("hits") }}>조회수</span>
                    <span className={sortName === "up" ? "px-1 fs-n3 review-sort" : "px-1 fs-n3"} onClick={() => { setSort(up);  setSortName("up") }}>좋아요</span>
                </div>    
            </ReviewRankContent>    
            <div className="review-background mt-3">
                {listItem}
            </div>
        </Col3>
    )
};

export default ReviewRank;