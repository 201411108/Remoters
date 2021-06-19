/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 5%
`

const StyledTopLogo = styled.img `
    width: 212px;
    height: 34px;
    object-fit: contain;
    font-family: Montserrat;
    font-size: 28px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.47px;
`

const StyledLogo = styled.img `
    width: 340px;
    height: 69px;
    object-fit: contain;
    font-family: Montserrat;
    font-size: 57px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.96px;
`

const StyledButton = styled.button `
    width: 209px;
    height: 56px;
    color: white;
    border-radius: 28px;
    box-shadow: 10px 10px 30px 0 rgba(67, 67, 67, 0.33);
    background-color: #4756df;
`

const MainLogoContainer = styled.div `
    display: flex;
    flex-direction: column;
`

const StyledSpan = styled.span `
    padding-bottom: 5%;
    width: 387px;
    height: 28px;
    font-family: NotoSansCJKkr;
    font-size: 19px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.03px;
    color: #5161e3;
`

const StyledSearchBar = styled.span `
    display: table-cell;
    width: 371px;
    height: 58px;
    border-radius: 38.5px;
    box-shadow: 0 6px 39px 0 rgba(71, 86, 223, 0.15);
    background-color: #ffffff;
`

function onClick() {
    alert('검색버튼 눌림')
}

function Header() {
    return (
        <>
            <HeaderContainer>
                <StyledTopLogo src='/assets/remoters.webp' 
                            srcSet='/assets/remoters@2x.webp 2x,
                                    /assets/remoters@3x.webp 3x'
                            alt='logo' />
                <Link to='/company'>
                    <StyledButton>
                        회사 등록하기
                    </StyledButton>
                </Link>
            </HeaderContainer>
            <HeaderContainer>
                <MainLogoContainer>
                    <StyledLogo src='/assets/remoters.webp' 
                                srcSet='/assets/remoters@2x.webp 2x,
                                        /assets/remoters@3x.webp 3x'
                                alt='logo' />
                    <StyledSpan>[명사] 시간과 공간의 제약을 받지않고 일하는 사람</StyledSpan>
                    <StyledSearchBar>
                        <input type='text' />
                        <img src="/assets/group-9.webp"
                            srcSet="/assets/group-9@2x.webp 2x,
                                    /assets/group-9@3x.webp 3x"
                            alt="Group-9"
                            onClick={onClick}/>
                    </StyledSearchBar>
                </MainLogoContainer>
                <img src="/assets/wfh-1.webp"
                     srcSet="/assets/wfh-1@2x.webp 2x,
                            /assets/wfh-1@3x.webp 3x"
                     alt="wfh"/>

            </HeaderContainer>
        </>
    )
}

export default Header