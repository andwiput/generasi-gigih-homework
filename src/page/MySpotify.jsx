import React, {useState, useEffect} from 'react'
import LoginSpotify from '../components/Login'
import { getHashParamsFromUrl } from '../components/utils/getHashParam';
import SpotifyPage from './SpotifyPage';

function MySpotify() {
    const [token, setToken] = useState();
    

    useEffect(()=>{
        if(window.location.hash){
            const {access_token} = getHashParamsFromUrl(window.location.hash)
            setToken(access_token)
        }
    },[token])

    return (
        <div>
            {
                token? 
                <SpotifyPage 
                    token={token}
                /> : <LoginSpotify/>
            }
        </div>
    )
}

export default MySpotify
