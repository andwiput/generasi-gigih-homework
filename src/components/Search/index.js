import React, { useState } from "react";
import { SPOTIFY_SEARCH_URL } from "../utils/SpotAuth"
import axios from "axios";
import TrackItem from "../TrackItem";

function Search(props) {
  const [searchFor, setSearchFor] = useState("");
  const [tracksData, setTracksData] = useState([]);

  const handleChange = (event) => {
    setSearchFor(event.target.value);
  };

  const handleBtnSearch = async () => {
    try {
      const search_url = `${SPOTIFY_SEARCH_URL}?q=${searchFor}&type=track,artist&limit=12`;
      await axios
        .get(search_url, {
          headers: {
            Authorization: `Bearer ${props.token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setTracksData(res.data.tracks.items);
        });
    } catch (err) {
      console.error(err);
    }
  };

  console.log(tracksData);
  return (
    <div>
      <input
        type="text"
        value={searchFor}
        onChange={handleChange}
        className="bg-black text-white px-2 py-1 rounded-bl rounded-tl w-60 mb-3"
        placeholder="Search music"
      />
      <button
        onClick={handleBtnSearch}
        className="bg-gray-600 px-2 py-1 mb-3 text-white rounded-br rounded-tr"
      >
        Search
      </button>
      <div >
        {tracksData &&
          tracksData.map((item) => {
            return (
              <TrackItem
                key={item.id}
                image_url={item.album.images[0].url}
                track_title={item.name}
                artist_name={item.album.artists[0].name}
                album_name={item.album.name}
                selectedTracks={props.selectedTracks}
                handleSelect={props.handleSelect}
                uri={item.uri}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Search;
