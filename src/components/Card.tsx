/* eslint-disable react/require-default-props */
import React, { useState } from 'react'
import styled from 'styled-components'
import { AroundRowContainer, ColumnContainer, RowContainer, StyledButton } from './style'

interface cardProps {
    contents?: string;
    name?: string;
    date?: string;
    logo?: string;
    position?: string;
    tags?: string[];
}

interface cardHeaderProps {
    title: string;
}

const CardAroundRowContainer = styled(AroundRowContainer) `
    padding: 2% 0 0 0;
`

const  CardRowContainer = styled(RowContainer) `
    padding-bottom: 0;
    align-items: center;
`

function CardHeader({ title }: cardHeaderProps) {
    return (
        <>
            <CardAroundRowContainer>
                <h3>{title}</h3>
                <CardRowContainer>
                    <input type='checkbox'/>
                    <span>Non-IT 잡만 보기</span>
                </CardRowContainer>
            </CardAroundRowContainer>
        </>
    )
}

const CardContainer = styled(AroundRowContainer) `
    align-items: center;
    height: 6rem;
    padding: 0 21% 5% 21%;
    border-radius: 1rem;
    box-shadow: 0 1rem 1rem 0 rbga(0, 0, 0, 0.04);
    background-color: #ffffff;
`
// todo :: 카드 컨테이너 크기 수정(딱 맞게), 펼쳐지는 카드 구현 -> 이후 배열 받아서 처리하는 구문 작성
function Card({ contents, name, date, logo, position, tags }: cardProps) {
    const [isToggle, setIsToggle] = useState<boolean>(true)

    const onMouse = (event: React.MouseEvent<HTMLDivElement>) => {
        const block = event.currentTarget
        block.style.backgroundColor = '#f3f3f3'
        setIsToggle(false)
    }

    const onMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
        const block = event.currentTarget
        block.style.backgroundColor = '#ffffff'
        setIsToggle(true)
    }

    return (
        <>
            <CardHeader title='오늘 올라온 잡' />
            <CardContainer onMouseEnter={onMouse} onMouseLeave={onMouseLeave}>
                <img src="assets/group-4.jpg"
                    srcSet="assets/group-4@2x.jpg 2x,
                            assets/group-4@3x.jpg 3x"
                    alt='logo' />
                <ColumnContainer>
                    <span>{ name }</span>
                    <span>{ position }</span>
                    <RowContainer>
                        <span>DevOps</span>
                        <span>Backend</span>
                    </RowContainer>
                </ColumnContainer>
                <span>time</span>
                { !isToggle ? (
                    <StyledButton>지원하기</StyledButton>
                    ) : (
                        <>
                        </>
                    )
                }
            </CardContainer>
            <CardHeader title='이번주 올라온 잡' />
        </>
    )
}

export default Card