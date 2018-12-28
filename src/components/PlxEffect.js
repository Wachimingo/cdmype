import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import '../css/PlxEffect.css';
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
class Plx extends Component {
  render() {
    return(
    <div >
    <div className="fecha">
        <span className="fecha">{this.props.fecha}</span>
    </div>
        <Parallax
            className="Ancho"
            blur={0}
            bgImage={this.props.img}
            bgImageAlt={this.props.descripcion}
            strength={200}
        >
          <h1 className="txtTitulo">
              {this.props.titulo}
          </h1>
          <h4 className="txtCuerpo">
            {this.props.cuerpo}
          </h4>
           <div style={{ height: this.props.size }} />
           <Link to="/Home/Conferencia" class="btn btn-success boton">Ver</Link>
        </Parallax>
    </div>
  );
}
}
export default Plx;
