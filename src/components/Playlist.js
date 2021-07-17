import React from 'react'
import Data from './data/dummydata'
import './Playlist.css'
import SongDesc from './song-desc'
import SongImage from './song-img'

function Playlist() {
    const listMusic = Data.map((music) => {
        if (music) {
            return (
                <div className="cardContain" key={music.id}>
                    <SongImage image={music.album.images[1].url} />
                    <SongDesc 
                                title={music.name}
                                artist={music.artists[0].name}
                                album={music.album.name}
                    />
                    <button className="btnPlay">Select</button>
                </div>
            );
        }
    });
   
    return (
        <div>
            <h1 className="head">My Playlist</h1>
            <div className="container">
                {listMusic}
            </div>
        </div>
        
    )
}

export default Playlist
