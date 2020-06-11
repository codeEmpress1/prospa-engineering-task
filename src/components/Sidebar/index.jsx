import React, {useState} from 'react'
import Menu from '../Menu/menu'
import { StyledSide } from '../Menu/styledMenu'
import LogoComponent from '../Logo'
import { BlueOval, VioletOval } from '../Logo/sidebarImage'


const Sidebar = () => {
    return (
        <StyledSide style={{background:'#270450'}}>
            <LogoComponent/>
            <Menu/>
            <BlueOval src="/blue-oval.svg"/>
            <VioletOval src="/violet-oval.svg"/>
        </StyledSide>
    )
}

export default Sidebar
