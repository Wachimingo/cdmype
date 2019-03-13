import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import CartasPonente from "./CartasPonente.js";
class Ponentes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ponentes: [],
    };
  }
  componentDidMount(){
    fetch("http://backend.acdmype.org/getponentes.php",{ mode:'cors'})
       .then(response => response.json())
       .then(data => this.setState({ponentes: data}));
    // fetch("https://cdmype.000webhostapp.com/getponentes.php",{ mode:'cors'})
    //    .then(response => response.json())
    //    .then(data => this.setState({ponentes: data}));
    // fetch("http://192.168.1.20/cdmypephp/getponentes.php",{ mode:'cors'})
    //    .then(response => response.json())
    //    .then(data => this.setState({ponentes: data}));
  }
  render() {
    const {ponentes} = this.state;
    return (
      <div>
      <div className="cabezera"><h1 className="">Ponentes</h1></div>
        <div className="contenedor">
          {ponentes.map((item, i) =>
            <CartasPonente item={item} key={i} />
          )}
        </div>
      </div>
    );
  }
}

export default Ponentes;
