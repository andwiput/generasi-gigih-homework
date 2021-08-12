import React, { useState } from 'react'
import SideBar from '../SideBar'
import Body from '../Body'
import './spotifypage.css'

function SpotifyPage(props) {
    const [selectedTracks, setSelectedTracks] = useState([])

    const handleSelect = uri =>{
        if (selectedTracks.includes(uri)) {
            let newTracks = selectedTracks.filter(track => track !== uri)
            setSelectedTracks(newTracks)
          } else {
            setSelectedTracks([...selectedTracks, uri])
          }
    }
    console.log(selectedTracks);

    return (
        
        <div className="spotpage-body">
            <SideBar/>
            <Body 
                token={props.token} 
                selectedTracks={selectedTracks} 
                handleSelect={handleSelect}
            />
        </div>
        
    )
}

export default SpotifyPage
