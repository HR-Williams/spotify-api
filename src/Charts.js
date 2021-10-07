import React from "react";

const Charts = ({acousticness}) => {
  return (
    <div>
       <label htmlFor={acousticness}>
          {acousticness}
        </label>
    </div>
  );
}

export default Charts;