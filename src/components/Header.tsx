/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

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
            <div className='aroundRowContainer'>
                <div className='columnContainer'>
                    <img className='mainLogo'
                         src='/assets/remoters.webp' 
                         srcSet='/assets/remoters@2x.webp 2x,
                                 /assets/remoters@3x.webp 3x'
                         alt='logo' />
                    <span className='logoSpan'>[명사] 시간과 공간의 제약을 받지않고 일하는 사람</span>
                    <span className='searchBarContainer'>
                        <input className='searchInput' type='text' />
                        <img className='searchImage'
                             src="/assets/group-9.webp"
                             srcSet="/assets/group-9@2x.webp 2x,
                                    /assets/group-9@3x.webp 3x"
                             alt="Group-9"
                             onClick={() => alert('검색 버튼 눌림')}/>
                    </span>
                </div>
                <img className='mainImage'
                     src="/assets/wfh-1.webp"
                     srcSet="/assets/wfh-1@2x.webp 2x,
                            /assets/wfh-1@3x.webp 3x"
                     alt="wfh"/>
            </div>
        </>
    )
}

export default Header
