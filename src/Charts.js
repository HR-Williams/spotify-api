import React from "react";
import { Radar } from 'react-chartjs-2';

const Charts = ({ acousticness, danceability, energy, instrumentalness, liveness, speechiness, valence }) => {

  const data = {
    labels: ['acousticness', 'danceability', 'energy', 'instrumentalness', 'liveness', 'speechiness', 'valence'],
    datasets: [
      {
        label: 'Audio Attributes',
        data: [acousticness, danceability, energy, instrumentalness, liveness, speechiness, valence],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };



    const options = {
      scale: {
        ticks: { beginAtZero: true },
      },
    };
    
    return (

      <>
        <div className='header'>
        </div>
        <Radar data={data} options={options} />
      </>
  
    ) 
  };

export default Charts;