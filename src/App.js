import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      second: '',
      diff: []
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let firstIDs = this.state.first
    let secondIDs = this.state.second

    let firstSet = new Set(firstIDs.split("\n"))
    let secondSet = new Set(secondIDs.split("\n"))

    let diff = new Set(
      [...firstSet].filter(x => !secondSet.has(x))
    )

    let diffArray = [...diff]

    //alert(`first ids ${[...firstSet]} \n second ids ${[...secondSet]} \n ${[...diff]}`);
    this.setState({ first: firstIDs, second: secondIDs, diff: diffArray })
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.mySubmitHandler}>
          <p>First set of IDs</p>
          <textarea
            name="first"
            cols="40"
            rows="40"
            onChange={this.myChangeHandler}
          />
          <p>Second set of IDs</p>
          <textarea
            name="second"
            cols="40"
            rows="40"
            onChange={this.myChangeHandler}
          />
          <br />
          <br />
          <p>Results...</p>
          <br />
          <ul>
            {this.state.diff.map(x => {
              return (<li key={x}>{x}</li>)
            })}
          </ul>
          <br />
          <br />
          <input type='submit' value='Calculate Diff' />
          <br />
          <br />
          <br />
          <br />
        </form>
      </div>
    );
  }
}

export default App;
