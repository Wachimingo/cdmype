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
  }
  render() {
    const {ponentes} = this.state;
    return (
      <div>
      <div className="cabezera contaier-fluid"></div>
        <div className="">
          {ponentes.map((item, i) =>
            <CartasPonente item={item} key={i} />
          )}
        </div>
      </div>
    );
  }
}

export default Ponentes;
