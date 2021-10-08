import React from "react";

const Stream = props => {
const val = props.hi
const newsrc = "https://open.spotify.com/embed/track/"  + val

return(
<div>
<iframe src={newsrc} width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

<p>trackid= {props.hi} </p>
<p>newsrc={newsrc}</p>
</div>
)

}
export default Stream;