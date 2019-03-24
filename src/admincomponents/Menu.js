import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/Menu.css";
import ImgAsistencia from "../img/asistencia.png";
import ImgReview from "../img/review.png";
import ImgPrint from "../img/print.png";
import ImgPost from "../img/post.ico";
import {Link} from 'react-router-dom';
// import $ from 'jquery';

class Menu extends Component {

crearPDF(e){

}
  render() {
    return (
      <div className="">
          <div className="ContenendorMenu">
            <div className="ContenendorAsistencia">
              <h3>Asistencia</h3>
              <Link to={'/Admin/Asistencia'} className="Link">
                <img src={ImgAsistencia} className="icono" alt=""/>
              </Link>
            </div>
            <div className="ContenendorPost">
              <h3>Post</h3>
              <Link to={'/Admin/Post'} className="Link">
                <img src={ImgPost} className="icono" alt=""/>
              </Link>
            </div>
          </div>
          <div style={{height: "150px"}}></div>
          <div className="ContenendorMenu">
            <div className="ContenendorAsistencia">
              <h3>Activar Review</h3>
              <Link to={'/Admin/ActivarReview'} className="Link">
                <img src={ImgReview} className="icono" alt=""/>
              </Link>
            </div>
            <div className="ContenendorPost">
              <h3>Imprimir Lista</h3>
              <Link to={'/Admin/ImprimirAsistencia'} className="Link">
                <img src={ImgPrint} className="icono" alt=""/>
              </Link>
            </div>
          </div>
      </div>
    );
  }
}

export default Menu;
