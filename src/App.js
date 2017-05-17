import React, { Component } from 'react';
import './App.css';
import {Grid, Row, Col} from 'react-bootstrap';
import Header from './Header';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header brandName="Chris Jimenez" />
        <Grid>
        <Row className="show-grid">

           <Col xs={12} md={8}>
           Left column
           </Col>
           <Col xs={12} md={4}>
           right column
           </Col>
        </Row>
        </Grid>
      </div>
    );
  }
}
export default App;
