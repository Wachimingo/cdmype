import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/Perfil.css";
import {Link} from "react-router-dom";
import $ from 'jquery';
class Perfil extends Component {
  constructor(props){
    super(props);
    this.state ={
      profile: [],
    }
  }
  componentDidMount(){
    let id = sessionStorage.getItem('id');
    if (typeof this.props.match.params.id !== 'undefined') {
        id = this.props.match.params.id;
    }
    else {
        this.props.history.push('/Home');
    }
    fetch("http://localhost/cdmypephp/getperfil.php?id="+id, { mode:'cors'})
       .then(response => response.json())
       .then(data => this.setState({profile: data[0]}));
  }
  renderInputSubmit(){
    if (sessionStorage.getItem('id') === this.props.match.params.id) {
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
    function importAll(r) {
      let foto = {};
      r.keys().map((item, index) => { return foto[item.replace('./', '')] = r(item); });
      return foto;
    }
    const foto = importAll(require.context('../img/usuarios', false, /\.(png|jpe?g|svg)$/));
    $(window).on('load',function(){
            document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Herbstlandschaft_%28am_Rebhang%29.jpg/800px-Herbstlandschaft_%28am_Rebhang%29.jpg')";
    });
    return (
      <div className="container emp-profile">
        <div style={{height: "70px"}}></div>
        <form method="post">
            <div className="row">
                <div className="col-md-4">
                    <div className="profile-img">
                        <img id="preview" src={foto[this.state.profile["imgperfil"]]} alt="foto"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="profile-head">
                                <h5>
                                    {this.state.profile["nombres"]} {this.state.profile["apellidos"]}
                                </h5>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Acerca de: Joshua</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {this.renderInputSubmit()}
            </div>
            <div className="row">
            <div class="col-md-4">
               </div>
                <div className="col-md-8">
                    <div className="tab-content profile-tab" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                          <div className="row">
                              <div className="col-md-6">
                                  <label>Nombre</label>
                              </div>
                              <div className="col-md-6">
                                  <p>{this.state.profile['nombres']} {this.state.profile['apellidos']}</p>
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
