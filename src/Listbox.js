import React from "react";
import styled from "styled-components";

const Listbox = props => {

  const TrackVibesList = styled.div`
  font-family: gotham_spotify_book;
  // background-color: black;
  color: #bac2cf;
  float: right;
  margin: 10px;
  // text-align: center;
  `;

  const TrackVibesButton = styled.button`
  font-family: gotham_spotify_book;
  color: #bac2cf;
  float: right;
  margin 10px;
  `;

  const clicked = e => {
    e.preventDefault();
    props.clicked(e.target.id);
  }

  return (
    <div>
      <TrackVibesList>
        <div class="row">
          <div class="col-12">
            {
              props.items.map((item, idx) =>
                <button key={idx}
                  onClick={clicked}
                  id={item.track.id}>
                  {item.track.artists[0].name} - {item.track.name}
                </button>)
            }
          </div>
        </div>
      </TrackVibesList>
    </div>
  );
}

export default Listbox;