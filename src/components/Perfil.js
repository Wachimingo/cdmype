import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/Perfil.css";
import {Link} from "react-router-dom";
class Perfil extends Component {
  constructor(props){
    super(props);
    this.state ={
      profile: [],
    }
  }
  componentDidMount(){
    this.getPerfil();
  }
  ComponentWillUnmount(){
    this.setState({profile: []});
  }
getPerfil(){
  let id = localStorage.getItem('id');
  if (typeof this.props.match.params.id !== 'undefined') {
    id = this.props.match.params.id;
    fetch("http://backend.acdmype.org/getperfil.php?id="+id, { mode:'cors'})
       .then(response => response.json())
       .then(data => this.setStoragePerfil(data));
}
}

setStoragePerfil(data){
  // console.log(data[0]);
  this.setState({profile: data[0]});
  localStorage.setItem("id",data[0]['idusuario']);
  localStorage.setItem("nombres",data[0]['nombres']);
  localStorage.setItem("identidad",data[0]['identidad']);
  localStorage.setItem("nombreentidad",data[0]['nombreentidad']);
  localStorage.setItem("nombretipo",data[0]['nombretipo']);
  localStorage.setItem("nombrepuesto",data[0]['nombrepuesto']);
  localStorage.setItem("idpuesto",data[0]['idpuesto']);
  localStorage.setItem("correo",data[0]['correo']);
  localStorage.setItem("telefono",data[0]['telefono']);
  localStorage.setItem("foto",data[0]['imgperfil']);
  localStorage.setItem("privilegio",data[0]['privilegio']);
}
  renderInputSubmit(){
    if (this.props.match.params.id === localStorage.getItem('id')) {
      return(
        <div className="col-md-2">
            <Link to={{pathname:`/Home/EditarPerfil`}} className="btn profile-edit-btn">Editar Perfil</Link>
        </div>
      );
    }
    else {
      return(
         null
      );
    }
  }
  render() {
    return (
      <div className="contenedorPerfil">
      <div className="imgPerfil1">
        {<img id="preview" src={`http://backend.acdmype.org/uploads/usuarios/${this.state.profile["imgperfil"]}`} alt=""/>}
      </div>
        <form method="post" className="InformacionPerfil">
            <div className="row">
                <div className="col-md-9">
                    <div className="profile-head">
                      <h5>
                          {this.state.profile["nombres"]}
                      </h5>
                    </div>
                </div>
                {this.renderInputSubmit()}
            </div>
            <div className="row">
            <div className="col-md-9">
               </div>
                <div className="col-md-9">
                    <div className="tab-content profile-tab" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                          <div className="row">
                              <div className="col-md-6">
                                  <label>Correo</label>
                              </div>
                              <div className="col-md-6">
                                  <p>{this.state.profile['correo']}</p>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-6">
                                  <label>Telefono</label>
                              </div>
                              <div className="col-md-6">
                                  <p>{this.state.profile['telefono']}</p>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-6">
                                  <label>Institucion</label>
                              </div>
                              <div className="col-md-6">
                                  <p>{this.state.profile['nombreentidad']}</p>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-6">
                                  <label>Puesto</label>
                              </div>
                              <div className="col-md-6">
                                  <p>{this.state.profile['nombrepuesto']}</p>
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  );
  }
}

export default Perfil;
