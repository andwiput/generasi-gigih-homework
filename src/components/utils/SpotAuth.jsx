const authEndpoint = "https://accounts.spotify.com/authorize";

export const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

const scope = 'playlist-modify-private';

const redirect_uri = 'http://localhost:3000/';

export const SPOTIFY_SEARCH_URL = "https://api.spotify.com/v1/search";

export const login_url = `${authEndpoint}?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scope}`;