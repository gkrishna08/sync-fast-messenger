import React from "react";
import '../Style.css';
import logo from '../sync-fast-messenger.png';
function Header({ onLogoClick, loggedUser }){
    return(
        <header className="header">
            <img src={logo} alt="Sync Fast Messenger" className="app-logo" onClick={onLogoClick} />
            <h1 className="app-name">
                Sync Fast Messenger
            </h1>
            <span className="logged-user">
                Logged in as : {loggedUser}
            </span>
        </header>
    );
}

export default Header;