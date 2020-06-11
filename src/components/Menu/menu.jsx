import React from 'react';
import { StyledMenu } from './styledMenu';

const Menu = () => {
  return (
    <StyledMenu>

      <a href="/">
      <span role="img" aria-label="about us">
          <img src="/account.svg" alt="icon" style={{width:"12%", paddingRight:"1rem"}}/>
        </span>
        Account
      </a>

      <a href="/">
      <span role="img" aria-label="price">
          <img src="/invoice.svg" alt="icon" style={{width:"12%", paddingRight:"1rem", color:"#ffffff"}}/>
        </span>
        Invoicing
      </a>

      <a href="/">
      <span role="img" aria-label="price">
          <img src="/settings.svg" alt="icon" style={{width:"12%", paddingRight:"1rem", color:"#ffffff"}}/>
        </span>
        Account management
      </a>

      <a href="/">
        <span role="img" aria-label="contact">
          <img src="/profile.svg" alt="icon" style={{width:"12%", paddingRight:"1rem"}}/>
        </span>
        My Profile
      </a>

      <a href="/">
      <span role="img" aria-label="security">
          <img src="/security.svg" alt="icon" style={{width:"12%", paddingRight:"1rem"}} />
        </span>
        Security
      </a>

      <a href="/">
      <span role="img" aria-label="contact">
          <img src="/support.svg"  style={{width:"12%", paddingRight:"1rem"}} alt="icon"/>
        </span>
        Support
      </a>
    </StyledMenu>
  )
}
export default Menu;
