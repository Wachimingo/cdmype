import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import CartasPonente from "./CartasPonente.js";
import $ from 'jquery';
class Ponentes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ponentes: [],
    };
  }
  componentDidMount(){
    fetch("http://localhost/cdmypephp/getponentes.php",{ mode:'cors'})
       .then(response => response.json())
       .then(data => this.setState({ponentes: data}));
  }
  render() {
    const {ponentes} = this.state;
    $(window).on('load',function(){
      document.body.style.backgroundImage = null;
      document.body.style.background = "white";
    });
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
