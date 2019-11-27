import React from "react";
import Popup from "reactjs-popup";
import "./formulaire.css"

class Formulaire extends React.Component {
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
      return (
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
      );
    }
  }

export default Formulaire;