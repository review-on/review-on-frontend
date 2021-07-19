import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const PopularPosts: React.FC = () => {

  return (
    <S.Popular>
      <S.TitleArea>
        <h2>추천하는 글</h2>
        <Link to="/b">더보기</Link>
      </S.TitleArea>
      <S.FlexWrap>
        <S.Col3>
          <S.PopularImage />
          <S.PopularArea>
            <p>안녕하세요</p>
            <S.PopularContent>
              <S.Flex>
                <S.ProfileImage></S.ProfileImage>
                <p><span>황성철</span><br />집가고싶다</p>
              </S.Flex>
              <S.SubmitBtn>구독</S.SubmitBtn>
            </S.PopularContent>
          </S.PopularArea>
        </S.Col3>
        <S.Col3>
          <S.PopularImage />
          <S.PopularArea>
            <p>안녕하세요</p>
            <S.PopularContent>
              <S.Flex>
                <S.ProfileImage></S.ProfileImage>
                <p><span>황성철</span><br />집가고싶다</p>
              </S.Flex>
              <S.SubmitBtn>구독</S.SubmitBtn>
            </S.PopularContent>
          </S.PopularArea>
        </S.Col3>
        <S.Col3>
          <S.PopularImage />
          <S.PopularArea>
            <p>안녕하세요</p>
            <S.PopularContent>
              <S.Flex>
                <S.ProfileImage></S.ProfileImage>
                <p><span>황성철</span><br />집가고싶다</p>
              </S.Flex>
              <S.SubmitBtn>구독</S.SubmitBtn>
            </S.PopularContent>
          </S.PopularArea>
        </S.Col3>
        <S.Col3>
          <S.PopularImage />
          <S.PopularArea>
            <p>안녕하세요</p>
            <S.PopularContent>
              <S.Flex>
                <S.ProfileImage></S.ProfileImage>
                <p><span>황성철</span><br />집가고싶다</p>
              </S.Flex>
              <S.SubmitBtn>구독</S.SubmitBtn>
            </S.PopularContent>
          </S.PopularArea>
        </S.Col3>
      </S.FlexWrap>
    </S.Popular>
  );
};

export default PopularPosts;
