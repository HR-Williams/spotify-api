import React from "react";
import styled from "styled-components";

const Dropdown = props => {

  const TrackVibesDropdown = styled.div`
  // float: left;
  margin-bottom: 10px;
  `;

  const dropdownChanged = e => {
    props.changed(e.target.value);
  }

  return (
    <div>
      <div class="col-2">
        <TrackVibesDropdown>
          <select value={props.selectedValue} onChange={dropdownChanged}>
            {props.options.map((item, idx) => <option key={idx} value={item.id}>{item.name}</option>)}
          </select>
        </TrackVibesDropdown>
      </div>
    </div>

  );
}

export default Dropdown;