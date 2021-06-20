/* eslint-disable react/require-default-props */
import React from 'react';
import { CardContainerDiv } from './style'

interface cardProps {
    children?: JSX.Element
}

function CardsContainer({ children }: cardProps) {
    return (
        <CardContainerDiv>{ children }</CardContainerDiv>
    )
}

export default CardsContainer