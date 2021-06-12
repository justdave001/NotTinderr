import React from 'react';
import './Header.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import IconButton from '@material-ui/core/IconButton';
function Header() {
       return(
           <div className="header">
               <IconButton>
              <AccountCircleIcon className="header__icon"/>
              </IconButton>
              <img className = "header__logo"
              src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" alt="tinder-logo"/>
              <IconButton>
              <EmailRoundedIcon className = "header__icon"/>
              </IconButton>
              </div>
           
       );
}

export default Header