import React from "react";

const Tile = (props, index) => {
  return (
    <input
      min="1"
      max="9"
      value={props.content.number}
      onChange={e => props.fill(e, index)}
    />
  )
}

export default Tile;