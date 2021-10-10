import React, { useState, useEffect } from "react";
import Header from "./Header";
import Dropdown from './Dropdown';
import Listbox from "./Listbox";
import Detail from './Details';
import Charts from './Charts';
import Stream from './Stream';
import { Credentials } from './Credentials';
import axios from "axios";
import styled from "styled-components";

const App = () => {

  const data = [
    { value: 1, name: "A" },
    { value: 2, name: "B" },
    { value: 3, name: "C" },
  ];

  const spotify = Credentials();

  const [token, setToken] = useState('');
  const [genres, setGenres] = useState({ selectedGenre: '', listOfGenresFromAPI: [] });
  const [playlist, setPlaylist] = useState({ selectedPlaylist: '', listOfPlaylistFromAPI: [] });
  const [tracks, setTracks] = useState({ selectedTrack: '', listOfTracksFromAPI: [] });
  const [trackID, setTrackID] = useState('');
  const [trackDetail, setTrackDetail] = useState(null);
  const [features, setFeatures] = useState({ acousticness: '', danceability: '', energy: '', instrumentalness: '', liveness: '', speechiness: '', valence: '' });

  useEffect(() => {

    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
      .then(tokenResponse => {
        setToken(tokenResponse.data.access_token);

        axios('https://api.spotify.com/v1/browse/categories?country=US', {
          method: 'GET',
          headers: { 'Authorization': 'Bearer ' + tokenResponse.data.access_token }
        })
          .then(genreResponse => {
            setGenres({
              selectedGenre: genres.selectedGenre,
              listOfGenresFromAPI: genreResponse.data.categories.items,

            })
            console.log(genreResponse.data)
          });

      });

  }, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]);

  const genreChanged = val => {
    setGenres({
      selectedGenre: val,
      listOfGenresFromAPI: genres.listOfGenresFromAPI
    });

    axios(`https://api.spotify.com/v1/browse/categories/${val}/playlists`, {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + token }
    })
      .then(playlistResponse => {

        setPlaylist({
          selectedPlaylist: playlist.selectedPlaylist,
          listOfPlaylistFromAPI: playlistResponse.data.playlists.items
        })
        console.log(playlistResponse.data)
      });

    console.log(val + " selected Genre");
  }

  const playlistChanged = val => {
    console.log(val + " playlist");
    setPlaylist({
      selectedPlaylist: val,
      listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI
    });
  }

  const buttonClicked = e => {
    e.preventDefault();

    axios(`https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then(tracksResponse => {
        setTracks({
          selectedTrack: tracks.selectedTrack,
          listOfTracksFromAPI: tracksResponse.data.items
        })
        console.log("tracks data" + tracksResponse.data)
      });
  }

  const listboxClicked = val => {

    const currentTracks = [...tracks.listOfTracksFromAPI];

    const trackInfo = currentTracks.filter(t => t.track.id === val);
    setTrackDetail(trackInfo[0].track);
    console.log(val + " t.track.id val");
    setTrackID(val);

    axios(`https://api.spotify.com/v1/audio-features/${val}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then(featuresResponse => {
        setFeatures({
          acousticness: featuresResponse.data.acousticness,
          danceability: featuresResponse.data.danceability,
          energy: featuresResponse.data.energy,
          instrumentalness: featuresResponse.data.instrumentalness,
          liveness: featuresResponse.data.liveness,
          speechiness: featuresResponse.data.speechiness,
          valence: featuresResponse.data.valence
        })
        console.log(featuresResponse.data)

      });

    console.log(val + " trackid")
    console.log(features.acousticness + " acousticness")
  }

  return (
    <div className="container">
      <Header />
      <form onSubmit={buttonClicked}>
        <Dropdown options={genres.listOfGenresFromAPI} selectedValue={genres.selectedGenre} changed={genreChanged} />
        <Dropdown options={playlist.listOfPlaylistFromAPI} selectedValue={playlist.selectedPlaylist} changed={playlistChanged} />
        <button class="btn-btn-danger" type='submit'>
          Search
        </button>
      </form>
      {trackDetail && <Stream streamID={trackID} />}
      {trackDetail && <Charts {...features} />}
      <Listbox items={tracks.listOfTracksFromAPI} clicked={listboxClicked} />
    </div>
  );
}

export default App;