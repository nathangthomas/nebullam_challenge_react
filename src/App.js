import React from "react";
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, CardImgOverlay
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';

import logo from './logo.svg';
import './App.css';


export default class FetchChallengeData extends React.Component {
  state = {
    loading: true,
    challengeData: null
  };

  async componentDidMount() {
    const url = "https://api.nebullam.com/challengeData";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ challengeData: data.data, loading: false});
  }
  render(){
    return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <div>
                {this.state.loading || !this.state.challengeData ? (
                  <div>loading...</div>
                ) : (
                  <div>
                  <div className="Servo-title"><h1>Servo Status</h1></div>
                    {this.state.challengeData.map(servo =>
                      <div className="Servo-card">
                        <Card body inverse style={{ backgroundColor: 'transparent', borderColor: '#777' }}>
                          <CardTitle className="Title">{servo.servoID}</CardTitle>
                          <CardSubtitle className="Subtitle">Position: {servo.position}</CardSubtitle>
                          <CardText className="Text">Calibrated: {servo.isCalibrated.toString()}</CardText>
                        </Card>
                      </div>)}
                  </div>
                )}
              </div>
            </header>
          </div>
    );
  }
}
