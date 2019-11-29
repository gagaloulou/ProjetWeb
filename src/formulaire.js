import React from "react";
import Popup from "reactjs-popup";
import "./formulaire.css"

import logo from './logo.svg';
import './App.css';
import Nav from './components/NavBar/Nav';

import { BrowserRouter, Route, Link } from "react-router-dom";


import { Button, Col, Row} from 'reactstrap';


class NavBar extends React.Component {
  render() {
      return(
          <div >
            <Button outline color="White" onClick={this.props.onClick} size="lg" style={{backgroundColor:"#941701",color: "white"}}>{this.props.nom}</Button>{' '}
         
        </div>
          
          
      );
  }
}



class Formulaire extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Client bien enregistré : ' + this.state.value);
    event.preventDefault();
  }

  

  render() {
    return(
        <body className="Container">
          <header>
            <Row>
              <Col xs="12"  >
              <div className="navbar1">DASHBOARD POUR CAPTEURS DANS UNE MAISON</div>
            </Col>
            </Row>
            <nav className="navbar">
              <Nav/>
              <BrowserRouter>
                <Route path="/formulaire" component={Formulaire}/>
            </BrowserRouter>
              <NavBar
                  nom={this.state.profile[0].nom}
                  onClick={() => this.handleClick(0)}/>
              <NavBar
                  nom={this.state.profile[1].nom}
                  onClick={() => this.handleClick(1)}/>
              <NavBar
                  nom={this.state.profile[2].nom}
                  onClick={() => this.handleClick(2)}/>
              <NavBar
                  nom={this.state.profile[3].nom}
                  onClick={() => this.handleClick(3)}/>
              <NavBar
                  nom={this.state.profile[4].nom}
                  onClick={() => this.handleClick(4)}/>
              <NavBar
                  nom={this.state.profile[5].nom}
                  onClick={() => this.handleClick(5)}/>
              <NavBar
                  nom="Formulaire"
                  onClick={Formulaire}/>
            </nav>
            
          </header>
          <div className="body">
          <div className="profile">
            
                <form onSubmit={this.handleSubmit}>
                <label>
                  Identifiant de l'utilisateur :
                  <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                  Pays de l'utilisateur :
                  <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                Nombre de personnes dans la maison :
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </label>
              <br />
              <label>
                Taille de la maison :
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="small">small</option>
                  <option value="medium">medium</option>
                  <option value="big">big</option>
        
                </select>
              </label>
              
              <br />
              <input type="submit" value="Envoyer" />
              </form>
            />
          </div>
          
          
          
          
          
          
         
       </div>  
         
        </body>
    );
  }
  

  
}


  



export default Formulaire;

