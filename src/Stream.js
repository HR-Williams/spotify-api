import React from "react";

const Stream = props => {
const val = props.streamID
const newsrc = "https://open.spotify.com/embed/track/"  + val

return(
<div>
<iframe src={newsrc} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

<p>trackid= {props.streamID} </p>
<p>newsrc={newsrc}</p>
</div>
)

}
export default Stream;