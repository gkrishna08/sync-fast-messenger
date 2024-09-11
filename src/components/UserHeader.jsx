import React from "react";
import '../Style.css';

function UserHeader( { user } ){
    if (!user) return null;
    return(
        <div className="user-header">
            <img src={user.pic} alt={user.name} className="user-pic" />
            <div className="user-info">
                <h2 className="header-name">{user.name}</h2>
            </div>
        </div>
    );
}

export default UserHeader;