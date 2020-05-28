import React, {Component} from 'react';
import axios from 'axios';

import './App.css';

class SecondScreen extends Component{


    state={imageURL1: ""};
    state={imageURL2: ""};
  
    async componentWillMount(){
      const res = await axios.get("https://www.rijksmuseum.nl/api/nl/collection?key=TlcG1N0t&involvedMaker=Rembrandt+van+Rijn");
      this.setState({imageURL1: res.data.artObjects[0].webImage.url});
      this.setState({imageURL2: res.data.artObjects[1].webImage.url});
      console.log(res.data);
    }

    render(){
        return(
            <div>
                <h1>The Night Watch</h1>
                <img class = "image" src={this.state.imageURL1} alt="Rembrandt pic"></img>
            </div>
            
        )
    }
}

export default SecondScreen;