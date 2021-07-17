import React, { useState } from 'react'
import './CardHeader.css'

interface cardHeaderProps {
    title: string;
}

export function CardHeader({ title }: cardHeaderProps) {
    const [isCheck, setIsCheck] = useState<boolean>(false)

    const onClick = () => {
        setIsCheck(!isCheck)
    }

    return (
        <>
            <div className='cardAroundRowContainer'>
                <h3>{title}</h3>
                <div className='cardRowContainer'>
                    { !isCheck ? (
                            <img src='/assets/group-3.webp' 
                                 srcSet='/assets/group-3@2x.webp 2x
                                         /assets/gruop-3@3x.webp 3x'
                                 alt='check'
                                 onClick={ onClick }/>
                        ) : (
                            <img src='/assets/group-3-1.webp' 
                                 srcSet='/assets/group-3-1@2x.webp 2x
                                         /aasets/group-3-1@3x.webp 3x'
                                 alt='check'
                                 onClick={ onClick }/>
                        )  
                    }
                    <span className='label'>Non-IT 잡만 보기</span>
                </div>
            </div>
        </>
    )
}

export default CardHeader