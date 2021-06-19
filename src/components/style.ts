import styled from 'styled-components'

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