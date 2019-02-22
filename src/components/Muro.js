import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/Muro.css";
import "../js/MuroFuncion.js";
import {Link} from 'react-router-dom';
import $ from 'jquery';
class Muro extends Component {
  constructor(props){
    super(props);
    this.state = {
      publicaciones:[],
    }
  }
  componentDidMount(){
    /*fetch para buscar las publicaciones*/
    fetch("https://cdmype.000webhostapp.com/getpublicaciones.php",{mode:'cors'})
      .then(response => response.json())
      .then(data => this.setState({publicaciones: data}));
    // fetch("http://192.168.1.20/cdmypephp/getpublicaciones.php",{mode:'cors'})
    //   .then(response => response.json())
    //   .then(data => this.setState({publicaciones: data}));
  }
  render() {
    $(window).on('load',function(){
      document.body.style.backgroundImage = null;
    });
    const {publicaciones} = this.state;
    $(window).on('load',function(){
      document.body.style.backgroundImage = null;
      document.body.style.background = "white";
    });
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
          				<Link to={{pathname:`/Home/Perfil/${item.idusuario}`}}><img className="img-fluid rounded-circle" src={`https://cdmype.000webhostapp.com/uploads/usuarios/${item.imgperfil}`} alt="User"/></Link>
                  {/*<Link to={{pathname:`/Home/Perfil/${item.idusuario}`}}><img className="img-fluid rounded-circle" src={`http://192.168.1.20/cdmypephp/uploads/usuarios/${item.imgperfil}`} alt="User"/></Link>*/}
          			   </div>
          			   <div className="media-body">
          			    <p className="m-0">{item.nombres} {item.apellidos}</p>
          				  <small><span><i className="icon ion-md-time"></i> {item.fechapublicacion}</span></small>
                    <p className="m-0">{item.descripcion}</p>
          			   </div>
          			  </div>
          			 </div>
          			 <div className="cardbox-item">
          			  <img className="img-fluid" src={`https://cdmype.000webhostapp.com/uploads/publicaciones/${item.foto}`} alt=""/>
                  {/*<img className="img-fluid" src={`http://192.168.1.20/cdmypephp/uploads/publicaciones/${item.foto}`} alt="publicacion"/>*/}
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
