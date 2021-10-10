import React from "react";
import styled from "styled-components";

const TrackVibesHeader = styled.div`
  margin-top: 20px;
  font-family: gotham_spotify;
  `;

function Header() {
  return (
    <React.Fragment>
      <div class="row">
        <div class="col-12">
          <TrackVibesHeader>
            <div>
              <h4>Track Vibes</h4>
            </div>
          </TrackVibesHeader>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;