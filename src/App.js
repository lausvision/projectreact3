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

<div class="topnav">
        <a class="active" href="index.html">Rembrandt</a>
        <a href="quiensoy.html">sdfghjk</a>
        <a href="formacionAcademica.html">Formación académica</a>
        <a href="experienciaProfesional.html">Experiencia profesional</a>
        <a href="aptitudes.html">Aptitudes/ Debilidades</a>
        <a href="idiomas.html">Idiomas</a>
        <a href="it.html">IT</a>
        <a href="intereses.html">Intereses</a>
        <a href="disponibiidad.html">Disponibilidad</a>
        <a href="contacta.html">Contacta</a>
      </div>
        
        <h1>Hola Rembrandt, jeje</h1>
        
        <img class = "image" src={this.state.imageURL1} alt="Rembrandt pic"></img>
        <img class = "image" src={this.state.imageURL2} alt="Rembrandt pic"></img>
      </div>
    )
  }
}

