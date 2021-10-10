import React from "react";
import { Radar } from 'react-chartjs-2';
import styled from "styled-components";

const Charts = props => {

  const TrackVibesChart = styled.div`
    float: left;
    margin: 10px;
    border: 2px solid grey;
    padding: 37px;
    background-color: white ;
  `;

  const data = {
    labels: ['acousticness', 'danceability', 'energy', 'instrumentalness', 'liveness', 'speechiness', 'valence'],
    datasets: [
      {
        label: 'Audio Attributes',
        data: [props.acousticness, props.danceability, props.energy, props.instrumentalness, props.liveness, props.speechiness, props.valence],
        backgroundColor: 'rgba(60, 251, 37, 1)',
        borderColor: 'rgba(60, 179, 113)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scale: {
      ticks: { beginAtZero: true },
    },
  };

  return (

    <div>
      <div class="row">
        <div class="col-12">
          <TrackVibesChart>
            <Radar data={data} options={options} />
          </TrackVibesChart>
        </div>
      </div>
    </div>

  )
};

export default Charts;