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
    let id = localStorage.getItem('id');
    if (typeof this.props.match.params.id !== 'undefined') {
      id = this.props.match.params.id;
      fetch("http://backend.acdmype.org/getperfil.php?id="+id, { mode:'cors'})
         .then(response => response.json())
         .then(data => this.setState({profile: data[0]}));
    }
  }

  renderInputSubmit(){
    if (this.props.match.params.id === localStorage.getItem('id')) {
      localStorage.removeItem("nombres");
      localStorage.removeItem("identidad");
      localStorage.removeItem("nombreentidad");
      localStorage.removeItem("nombretipo");
      localStorage.removeItem("nombrepuesto");
      localStorage.removeItem("idpuesto");
      localStorage.removeItem("correo");
      localStorage.removeItem("telefono");
      localStorage.removeItem("foto");
      localStorage.removeItem("privilegio");
      localStorage.setItem("nombres",this.state.profile['nombres']);
      localStorage.setItem("identidad",this.state.profile['identidad']);
      localStorage.setItem("nombreentidad",this.state.profile['nombreentidad']);
      localStorage.setItem("nombretipo",this.state.profile['nombretipo']);
      localStorage.setItem("nombrepuesto",this.state.profile['nombrepuesto']);
      localStorage.setItem("idpuesto",this.state.profile['idpuesto']);
      localStorage.setItem("correo",this.state.profile['correo']);
      localStorage.setItem("telefono",this.state.profile['telefono']);
      localStorage.setItem("foto",this.state.profile['imgperfil']);
      localStorage.setItem("privilegio",this.state.profile['privilegio']);
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
      <div className="container emp-profile">
        <div style={{height: "70px"}}></div>
        <form method="post">
            <div className="row">
                <div className="col-md-4">
                    <div className="profile-img">
                      {<img id="preview" src={`http://backend.acdmype.org/uploads/usuarios/${this.state.profile["imgperfil"]}`} alt=""/>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="profile-head">
                                <h5>
                                    {this.state.profile["nombres"]}
                                </h5>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                            </li>
                        </ul>
                    </div>
                </div>
                {this.renderInputSubmit()}
            </div>
            <div className="row">
            <div className="col-md-4">
               </div>
                <div className="col-md-8">
                    <div className="tab-content profile-tab" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                          <div className="row">
                              <div className="col-md-6">
                                  <label>Nombre</label>
                              </div>
                              <div className="col-md-6">
                                  <p>{this.state.profile['nombres']}</p>
                              </div>
                          </div>
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
