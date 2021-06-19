/* eslint-disable react/require-default-props */
import React from 'react'
import styled from 'styled-components'

interface LogoProps {
    children? : JSX.Element
}

const LogoContainerBlock = styled.div `
    display: flex;
    flex-direction: column;
    padding: 2.5% 10% 0 10%;
    background-color: rgba(98, 115, 232, 0.1);
`

function LogoContainer({ children }: LogoProps) {
    return <LogoContainerBlock>{ children }</LogoContainerBlock>
}

export default LogoContainer