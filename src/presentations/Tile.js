import React from "react";

const Tile = (props) => {
  return (
      <input
        onSubmit={(e) => this.handleSubmit(e)}
        type="number"
        min="1"
        max="9"
        value={props.content.board}
        onChange={(e) => props.fill(e)}
      />
  )
}

export default Tile;