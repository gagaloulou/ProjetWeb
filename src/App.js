import React from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './components/widget1/widget1';
import Widget2 from './components/widget2/widget2';
import Nav from './components/NavBar/Nav';



class NavBar extends React.Component {
  render() {
      return(
       
          <button onClick={this.props.onClick}>
              {this.props.nom}
          </button>
        
          
          
      );
  }
}



class Container extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      profile : [
        {
          nom : "Net Promoting Score",
          graph:  <Example/>,
          
        },
        {
          nom : "Satisfaction/Insatisfaction",
          graph:  <Widget2/>,
          
        },
        {
          nom : "Qualité de la Consultation",
          graph:  "graph",
          
        },
        {
          nom : "Qualité de l'Environnement",
          graph:  "graph",
          
        },
        {
          nom : "Bien Etre Animal",
          graph:  "graph",
          
        },
        {
          nom : "Bien Etre Client",
          graph:  "graph",
          
        },
        
          
        
      ],
      show_profile: 0
    };
  }

  handleClick(i){
      this.setState({show_profile: i})
  }

  

  render() {
    return(
        <body className="Container">
          <header>
            <nav className="navbar1">
              QUALITE DE RELATION DES EQUIPES VETERINAIRES FRANCAISES DEPUIS 2018
            </nav>
            <nav className="navbar">
              <Nav/>
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
            </nav>
            
          </header>
          <div className="profile">
            <Profile
                nom={this.state.profile[this.state.show_profile].nom}
                graph={this.state.profile[this.state.show_profile].graph}
            />
          </div>
          <Example/>
          <Widget2/>
           
          
         
         
          
        </body>
    );
  }
}

class Profile extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          bgColor: ""
      }
  }

  handleClick = (e) => {
      if (this.state.bgColor === "cornflowerblue") {
          this.setState({
              bgColor: "white"
          })
      } else {
        this.setState({
          bgColor: "pink"
      })
      }
      
  }

  render() {
    return(
        <div className="profil1" style={{backgroundColor: this.state.bgColor}}>
            <div className="Biographie">
                <a>{this.props.nom}</a>
                <a>{this.props.graph}</a>
                
               
            </div>
            
        </div>
    );
}
  
}


export default Container;

