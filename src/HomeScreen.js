import React, {Component} from 'react';
import hall from './img/hall.jpg';


class HomeScreen extends Component{


   

    render(){
        return(
           
            <div class = "Hall">
                
               <img class = "imageHall" src={hall} alt="rijsk hall"></img>
               
            </div>

                
            
        )
    }
}

export default HomeScreen;