import React from 'react'
import './login.css'
import { login_url } from '../utils/SpotAuth';

export default function LoginSpotify() {
    
    return (
        <div>
            <div className="login"   
            >
                <img src="spotify-icon.png"alt="Spotify"/>
                <a href={login_url}
                >LOGIN WITH SPOTIFY
                </a>
            </div>
        </div>
    );
}
