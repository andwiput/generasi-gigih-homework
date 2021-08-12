import React from 'react';
import './trackItem.css'

const TrackItem = props => {

    const isSelected = props.selectedTracks.includes(props.uri);


    return (
        <>
        <div className="track-cont">
            <div className="track-card">
                <img src={props.image_url} alt={props.album_name} />
                <div className="track-desc">
                    <p >{props.track_title}</p>
                    <p >{props.artist_name}</p>
                </div>
                <button onClick={()=>props.handleSelect (props.uri)}>{isSelected? "Deselect" :   "Select"}</button>
            </div>
        </div>
        </>
    );
}

export default TrackItem;