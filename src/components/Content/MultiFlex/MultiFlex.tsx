import React from 'react';
import * as S from './style';

import img1 from '../../../assets/Images/gameImage1.png';
import img2 from '../../../assets/Images/gameImage2.png';
import img3 from '../../../assets/Images/gameImage3.png';
import img4 from '../../../assets/Images/gameImage4.png';
import img5 from '../../../assets/Images/gameImage5.png';
import img6 from '../../../assets/Images/gameImage6.png';
import img7 from '../../../assets/Images/gameImage7.png';
import img8 from '../../../assets/Images/gameImage8.png'; 

const MultiFlex: React.FC = () => {
  return (
    <S.Multi>
      <S.MultiTitle>
        다양한 게임
      </S.MultiTitle>
      <S.FlexWrap>
        <S.Col3>
          <img src={img1} alt="titleImg" />
          <S.MultiText>난 2!</S.MultiText>
        </S.Col3>
        <S.Col3>
          <img src={img2} alt="titleImg" />
          <S.MultiText>난 2!</S.MultiText>
        </S.Col3>
        <S.Col3>
          <img src={img3} alt="titleImg" />
          <S.MultiText>안녕하세요</S.MultiText>
        </S.Col3>
        <S.Col3>
          <img src={img4} alt="titleImg" />
          <S.MultiText>도타3</S.MultiText>
        </S.Col3>
        <S.Col3>
          <img src={img5} alt="titleImg" />
          <S.MultiText>시공간</S.MultiText>
        </S.Col3>
        <S.Col3>
          <img src={img6} alt="titleImg" />
          <S.MultiText>빵야</S.MultiText>
        </S.Col3>
        <S.Col3>
          <img src={img7} alt="titleImg" />
          <S.MultiText>모바일 레전드</S.MultiText>
        </S.Col3>
        <S.Col3>
          <img src={img8} alt="titleImg" />
          <S.MultiText>와일드 리프트</S.MultiText>
        </S.Col3>
      </S.FlexWrap>
    </S.Multi>
  );
};

export default MultiFlex;
