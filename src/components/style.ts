import styled, { css, keyframes } from 'styled-components'

export const LogoContainerBlock = styled.div `
    display: flex;
    flex-direction: column;
    padding: 2.5% 10% 0 10%;
    background-color: rgba(98, 115, 232, 0.1);
`

export const RowContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 5%
`

export const AroundRowContainer = styled(RowContainer) `
    justify-content: space-around;
`

export const StyledTopLogo = styled.img `
    width: 10rem;
    height: 3rem;
    object-fit: contain;
`

export const StyledLogo = styled.img `
    width: 20rem;
    height: 4rem;
    object-fit: contain;
`

export const StyledButton = styled.button `
    width: 13rem;
    height: 3.5rem;
    color: white;
    border-radius: 2rem;
    box-shadow: 1rem 1rem 3rem 0 rgba(67, 67, 67, 0.33);
    font-size: 1rem;
    background-color: #4756df;
`

export const ColumnContainer = styled.div `
    display: flex;
    flex-direction: column;
`

export const StyledSpan = styled.span `
    padding-bottom: 5%;
    width: 24rem;
    height: 2rem;
    font-family: NotoSansCJKkr;
    font-size: 1.2rem;
    font-weight: 300;
    color: #5161e3;
`

export const StyledSearchBar = styled.span `
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 24rem;
    height: 3.5rem;
    border-radius: 4rem;
    box-shadow: 0 1rem 4rem 0 rgba(71, 86, 223, 0.15);
    background-color: #ffffff;
`

export const StyledSearchInput = styled.input `
    width: 18rem;
    height: 2.5rem;
    font-size: 1rem;
    border: 0
`

export const StyledSearchImg = styled.img `
    width: 1.5rem;
    height: 1.5rem;
`

export const CardContainerDiv = styled.div `
    display: flex;
    padding: 2% 10% 7% 10%;
    background-color: #f9f9f9;
    justify-content: center;
`

export const CardAroundRowContainer = styled(AroundRowContainer) `
    justify-content: space-between;
    padding: 2% 0 0 0;
`

export const  CardRowContainer = styled(RowContainer) `
    padding-bottom: 0;
    align-items: center;
`

export const NoneStyledButton = styled.div `
    width: 13rem;
    height: 3.5rem;
`

export const CardContainer = styled(AroundRowContainer) `
    align-items: center;
    width: 80rem;
    height: max-content;
    padding: 1% 0% 1% 0%;
    margin-bottom: 0.5%;
    border-radius: 1rem;
    box-shadow: 0 1rem 1rem 0 rbga(0, 0, 0, 0.04);
    background-color: #ffffff;
`

export const JobColumnContainer = styled(ColumnContainer) `
    width: 30rem;
    justify-content: center;
`

export const JobSpan = styled.span `
    text-align: left;
    font-size: 1rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.25px;
    color: #1d1d1d;
`

export const PositionSpan = styled(JobSpan) `
    font-family: NotoSansCJKkr;
    font-size: 1.2rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.3px;
    color: #323232;
`

export const JobRowContainer = styled(RowContainer) `
    flex-wrap: wrap;
    justify-content: flex-start;
    padding : 0% 0% 0% 0%;
`

export const TagContainer = styled.div `
    width: 7rem;
    height: 1.25rem;
    margin: 1% 1% 0% 0%;
    border-radius: 17px;
    border: solid 1px #4756df;
    font-size: 0.9rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    color: #5b6ce7;
`

export const StyledCheckboxLabel = styled.span `
    width: 8rem;
    margin-left: 1%;
    font-family: NotoSansCJKkr;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    color: #252525;
`

const fadeIn = keyframes `
    from {
        height: 0%;
        opacity: 0;
    } to {
        height: 100%;
        opacity: 1;
    }
`

const fadeOut = keyframes `
    from {
        height: 100%;
        opacity: 1;
    } to {
        height: 0%;
        opacity: 0;
    }
`

export const StyledContentsContainer = styled(CardContainer) `
    height: max-content;
    white-space: pre-line;
    background-color: #f3f3f3;
    animation: ${fadeIn} 1s;
`

export const StyledNoneContentsContainer = styled(CardContainer) `
    height: 0;
    white-space: pre-line;
    background-color: #f3f3f3;
    animation: ${fadeOut} .3s;
    // display: none;
`

export const StyledContents = styled.div `
    text-align: left;
    width: 45rem;
    margin-bottom: 1%;
    font-family: NotoSansCJKkr;
    font-size: 0.975rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    color: #212121;
`

export const StyledNoneContents = styled.div `
    opacity: 0;
    // height: 0%;
    text-align: left;
    width: 45rem;
    margin-bottom: 1%;
    font-family: NotoSansCJKkr;
    font-size: 0.975rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    color: #212121;
`

export const CardColumnContainer = styled(ColumnContainer) `
    margin-bottom: 1%;
    // height: max-content;
`