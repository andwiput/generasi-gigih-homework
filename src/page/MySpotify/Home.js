import React from 'react';
import data from '../../components/data/dummydata';
import Track from '../../components/Track';

class Home extends React.Component {

    render() {
        const homeTrack = data.map((item) => {
            return (
                <>
                    <Track
                        key={item.album.id}
                        image_url={item.album.images[0].url}
                        track_title={item.name}
                        artist_name={item.album.artists[0].name}
                        album_name={item.album.name}
                        data={item}
                    />
                </>
            );
        });

        return (
            <>
            
            <div className="flex flex-wrap">
                {homeTrack}
            </div>

            </>
        );
    }
}

export default Home;