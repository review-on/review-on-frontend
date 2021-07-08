import styled from 'styled-components';

export const Popular = styled.div`
  padding-right: 3rem;

  & * {
    transition: .5s;
  }
`

export const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  color: #fff;
  font-weight: bold;

  padding: 0 1rem;

  & > a { 
    color: #fff;
  }
`

export const FlexWrap = styled.div`
  font-weight: bold;

  display: flex;
  flex-wrap: wrap;
  
  margin-top: .5rem;
`

export const Col3 = styled.div`
  max-width: 25%;

  flex: 0 0 25%;
  
  padding-right: 15px;
  padding-left: 15px;
`

export const PopularImage = styled.div`
  height: 250px;
  background-color: #1E2025;

  position: relative;
  z-index: 200;

  border-radius: 20px;
`

export const PopularArea = styled.div`
  padding: 0 1rem;

  & > p {
    color: ${props => props.theme.colors.textColor};

    padding: .5rem 0 !important;
  }
`

export const PopularContent = styled.div`
  font-size: .5em;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Flex = styled.div`
  display: flex;

  & > p {
    color: ${props => props.theme.colors.textColor};

    margin-left: 1.5em;
  }

  & span {
    font-size: 2em;
    color: ${props => props.theme.colors.textColor};
  }
`

export const ProfileImage = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${props => props.theme.colors.textColor};

  border-radius: 50%;
`

export const SubmitBtn = styled.div`
  width: 50px;
  height: 25px;
  background-color: ${props => props.theme.colors.textColor};

  color: ${props => props.theme.colors.textColor};
  text-align: center;
  line-height: 25px;
  font-size: 1.4em;
  
  margin-top: 0.5em;

  border-radius: 20px;
  cursor: pointer;
`