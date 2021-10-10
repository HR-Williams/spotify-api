import React from "react";
import styled from "styled-components";

const Stream = props => {

  const TrackVibesStream = styled.div`
    margin-top: 10px;
    float: left;
  `;

  const val = props.streamID
  const newsrc = "https://open.spotify.com/embed/track/" + val

  return (
    <React.Fragment>
      <TrackVibesStream>
        <iframe src={newsrc} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </TrackVibesStream>
    </React.Fragment>
  )

}
export default Stream;