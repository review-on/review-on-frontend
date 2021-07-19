import styled from 'styled-components';

export const Multi = styled.div `
    width: 850px; 
    max-width: 66.666667%;


    flex: 0 0 66.666667%;

    margin-right: 80px; 
`

export const MultiTitle = styled.h2 `
    color: ${props => props.theme.colors.textColor};
    font-weight: bold; 
`

export const MultiText = styled.p `
    color: ${props => props.theme.colors.textColor};
    font-weight: bold; 
`

export const FlexWrap = styled.div `
    display: flex;
    flex-wrap: wrap;

    margin-top: 1.5rem;
`

export const Col3 = styled.div `
    max-width: 25%;

    flex: 0 0 25%;

    & > p {
        font-size: 1.2em;
        font-weight: bold;

        padding: 1rem 0;
    }
`