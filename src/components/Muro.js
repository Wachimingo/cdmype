import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/Muro.css";
import "../js/MuroFuncion.js";
import ReviewTaller from"./ReviewTaller.js";
import {Link} from 'react-router-dom';
import $ from 'jquery';
class Muro extends Component {
  constructor(props){
    super(props);
    this.state = {
      publicaciones:[],
      command:[],
    }
  }
  componentDidMount(){
    /*fetch para buscar las publicaciones*/
    fetch("http://backend.acdmype.org/getreviewcommand.php?id=" + localStorage.getItem('id'),{ mode:'cors'})
       .then(response => response.json())
       .then(data => this.modalReview(data));
    fetch("http://backend.acdmype.org/getpublicaciones.php",{mode:'cors'})
      .then(response => response.json())
      .then(data => this.setState({publicaciones: data}));
    // fetch("https://cdmype.000webhostapp.com/getreviewcommand.php?id=" + localStorage.getItem('id'),{ mode:'cors'})
    //    .then(response => response.json())
    //    .then(data => this.modalReview(data));
    // fetch("https://cdmype.000webhostapp.com/getpublicaciones.php",{mode:'cors'})
    //   .then(response => response.json())
    //   .then(data => this.setState({publicaciones: data}));
    // fetch("http://localhost/cdmypephp/getpublicaciones.php",{mode:'cors'})
    //   .then(response => response.json())
    //   .then(data => this.setState({publicaciones: data}));
      // fetch("http://localhost/cdmypephp/getreviewcommand.php?id=" + localStorage.getItem('id'),{ mode:'cors'})
      //    .then(response => response.json())
      //    .then(data => this.modalReview(data));
  }
  modalReview(data){
    // var resultado = JSON.parse(data);
    console.log(data);
    for(var key in data) {
       if(data.hasOwnProperty(key))
       this.setState({command: data});
            $('#review').modal('show');
     }
  }
  render() {
    const {publicaciones} = this.state;
    const {command} = this.state;
    return (
    <div className="container-fluid ">
{/*Modal window para review*/}
    <div className="modal fade" id="review" tabIndex="-2" role="dialog" aria-labelledby="review" aria-hidden="true" data-backdrop="static" data-keyboard="false">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="exampleModalLabel">Su opinion es importante para nosotros</h4>
          </div>
          <div className="modal-body">
          {command.map((item,key)=>
            <ReviewTaller titulo={item['contenido']} idreviewactivo={item["idreviewactivo"]}/>
          )}
          </div>
        </div>
      </div>
    </div>
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
                  {/*<Link to={{pathname:`/Home/Perfil/${item.idusuario}`}}><img className="img-fluid rounded-circle" src={`https://cdmype.000webhostapp.com/uploads/usuarios/${item.imgperfil}`} alt=""/></Link>*/}
                  {/*<Link to={{pathname:`/Home/Perfil/${item.idusuario}`}}><img className="img-fluid rounded-circle" src={`http://192.168.1.20/cdmypephp/uploads/usuarios/${item.imgperfil}`} alt=""/></Link>*/}
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
                  {/*<img className="img-fluid" src={`https://cdmype.000webhostapp.com/uploads/publicaciones/${item.foto}`} alt=""/>*/}
                  {/*<img className="img-fluid" src={`http://192.168.1.20/cdmypephp/uploads/publicaciones/${item.foto}`} alt=""/>*/}
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
