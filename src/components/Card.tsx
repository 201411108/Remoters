/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react'
import { getTsBuildInfoEmitOutputFilePath } from 'typescript'
import { StyledButton, NoneStyledButton,
         CardContainer, JobColumnContainer, JobSpan, PositionSpan, JobRowContainer, TagContainer,
         StyledContentsContainer, StyledContents, CardColumnContainer } from './style'

interface cardProps {
    contents: string;
    name?: string;
    date: string;
    logo?: string;
    position?: string;
    tags?: string[];
}

// todo :: 펼쳐지는 카드 구현(애니메이션 적용 필요)
function Card({ contents, name, date, logo, position, tags }: cardProps) {
    const [isHover, setIsHover] = useState<boolean>(true)
    const [isClick, setIsClick] = useState<boolean>(true)

    const getTime = (targetDate: string): string => {
        const currentDate = Date.parse(new Date().toISOString())
        const parsedTargetDate = Date.parse(targetDate)
        const NINE_HOURS_MILLISECONDS = 32400000;
        
        // 시간이 지난 시간으로 나와서 절대값을 취하였음
        const diff = Math.abs(parsedTargetDate - currentDate) + NINE_HOURS_MILLISECONDS
        const day = Math.floor(diff / (60 * 60 * 24 * 1000));
        const dayMs = diff % (60 * 60 * 24 * 1000);
        const hours = Math.floor(dayMs / (60 * 60 * 1000));
        const hoursMs = diff % (60 * 60 * 1000);
        const minutes = Math.floor(hoursMs / (60 * 1000));

        if(day >= 1) {
            return `${day.toString()}d`
        }
        if(hours >= 1 || hours < 24) {
            return `${hours.toString()}h`
        }
        return `${minutes.toString()}m`        
    }


    const onMouse = (event: React.MouseEvent<HTMLDivElement>) => {
        const block = event.currentTarget
        block.style.backgroundColor = '#f3f3f3'
        setIsHover(false)
    }

    const onMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
        const block = event.currentTarget
        block.style.backgroundColor = '#ffffff'
        setIsHover(true)
    }

    return (
        <>
            <CardColumnContainer>
                <CardContainer onClick={() => { setIsClick(!isClick) }}
                               onMouseEnter={onMouse}
                               onMouseLeave={onMouseLeave}>
                    <img src="assets/group-4.jpg"
                        srcSet="assets/group-4@2x.jpg 2x,
                        assets/group-4@3x.jpg 3x"
                        alt='logo' />
                    <JobColumnContainer>
                        <JobSpan>{ name }</JobSpan>
                        <PositionSpan>{ position }</PositionSpan>
                        <JobRowContainer>
                            { tags?.map((tag) => (
                                    <TagContainer key={tag}>{tag}</TagContainer>
                                ))
                            }
                        </JobRowContainer>
                    </JobColumnContainer>
                    <span>{getTime(date)}</span>
                    { !isHover ? (
                        <StyledButton onClick={() => alert('지원하기 눌림')}>지원하기</StyledButton>
                        ) : (
                            <NoneStyledButton />
                            )
                        }
                </CardContainer>
                { !isClick ? (
                    <StyledContentsContainer>
                        <StyledContents>{contents}</StyledContents>
                    </StyledContentsContainer>
                    ) : (
                        <div />
                    )
                }
            </CardColumnContainer>
        </>
    )
}

export default Card