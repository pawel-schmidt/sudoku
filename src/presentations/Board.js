import React from "react";
import ReactDOM from "react-dom";
import styles from "./Board.css";
import sudoku from "sudoku-umd";

const Board = props => {
  const tiles = props.board
    .split("")
    .map((item, index) => (
      <input
        key={index}
        type="number"
        value={item}
        disabled={props.initialBoard.toString()[index] !== "."}
        min="1"
        max="9"
        onChange={e => props.fill(e, index)}
      />
    ));

  return <form className={styles.Board} onSubmit={props.handleSubmit}>{tiles}</form>;
};

export default Board;