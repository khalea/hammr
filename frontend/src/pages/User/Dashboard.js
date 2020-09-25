import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Nav from '../../components/Nav/Nav.js'
import ProfileCard from '../../components/Profile/ProfileCard.js'


const Dashboard = () => {
  
  // Hook - Auth0 user, auth state, loading
  const { user, isAuthenticated, isLoading } = useAuth0();

  // Hook - username
  const [userName, setUserName] = useState('username...')

  // Load non-Auth0 profile data
  useEffect(() => {
    console.log(`Dashboard loaded`)

    // TODO — Load user data from MongoDB
    let data = {"email": user}
    
    fetch('/api/user-profile/load', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json)
    .then(data => {
      console.log(data)
    })


    
    // Test Function - API
    /*
    fetch('/api/hello')
      .then(res => {return res.json()})
      .then(data => { 
        console.log(`Response Text: ${data.text}`)
        setUserName("khalea")
      })*/
  })

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        <Nav />
        <ProfileCard picture={user.picture} name={user.name} email={user.email} screenName={userName} />
      </div>
    )
  } else {
    return (
      <div>
        <h1>You need to log in</h1>
      </div>
    )
  }


};

export default Dashboard;


