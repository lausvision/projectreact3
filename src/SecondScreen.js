import React, {Component} from 'react';
import axios from 'axios';

import './App.css';


class SecondScreen extends Component{


    state={imageURL: ""};
    state={maker: ""};
    state={title: ""};
    state={prodPlace: ""};
    state={linktoweb: ""};
  
    async componentWillMount(){
        const res = await axios.get("https://www.rijksmuseum.nl/api/nl/collection?key=TlcG1N0t&toppieces=true");
        this.setState({imageURL: res.data.artObjects[3].webImage.url});
        this.setState({maker: res.data.artObjects[3].principalOrFirstMaker});
        this.setState({title: res.data.artObjects[3].title});
        this.setState({prodPlace: res.data.artObjects[3].productionPlaces[1]});
        this.setState({linktoweb: res.data.artObjects[3].links.web});
        console.log(res.data);
  
        if(this.prodPlace===[null]){
          this.setState({prodPlace: 'unknown'});
        }
      }

    render(){
        return(
            <div>
                
                <img class = "image" src={this.state.imageURL} alt="Rembrandt pic"></img>
                <h1 class = "title">{this.state.title}</h1>
                <div class = "author">Author: {this.state.maker}</div>
                <div class = "place">Placement: {this.state.prodPlace}</div>
                
                <a class="web" href={this.state.linktoweb}>Official site 
                </a>

            </div>
            
        )
    }
}

export default SecondScreen;