import React, {Component} from 'react';
import axios from 'axios';

import './App.css';
import webLogo from './img/web.png';

class SecondScreen extends Component{


    state={imageURL1: ""};
    state={maker1: ""};
    state={title1: ""};
    state={prodPlace1: ""};
    state={linktoweb1: ""};
  
    async componentWillMount(){
      const res = await axios.get("https://www.rijksmuseum.nl/api/nl/collection?key=TlcG1N0t&involvedMaker=Rembrandt+van+Rijn");
      this.setState({imageURL1: res.data.artObjects[0].webImage.url});
      this.setState({maker1: res.data.artObjects[0].principalOrFirstMaker});
      this.setState({title1: res.data.artObjects[0].title});
      this.setState({prodPlace1: res.data.artObjects[0].productionPlaces});
      this.setState({linktoweb1: res.data.artObjects[0].web});
      console.log(res.data);
    }

    render(){
        return(
            <div>
                
                <img class = "image" src={this.state.imageURL1} alt="Rembrandt pic"></img>
                <h1>{this.state.title1}</h1>
                <div>{this.state.maker1}</div>
                <div>{this.state.prodPlace1}</div>
                <div>{this.state.linktoweb1}bkj</div>
                
                <a class="vector_web" href="https://github.com/lausvision">
                <img class="vector_web" src= {webLogo} alt="logo web" />
                </a>

            </div>
            
        )
    }
}

export default SecondScreen;