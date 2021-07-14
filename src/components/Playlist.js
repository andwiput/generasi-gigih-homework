import React from 'react'
import Data from '../data'
import './Playlist.css'
import SongTitle from './song-title'
import Artist from './artist'
import Album from './album'
import SongImage from './song-img'

function Playlist() {
   
    return (
        <div>
            <h1 className="head">My Playlist</h1>
            <div className="playList">
                <div className="cardContain">
                    < SongImage image={Data.album.images[1].url} />
                    < SongTitle title={Data.name}/>
                    < Artist artist={Data.artists[0].name} />  
                    < Album album={Data.album.name} />
                    <button className="btnPlay">Select</button>
                </div>
            </div>
        </div>
        
    )
}

export default Playlist
