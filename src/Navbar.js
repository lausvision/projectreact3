import React,{Component} from 'react';
import './Navbar.css';
import logo from './img/logo.png';
import{Link} from 'react-router-dom';

class Navbar extends Component{

    state={
        isOpen: false
    }

    handleClick=()=>{
        this.setState({
            isOpen:!this.state.isOpen,
        })
    }

    render(){
        return(

        <nav>
        <div className="logoBtn">
            <div className="logo">
                <Link to='/'>
                    <img src={logo} alt="rijsk logo"></img>
                </Link>
            </div>
         
          <div className="btn" onClick={this.handleClick}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
          </div>
        </div>

        <ul className={this.state.isOpen ? 'showNav': 'undefined'}>
          <li><Link to='/SecondScreen'>The Night Watch</Link></li>
          <li><Link to='/ThirdScreen'>The Milkmaid</Link></li>
          <li><Link to='/'>The gardens</Link></li>
          
        </ul>

        </nav>
        )
    }
}

export default Navbar;