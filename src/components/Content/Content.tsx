import React from 'react';
import PopularPosts from "./PopularPosts/PopularPosts";
import MultiFlex from "./MultiFlex/MultiFlex";
import ReviewRank from "./ReviewRank/ReviewRank";
import * as S from './style';
import aosBackground1 from "../../assets/Images/aosBackground.png";
import aosBackground2 from "../../assets/Images/aosBackground2.png";

interface Props {
  isOpen: string;
  type: string;
}

const Content: React.FC<Props> = (props) => {
  const image: Record<string, string[]> = {
    aos: [aosBackground1, aosBackground2]
  }
  return (
      <S.Content isOpen={props.isOpen} >
          <S.BackgroundImage image={image[props.type]} />
          <S.BackgroundText>
            <span>AOS 세계로</span><br />
            <span>탐험을 떠나자</span>
          </S.BackgroundText>
          <S.Section>
            <PopularPosts />
            <S.FlexWrap>
              <MultiFlex />
              <ReviewRank />
            </S.FlexWrap>
          </S.Section>
      </S.Content>
  );
};

export default Content;
