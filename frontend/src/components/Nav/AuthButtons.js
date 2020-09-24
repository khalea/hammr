import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import LoginButton from './LoginButton.js'
import LogoutButton from './LogoutButton.js'

const AuthButtons = () => {
    const { user, isAuthenticated } = useAuth0()

    if ( !isAuthenticated ) {
        return <LoginButton />
    } else {
        return <LogoutButton />
    }
}

export default AuthButtons