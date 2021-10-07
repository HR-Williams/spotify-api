import React from "react";
import { Radar } from 'react-chartjs-2';

const Charts = props => {


  const data = {
    labels: ['acousticness', 'danceability', 'energy', 'instrumentalness', 'liveness', 'speechiness', 'valence'],
    datasets: [
      {
        label: 'Audio Attributes',
        data: [props.acousticness, props.danceability, props.energy, props.instrumentalness, props.liveness, props.speechiness, props.valence],
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
      <Radar data={data} options={options} />
    </>

  )
};

export default Charts;