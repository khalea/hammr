import React from "react";

 /**
  * Profile Picture, Name, Email, {Username}
  * @param {*} props 
  */

export default function ProfileCard(props) {
    return (
        <div className="user-card flex flex-row justify-start bg-white rounded-lg shadow-lg px-8 py-8 mx-8 my-8">
          <img className="profile-picture h-16 w-16 md:h-24 md:w-24 mr-8 rounded-full"
            src={props.picture} alt={props.name} />
          
          <div className="user-info flex flex-col justify-center align-middle md:text-left">
            <h2 className="user-name text-lg font-bold">{props.name}</h2>
            <p className="user-email font-light">{props.email}</p>
            <p className="user-screenname font-thin">{props.screenName}</p>
          </div>

        </div>
    )
}



