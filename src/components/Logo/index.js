import React from 'react'
// import Logo from 'Color_Logo.svg'
import styled from 'styled-components'

const Brand = styled.div`
    // width: 17%;
    // background-color: #270450;
    text-align: left;
    padding-left:3rem;
    padding-bottom: 1.8rem;
    border-bottom: 1px solid grey;
    
`
const LogoComponent = () =><Brand >
    <img style={{width:'50%'}} src='/Color_Logo.svg'/>
</Brand>
export default LogoComponent;