import React, { useState, useEffect } from "react";
import Dropdown from './Dropdown';
import { Credentials } from './Credentials';
import axios from "axios";

const App = () => {

  const spotify = Credentials();

  console.log('RENDERING APP.JS');

  const data = [
    { value: 1, name: "A" },
    { value: 2, name: "B" },
    { value: 3, name: "C" },
  ];

  const[token, setToken] = useState('');
  const [genres, setGenres] = useState({selectGenere: '', listOfGenresFromAPI: []});
  const [playlist, setPlaylist] = useState({selectedPlaylist: '', listOfPlaylistFromAPI: []});

  useEffect(() => {

    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {      
      console.log(tokenResponse.data.access_token);
      setToken(tokenResponse.data.access_token);

      axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      })
      .then (genreResponse => {
        setGenres({
          selectGenre: genres.selectedGenre,
          listOfGenresFromAPI: genreResponse.data.categories.items
        })
      });
    });

  }, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]);

const genreChanged = val => {
  setGenres({
    selectedGenre: val,
    listOfGenresFromAPI: genres.listOfGenresFromAPI
  });
}  

  return (
    <form onSubmit={() => { }}>
      <div className="container">
        <Dropdown options={genres.listOfGenresFromAPI} selectedValue={genres.selectedGenre} changed={() => {}} />
        <Dropdown options={data} />
        <button type='submit'>
          Search
        </button>
      </div>
    </form>
  );
}

export default App;