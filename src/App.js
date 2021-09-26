import React from "react";
import Dropdown from './Dropdown';

const App = () => {
  
  const data = [
    {value: 1, name: "A"},
    {value: 2, name: "B"},
    {value: 3, name: "C"},
  ]
  return(
    <div>
      <Dropdown options={data}/>
    </div>
  );
}

export default App;