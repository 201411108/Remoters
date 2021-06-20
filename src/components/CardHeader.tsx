/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { CardAroundRowContainer, CardRowContainer, StyledCheckboxLabel } from './style'


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
            <CardAroundRowContainer>
                <h3>{title}</h3>
                <CardRowContainer>
                    { !isCheck ? (
                            <img src='/assets/group-3.webp' alt='check' onClick={ onClick }/>
                        ) : (
                            <img src='/assets/group-3-1.webp' alt='check' onClick={ onClick }/>
                        )  
                    }
                    <StyledCheckboxLabel>Non-IT 잡만 보기</StyledCheckboxLabel>
                </CardRowContainer>
            </CardAroundRowContainer>
        </>
    )
}

export default CardHeader