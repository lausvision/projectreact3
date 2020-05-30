import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './Navbar.css';

import Navbar from './Navbar';
import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
import FourthScreen from './FourthScreen';
import FifthScreen from './FifthScreen';


export default class App extends React.Component {

  state={imageURL1: ""};
  state={imageURL2: ""};

  async componentWillMount(){
    const res = await axios.get("https://www.rijksmuseum.nl/api/nl/collection?key=TlcG1N0t&involvedMaker=Rembrandt+van+Rijn");
    this.setState({imageURL1: res.data.artObjects[0].webImage.url});
    this.setState({imageURL2: res.data.artObjects[1].webImage.url});
    console.log(res.data);
  }


  render() {
    return (
      <Router>
        <div className="main">
          <Navbar/>

            <Switch>
              <Route exact path="/" component={HomeScreen}></Route>
              <Route exact path="/SecondScreen" component={SecondScreen}></Route>
              <Route exact path="/ThirdScreen" component={ThirdScreen}></Route>
              <Route exact path="/FourthScreen" component={FourthScreen}></Route>
              <Route exact path="/FifthScreen" component={FifthScreen}></Route>
            </Switch>
          
        </div>

      </Router>
      
      /*<div>
      <h1 class="title">RIJKS MUSEUM</h1>
      <div class="topnav">
        <a class="active" href="index.html">Rembrandt van Rijn</a>
        
        <a href="quiensoy.html">sdfghjk</a>
      </div>
        <img class = "image" src={this.state.imageURL1} alt="Rembrandt pic"></img>
        <img class = "image" src={this.state.imageURL2} alt="Rembrandt pic2"></img>
      </div>*/
    )
  }
}

