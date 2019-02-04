import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "./css/SideBar.css";
import Agenda from"./components/Agenda.js";
import Perfil from"./components/Perfil.js";
import Muro from"./components/Muro.js";
import Ponentes from"./components/Ponentes.js";
import PonenteInfo from"./components/PonenteInfo.js";
import Patrocinadores from"./components/Patrocinadores.js";
import PatrocinadorInfo from"./components/PatrocinadorInfo.js";
import Post from "./components/ModalWindowPost.js";
import EditarPerfil from "./components/EditarPerfil.js";
import {Route, Switch, Link} from 'react-router-dom';
import "./js/MuroFuncion.js";
import $ from 'jquery';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  /*Funcion para mostrar un preview de la foto seleccionada para la publicacion*/
  onFileSelected(event) {
  var selectedFile = event.target.files[0];
  var reader = new FileReader();

  var imgtag = document.getElementById("myimage");
  imgtag.title = selectedFile.name;

  reader.onload = function(event) {
    imgtag.src = event.target.result;
  };

  reader.readAsDataURL(selectedFile);
  }

/*Funcion para cerrar sesion*/
 cerrarSesion(e){
   this.props.history.replace('/');
 }
  render() {
    $(window).on('load',function(){
      document.body.style.backgroundImage ="white";
      document.body.style.background = "white";
    });
    return (
      <div className="container-fluid ">
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark barra">
              <a href="#sidebar" data-toggle="collapse"><i className="fa fa-navicon fa-lg  w "></i></a>
              <Link to={'/Home'} className="navbar-brand Items">V CONGRESO</Link>
              <button type="button" data-toggle="modal" data-target="#post" className="subir"><i className="fa fa-arrow-up"/> Publicar</button>
              <button type="button" className="cerrar" onClick={this.cerrarSesion.bind(this)}><i className="fa fa-power-off"/> Cerrar Sesion</button>
          </nav>

          {/*Modal window para hacer una publicacion*/}
          <div className="modal fade" id="post" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Subir nueva publicacion</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <Post/>
                </div>
              </div>
            </div>
          </div>
{/*Aqui comienza el dropdown menu*/}
          <div className="row">
              <div className="col-md-3 col-xs-1 p-l-0 p-r-0 collapse in panel fixed-top" id="sidebar">
                  <div className="list-group ">
                      <Link to={'/Home/Agenda'} className="options "   data-parent="#sidebar"><i className="fa fa-calendar-o"></i> <span className="hidden-sm-down">Programa</span></Link>
                      <Link to={'/Home/Ponentes'} className="options  "  data-parent="#sidebar" ><i className="fa fa-user"></i> <span className="hidden-sm-down">Ponentes</span> </Link>
                      <Link to={'/Home/Patrocinadores'} className="options  "  data-parent="#sidebar" ><i className="fa fa-user"></i> <span className="hidden-sm-down">Patrocinadores</span> </Link>
                      <Link to={{pathname:`/Home/Perfil/${sessionStorage.getItem('id')}`}}  className="options  "  data-parent="#sidebar" ><i className="fa fa-user"></i> <span className="hidden-sm-down">Perfil</span> </Link>
                  </div>
             </div>
          </div>
{/*Este es el enrutador, toma las rutas del navegador y renderiza el componente de la barra de navegacion y un componene hijo*/}
          <Switch>
            <Route exact path="/Home" component={Muro} />
            <Route exact path="/Home/Perfil/:id" render={(props) => (<Perfil key={props.match.params.id} {...props}/>)} />
            <Route path="/Home/Agenda" component={Agenda} />
            <Route exact path="/Home/Ponentes/" component={Ponentes} />
            <Route path="/Home/Ponente/:id" component={PonenteInfo} />
            <Route path="/Home/Patrocinadores" component={Patrocinadores} />
            <Route path="/Home/Patrocinador/:id" component={PatrocinadorInfo} />
            <Route  path="/Home/EditarPerfil" component={EditarPerfil}/>
          </Switch>
      </div>
    );
  }
}

export default Home;
