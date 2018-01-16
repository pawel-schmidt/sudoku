import React from "react";
import sudoku from "sudoku-umd";
import Board from "../presentations/Board";
import styles from "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      initialBoard: sudoku.generate("easy", false),
      board: ""
    }
  }

  updateInput(event) {
    this.setState({
      board: event.target.value,
    });
    event.preventDefault();
  }

  solveBoard() {
    this.setState({
      board: sudoku.solve(this.state.initialBoard)
    })
  }

  resetBoard() {
    this.setState({
      board: ""
    })
  }

  newBoard() {
    this.setState({
      initialBoard: sudoku.generate("easy", false),
      board: ""
    })
  }

  render() {
    return (
      <div className={styles.App}>
        <h1>Sudoku</h1>
        <Board
          input={this.state.board}
          fill={this.updateInput.bind(this)}
        />
        <div className="buttons">
          <button>Check</button>
          <button onClick={this.newBoard.bind(this)}>New game</button>
          <button onClick={this.solveBoard.bind(this)}>Solve</button>
          <button onClick={this.resetBoard.bind(this)}>Restart</button>
        </div>
      </div>
    )
  }
}

export default App;