import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/Muro.css";
import "../js/MuroFuncion.js";
import ReviewTaller from"./ReviewTaller.js";
import {Link} from 'react-router-dom';
class Muro extends Component {
  constructor(props){
    super(props);
    this.state = {
      publicaciones:[],
    }
  }
  componentDidMount(){
    /*fetch para buscar las publicaciones*/
    fetch("http://backend.acdmype.org/getpublicaciones.php",{mode:'cors'})
      .then(response => response.json())
      .then(data => this.setState({publicaciones: data}));
  }
  render() {
    const {publicaciones} = this.state;
    // const {command} = this.state;
    return (
    <div className="container-fluid ">
    <div style={{height:"3em"}}></div>
    { publicaciones.map((item,key) =>
      <section className="hero" key={item.idpublicacion}>
         <div className="container">
            <div className="row">
      		   <div className="col-lg-6 offset-lg-3">
        			<div className="cardbox shadow-lg bg-white">
        			 <div className="cardbox-heading">
          			  <div className="media m-0">
          			   <div className="d-flex mr-3">
          				<Link to={{pathname:`/Home/Perfil/${item.idusuario}`}}><img className="img-fluid rounded-circle" src={`http://backend.acdmype.org/uploads/usuarios/${item.imgperfil}`} alt=""/></Link>
          			   </div>
          			   <div className="media-body">
          			    <p className="m-0">{item.nombres} {item.apellidos}</p>
          				  <small><span><i className="icon ion-md-time"></i> {item.fechapublicacion}</span></small>
                    <p className="m-0">{item.descripcion}</p>
          			   </div>
          			  </div>
          			 </div>
          			 <div className="cardbox-item">
          			  <img className="img-fluid" src={`http://backend.acdmype.org/uploads/publicaciones/${item.foto}`} alt=""/>
          			 </div>
            </div>
            </div>
            </div>
            </div>
          </section>
          )}
    </div>

    );
  }
}

export default Muro;
