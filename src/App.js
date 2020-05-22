import React from 'react';
import axios from 'axios';
import './App.css';



export default class App extends React.Component {

  state={imageURL: ""};

  async componentWillMount(){
    const res = await axios.get("https://www.rijksmuseum.nl/api/nl/collection?key=TlcG1N0t&involvedMaker=Rembrandt+van+Rijn");
    this.setState({imageURL: res.data.artObjects[0].webImage.url});
  }


  render() {
    return (
      <div>
        <h1>Hola Rembrandt, jeje</h1>

        <img src={this.state.imageURL} alt="Rembrandt pic"></img>
      </div>
    )
  }
}

