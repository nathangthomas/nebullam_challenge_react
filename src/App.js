import React from "react";
import logo from './logo.svg';
import './App.css';

export default class FetchChallengeData extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {

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
