/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { AroundRowContainer,  
         ColumnContainer, StyledButton, StyledLogo, StyledSpan, StyledSearchBar, StyledSearchInput, StyledSearchImg } from './style'


function Header() {
    return (
        <>
            <div className='rowContainer'>
                <img className='topLogo' 
                     src='/assets/remoters.webp'
                     srcSet='/assets/remoters@2x.webp 2x,
                             /assets/remoters@3x.webp 3x'
                     alt='top-logo'/>
                <Link to='/company'>
                    <button type='button'
                            className='enroll-button'>
                        회사 등록하기
                    </button>
                </Link>
            </div>
            <AroundRowContainer>
                <ColumnContainer>
                    <StyledLogo src='/assets/remoters.webp' 
                                srcSet='/assets/remoters@2x.webp 2x,
                                        /assets/remoters@3x.webp 3x'
                                alt='logo' />
                    <StyledSpan>[명사] 시간과 공간의 제약을 받지않고 일하는 사람</StyledSpan>
                    <StyledSearchBar>
                        <StyledSearchInput type='text' />
                        <StyledSearchImg src="/assets/group-9.webp"
                            srcSet="/assets/group-9@2x.webp 2x,
                                    /assets/group-9@3x.webp 3x"
                            alt="Group-9"
                            onClick={() => alert('검색 버튼 눌림')}/>
                    </StyledSearchBar>
                </ColumnContainer>
                <img src="/assets/wfh-1.webp"
                     srcSet="/assets/wfh-1@2x.webp 2x,
                            /assets/wfh-1@3x.webp 3x"
                     alt="wfh"/>

            </AroundRowContainer>
        </>
    )
}

export default Header
