import React from 'react';
import ReactDOM from "react-dom";
import sudoku from "sudoku-umd";
import styles from "./Board.css";

const Board = (props) => ({
  render: function () {
    const tiles = [];
    tiles.push(sudoku.generate("easy"));
    const tilesString = tiles.toString();
    const tilesSplit = tilesString.split("");
    const tilesBoard = tilesSplit.map(function (tile) {
      return <input key={tile.id}
                    value={tile}
                    type="number"
                    min="1"
                    max="9"
                    onSubmit={(e) => this.handleSubmit(e)}
                    onChange={(e) => props.fill(e)}
                    />;
    })

    return <form className={styles.Board}>{tilesBoard}</form>
  }
});

export default Board;
