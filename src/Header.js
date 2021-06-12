import React from 'react';
import './Header.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from "react-router-dom";


function Header({ backButton }) {
       const history = useHistory();
       return(
           <div className="header">
             {backButton ? (
              <IconButton onClick = {() => history.replace(backButton)}>
                   <ArrowBackIosIcon fontSize="Large" className="header__icon"/>
              </IconButton>
            ) : (
              <IconButton>
                        <AccountCircleIcon fontSize="large" className = "header__icon"/>
              </IconButton>
            )}
         
              <Link to="/">
                     <img className = "header__logo"
                     src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" alt="tinder-logo"/>
              </Link>
              <Link to="/chat">
                     <IconButton>
                        <EmailRoundedIcon className = "header__icon"/>
                     </IconButton>
              </Link>
              </div>
           
       );
}

export default Header