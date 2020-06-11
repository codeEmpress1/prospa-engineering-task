import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import LogoComponent from '../Logo'
import styled from 'styled-components'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import {device} from '../../device'

const StyledNav = styled(Navbar)`
    min-height: 4.2em;
    background-color: ;
    display: flex;
    justify-content: flex-end;
    padding: 1.5rem 1rem 1rem 0;
    width: 83%;
    position: fixed;
    right:0;
    top: 0;
    box-shadow: 6px 2px 36px rgba(39,4,80,0.16);

    a {
        color: #270450;
        font-size: .8em;
        padding-left: .4em;

    }
    @media ${device.laptop} )

`

const StyledImg = styled.img`
    width: 10%;
    margin: 0 0 0 1.2rem;
`

const StyledNotification = styled(StyledImg)`
    // border-right: 1px solid grey;
    // border-left: 1px solid grey;
`
const NavBar = () => {
    return (
        <StyledNav>
            {/* <Navbar.Brand href="#home" > <LogoComponent/> </Navbar.Brand> */}

            <Navbar.Collapse className="justify-content-end">
                {/* <Navbar.Text> */}
                <div style={{display:'flex'}}>
                <StyledNotification id='divide' src="/IconsBasicNotification.svg" alt="notification" />
                <StyledImg src="/OvalHead.svg" alt="user" />
                <a href="#">Victor Shiwani </a>
                </div>
                {/* </Navbar.Text> */}
            </Navbar.Collapse>
</StyledNav>
    )
}

export default NavBar
