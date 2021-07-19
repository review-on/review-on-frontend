import styled from 'styled-components';

export const ReviewRank = styled.div`
  max-width: 25%;

  font-weight: bold;

  flex: 0 0 25%;
`

export const ReviewItem = styled.div`
  display: flex;
  align-items: center;
  

  & > img {
      width: 40px;
      height: 40px;

      border-radius: 50%;
      margin: 10px 20px;
  }

  & > span {
    color: ${props => props.theme.colors.textColor};
  }
`

export const ReviewRankContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h5 {
    color: ${props => props.theme.colors.textColor};
  }

  & span {
    color: ${props => props.theme.colors.textColor};
  }
`