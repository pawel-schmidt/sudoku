import React from "react";
import sudoku from "sudoku-umd";
import Board from "../presentations/Board";
import styles from "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props)
    const initialBoard = sudoku.generate("easy", false);
    console.log(initialBoard);
    this.state = {
      initialBoard: initialBoard,
      board: initialBoard
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  updateInput(event, index) {
    const tile = event.target.value;
    this.setState((prev) => {
      board: prev.board.slice(0, index) + tile.toString() + prev.board.slice(index + 1)
    });
    event.preventDefault();
  }

  checkBoard(index) {
    const solution = sudoku.solve(this.state.initialBoard);
    const answer = this.state.board.split("");

    answer.map((index, solution) => {
      if (answer[index] == solution[index]) {
        
      } else {
        
      }
    });    
  }

  solveBoard() {
    this.setState({
      board: sudoku.solve(this.state.initialBoard)
    })
  }

  resetBoard() {
    this.setState({
      board: this.state.initialBoard
    })
  }

  newBoard() {
    const initialBoard = sudoku.generate("easy", false);
    this.setState({
      initialBoard: initialBoard,
      board: initialBoard
    })
  }

  render() {
    return (
      <div className={styles.App}>
        <h1>Sudoku</h1>
        <Board
          board={this.state.board}
          initialBoard={this.state.initialBoard}
          fill={this.updateInput.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
        />
        <div className="buttons">
          <button onClick={this.checkBoard.bind(this)}>Check</button>
          <button onClick={this.newBoard.bind(this)}>New game</button>
          <button onClick={this.solveBoard.bind(this)}>Solve</button>
          <button onClick={this.resetBoard.bind(this)}>Restart</button>
        </div>
      </div>
    )
  }
}

export default App;