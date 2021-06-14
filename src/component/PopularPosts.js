import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Popular = styled.div `
    padding-right: 3rem;
`

const TitleArea = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    color: #fff;
    font-weight: bold;

    padding: 0 1rem;
`

const FlexWrap = styled.div `
    font-weight: bold;

    display: flex;
    flex-wrap: wrap;
    
    margin-top: .5rem;
`

const Col3 = styled.div `
    max-width: 25%;

    flex: 0 0 25%;
    
    padding-right: 15px;
    padding-left: 15px;
`

const PopularImage = styled.div `
    height: 250px;
    background-color: #1E2025;

    position: relative;
    z-index: 200;

    border-radius: 20px;
`

const PopularArea = styled.div `
    padding: 0 1rem;

    & > p {
        color: ${(props) => (props.mod === "dark" ? "#fff" : "#000")};

        padding: .5rem 0 !important;
    }
`

const PopularContent = styled.div `
    font-size: .5em;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Flex = styled.div `
    display: flex;

    & > p {
        margin-left: 1.5em;
    }

    & span {
        font-size: 2em;
        color: ${(props) => (props.mod === "dark" ? "#fff" : "#000")};
    }
`

const ProfileImage = styled.div `
    width: 30px;
    height: 30px;
    background-color: #fff;

    border-radius: 50%;
`

const SubmitBtn = styled.div `
    width: 50px;
    height: 25px;
    background-color: #fff;

    color: #333;
    text-align: center;
    line-height: 25px;
    font-size: 1.4em;
    
    margin-top: 0.5em;

    border-radius: 20px;
    cursor: pointer;
`

const PopularPosts = (props) => {
    const mod = props.mod;

    return(
        <Popular>
            <TitleArea>
                <h5>추천하는 글</h5>
                <Link to="/b">더보기</Link>
            </TitleArea>
            <FlexWrap>
                <Col3>
                    <PopularImage />
                    <PopularArea mod={mod}>
                        <p>안녕하세요</p>
                        <PopularContent>
                            <Flex mod={mod}>
                                <ProfileImage></ProfileImage>
                                <p><span>황성철</span><br/>집가고싶다</p>
                            </Flex>
                            <SubmitBtn>구독</SubmitBtn>
                        </PopularContent>
                    </PopularArea>
                </Col3>
                <Col3>
                    <PopularImage />
                    <PopularArea mod={mod}>
                        <p>안녕하세요</p>
                        <PopularContent>
                            <Flex mod={mod}>
                                <ProfileImage></ProfileImage>
                                <p><span>김은아</span><br/>진짜 집 가 고 싶 다</p>
                            </Flex>
                            <SubmitBtn>구독</SubmitBtn>
                        </PopularContent>
                    </PopularArea>
                </Col3>
                <Col3>
                    <PopularImage />
                    <PopularArea mod={mod}>
                        <p>안녕하세요</p>
                        <PopularContent>
                            <Flex mod={mod}>
                                <ProfileImage></ProfileImage>
                                <p><span>황성철</span><br/>집가고싶다</p>
                            </Flex>
                            <SubmitBtn>구독</SubmitBtn>
                        </PopularContent>
                    </PopularArea>
                </Col3>
                <Col3>
                    <PopularImage />
                    <PopularArea mod={mod}>
                        <p>안녕하세요</p>
                        <PopularContent>
                            <Flex mod={mod}>
                                <ProfileImage></ProfileImage>
                                <p><span>김은아</span><br/>집가고싶다</p>
                            </Flex>
                            <SubmitBtn>구독</SubmitBtn>
                        </PopularContent>
                    </PopularArea>
                </Col3>
            </FlexWrap>
        </Popular>
    )
};

export default PopularPosts;