/* eslint-disable react/require-default-props */
import React from 'react'
import { LogoContainerBlock } from './style'

interface LogoProps {
    children? : JSX.Element
}

function LogoContainer({ children }: LogoProps) {
    return <LogoContainerBlock>{ children }</LogoContainerBlock>
}

export default LogoContainer