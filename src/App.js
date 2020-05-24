import React from 'react';
import axios from 'axios';
import './App.css';




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
      
    
      <div>

      <h1 class="title">RIJKS MUSEUM</h1>
      <div class="topnav">
        <a class="active" href="index.html">Rembrandt van Rijn</a>
        <br/>
        <a href="quiensoy.html">sdfghjk</a>
      </div>
        
        
        
        <img class = "image" src={this.state.imageURL1} alt="Rembrandt pic"></img>
        <img class = "image" src={this.state.imageURL2} alt="Rembrandt pic2"></img>
      </div>
    )
  }
}

