import React from "react";
import logo from './logo.svg';
import './App.css';

export default class FetchChallengeData extends React.Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    const url = "https://api.nebullam.com/challengeData";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
  }
  render(){
    return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
              <div>
                {this.state.loading ? <div>loading...</div> : <div>challengeData...</div>}
              </div>
              </a>
            </header>
          </div>
    );
  }
}
