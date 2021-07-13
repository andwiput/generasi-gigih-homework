import React from 'react'
import Data from '../data'
import './Playlist.css'

function Playlist() {
    const{name:title, artists:[{name:artist}], album:{name:album}}=Data
    return (
        <div className="playList">
            <div className="cardContain">
                <img src={Data.album.images[1].url} alt="Album" />
                <p className="title">{title}</p>
                <p className="artist">{artist}</p>
                <p className="album">{album}</p>
                <button className="btnPlay">Select</button>
            </div>
        </div>
    )
}

export default Playlist
