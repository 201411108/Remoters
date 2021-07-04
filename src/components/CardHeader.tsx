/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import './CardHeader.css'
import { StyledCheckboxLabel } from './style'


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
                            <img src='/assets/group-3.webp' alt='check' onClick={ onClick }/>
                        ) : (
                            <img src='/assets/group-3-1.webp' alt='check' onClick={ onClick }/>
                        )  
                    }
                    <span className='label'>Non-IT 잡만 보기</span>
                </div>
            </div>
        </>
    )
}

export default CardHeader