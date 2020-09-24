import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Nav from '../../components/Nav/Nav.js'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated) {
    return (
      <div>

        <Nav />

        <div className="user-card flex flex-row justify-start bg-white rounded-lg shadow-lg px-8 py-8 mx-8 my-8">
          <img className="profile-picture h-16 w-16 md:h-24 md:w-24 mr-8 rounded-full"
            src={user.picture} alt={user.name} />
          
          <div className="user-info flex flex-col justify-center align-middle md:text-left">
            <h2 className="user-name text-lg font-bold">{user.name}</h2>
            <p className="user-email font-light">{user.email}</p>
          </div>

        </div>
      </div>
    )
  } else {
    return(
      <div>
        <h1>You need to log in</h1>
      </div>
    )
  }


};

export default Profile;