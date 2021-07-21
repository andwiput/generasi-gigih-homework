import React from 'react';
import TrackDetail from '../page/MySpotify/TrackDetail';

const Track = props => {

    const handleClick = (title) => {
        alert(`Now playing: ${title}`);
    }

    return (
        <>

        <div onClick= {() => {handleClick(props.track_title)}}
        className="bg-sptf_card px-5 py-5 rounded w-1/5 mr-4 mb-4 cursor-pointer hover:bg-sptf_card_hover">
            <img src={props.image_url} title={props.album_name} alt={props.album_name} className="object-cover rounded h-40 w-full"/>
            <p className="text-base mt-2 mb-1 font-bold text-black-100">{props.track_title}</p>
                <p className="text-sm text-black-300">{props.artist_name}</p>
        </div>

        <TrackDetail/>

        </>
    );
}

export default Track;