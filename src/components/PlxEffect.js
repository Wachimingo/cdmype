import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import '../css/PlxEffect.css';
import {  Link } from "react-router-dom";
import $ from 'jquery';
class Plx extends Component {

  render() {
    return(
    <div className="cc">
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
          <div  id="cuerpo">
            <p className="texto">
              {this.props.cuerpo}
            </p>
          </div>
           <div style={{ height: this.props.size }} />
           <Link to="/Home/Conferencia" className="btn btn-info boton float-right">Ver</Link>
        </Parallax>
    </div>
  );
}
}
export default Plx;
