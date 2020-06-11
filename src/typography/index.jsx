import { fontSize, fontWeight } from './mixin'
import styled from 'styled-components'
import color from '../colors'

const DefaultText = styled.p`
    ${fontSize};
    text-align: ${props => props.align};
    font-family: ${props => props.fontFamily};
    ${fontWeight};
    color: ${color};
    padding: ${props => props.padding}
    `

export default DefaultText;